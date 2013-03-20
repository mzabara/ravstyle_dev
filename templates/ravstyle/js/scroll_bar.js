(function ($, document, undefined) {
    "use strict";

    var ScrollBar = function (element, options) {
        this.options = options;
        this.$element = $(element);

        var __self = this, $scrollbar = $('.scrollbar', element);

        $.each(['mousewheel', 'mousedown', 'mousemove', 'mouseup', 'touchstart', 'touchmove', 'touchend'], function (i, e) {
            __self['on_' + e] = $.proxy(__self[e], __self);
        });

        this.content = {$obj: $('.overview', element)};
        this.viewport = {$obj: $('.viewport', element)};

        this.scrollbar = {
            $obj: $scrollbar,
            ratio: 0.0,
            track: {
                $obj: $('.track', $scrollbar),
                size: 0.0
            },
            thumb: {
                $obj: $('.thumb', $scrollbar),
                size: 0.0
            }
        };

        this.i_scroll = 0;
        this.mouse_position = {};
        this.finger_position = {};
        this.initial_position = {start: 0, now: 0};

        this.axis = options.axis === 'x';
        this.direction = this.axis ? 'left' : 'top';
        this.size = this.axis ? 'Width' : 'Height';

        if (!this.axis) {
            this.content.$obj.removeAttr('style');
        }

        this.scrollbar.thumb.$obj.removeAttr('style');

        this.update();
        this.setEvents();
    };

    ScrollBar.prototype = {
        mousedown: function (e) {
            var oThumbDir = parseInt(this.scrollbar.thumb.$obj.css(this.direction), 10);
            this.mouse_position.start = this.axis ? e.pageX : e.pageY;
            this.initial_position.start = oThumbDir === 'auto' ? 0 : oThumbDir;
            //
            $(document)
                .bind('mouseup', this.on_mouseup)
                .bind('mousemove', this.on_mousemove);

            this.scrollbar.thumb.$obj
                .bind('mouseup', this.on_mouseup);

            return false;
        },

        mousemove: function (e) {
            if (this.content.ratio < 1) {
                this.initial_position.now = Math.min(
                    (this.scrollbar.track.size - this.scrollbar.thumb.size),
                    Math.max(
                        0,
                        (this.initial_position.start + ((this.axis ? e.pageX : e.pageY) - this.mouse_position.start))
                    )
                );

                this.i_scroll = this.initial_position.now * this.scrollbar.ratio;
                this.scrollContent(this.i_scroll, this.initial_position.now);
            }
            return false;
        },

        mouseup: function (e) {
            $(document)
                .unbind('mouseup', this.on_mouseup)
                .unbind('mousemove', this.on_mousemove);

            this.scrollbar.thumb.$obj
                .unbind('mouseup', this.on_mouseup);

            return false;
        },

        mousewheel: function (e, delta) {
            if (this.content.ratio < 1) {
                this.i_scroll -= delta * this.options.wheel;
                this.i_scroll = Math.min(
                    (this.content[this.options.axis] - this.viewport[this.options.axis]),
                    Math.max(0, this.i_scroll)
                );

                this.scrollContent(this.i_scroll, this.i_scroll / this.scrollbar.ratio);

                return false;
            }
        },

        getTouchPos: function (e) {
            return e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
        },

        touchstart: function (e) {
            if (this.content.ratio >= 1) {
                return true;
            }

            var pos = this.getTouchPos(e),
                oThumbDir = parseInt(this.scrollbar.thumb.$obj.css(this.direction), 10);
            this.finger_position.start = this.axis ? pos.pageX : pos.pageY;
            this.initial_position.start = oThumbDir === 'auto' ? 0 : oThumbDir;
            //
            $(document)
                .bind('touchend', this.on_touchend)
                .bind('touchmove', this.on_touchmove);

            return false;
        },

        touchmove: function (e) {
            if (this.content.ratio < 1) {
                var position = this.getTouchPos(e);
                this.initial_position.now = Math.min(
                    (this.scrollbar.track.size - this.scrollbar.thumb.size),
                    Math.max(
                        0,
                        (this.initial_position.start + (this.finger_position.start - (this.axis ? position.pageX : position.pageY)))
                    )
                );

                this.i_scroll = this.initial_position.now;
                this.scrollContent(this.i_scroll, this.initial_position.now);
            }
            return false;
        },

        touchend: function (e) {
            $(document)
                .unbind('touchend', this.on_touchend)
                .unbind('touchmove', this.on_touchmove);
        },

        setEvents: function () {
            // move scroll bar
            this.scrollbar.thumb.$obj.bind('mousedown', this.on_mousedown);
            // Click on track
            this.scrollbar.track.$obj.bind('mouseup', this.on_mousemove);
            //
            this.$element.bind('mousewheel', this.on_mousewheel);
            // Content touch moove
            this.viewport.$obj.bind('touchstart', this.on_touchstart);
        },

        unSetEvents: function () {
            this.scrollbar.thumb.$obj.unbind('mousedown', this.on_mousedown);
            this.scrollbar.track.$obj.unbind('mouseup', this.on_mousemove);
            this.$element.unbind('mousewheel', this.on_mousewheel);
            this.viewport.$obj.unbind('touchstart', this.on_touchstart);
        },

        update: function (sScroll) {
            this.viewport[this.options.axis] = this.viewport.$obj[0]['offset' + this.size];

            this.content[this.options.axis] = this.content.$obj[0]['scroll' + this.size];
            this.content.ratio = this.viewport[this.options.axis] / this.content[this.options.axis];

            this.scrollbar.$obj.toggleClass('disable', this.content.ratio >= 1);

            if (this.content.ratio >= 1) {
                this.scrollContent(0, 0);
            }

            this.scrollbar.track.size = this.options.size === 'auto'
                ? this.viewport[this.options.axis]
                : this.options.size;

            this.scrollbar.thumb.size = Math.min(
                this.scrollbar.track.size,
                Math.max(
                    0,
                    (this.options.sizethumb === 'auto'
                        ? (this.scrollbar.track.size * this.content.ratio)
                        : this.options.sizethumb
                        )
                )
            );

            this.scrollbar.ratio = this.options.sizethumb === 'auto'
                ? (this.content[this.options.axis] / this.scrollbar.track.size)
                : (this.content[this.options.axis] - this.viewport[this.options.axis]) / (this.scrollbar.track.size - this.scrollbar.thumb.size);

            if (typeof sScroll === 'undefined') {
                sScroll = 'relative';
            }

            this.i_scroll = (sScroll === 'relative' && this.content.ratio <= 1)
                ? Math.min((this.content[this.options.axis] - this.viewport[this.options.axis]), Math.max(0, this.i_scroll)) : 0;

            this.i_scroll = (sScroll === 'bottom' && this.content.ratio <= 1)
                ? (this.content[this.options.axis] - this.viewport[this.options.axis])
                : isNaN(parseInt(sScroll, 10)) ? this.i_scroll : parseInt(sScroll, 10);

            this.setSize();
        },

        setSize: function () {
            this.scrollbar.thumb.$obj.css(this.direction, this.i_scroll / this.scrollbar.ratio);
            this.content.$obj.css(this.direction, -this.i_scroll);
            this.mouse_position.start = this.scrollbar.thumb.$obj.offset()[this.direction];

            var css_size = this.size.toLowerCase();
            this.scrollbar.$obj.css(css_size, this.scrollbar.track.size);
            this.scrollbar.track.$obj.css(css_size, this.scrollbar.track.size);
            this.scrollbar.thumb.$obj.css(css_size, this.scrollbar.thumb.size);
        },

        scrollContent: function (content_offset, thumb_offset) {
            this.scrollbar.thumb.$obj.css(this.direction, thumb_offset);
            this.content.$obj.css(this.direction, -content_offset);
            this.$element.trigger(
                'scroll-' + this.options.axis,
                [content_offset / (this.content[this.options.axis] - this.viewport[this.options.axis])]
            );
        },

        reset: function () {
            this.update(0);
        },

        resetDown: function () {
            this.update('bottom');
        },

        isResetDown: function () {
            return this.content[this.options.axis] <= this.viewport[this.options.axis] + this.i_scroll;
        },

        destroy: function () {
            this.unSetEvents();

            this.options = undefined;
            this.$element = undefined;
            this.scrollbar = undefined;
            this.content = undefined;
            this.viewport = undefined;
        }
    };

    $.fn.myScrollBar = function (option) {
        var args = [].slice.call(arguments, 1);
        return this.each(function () {
            var $this = $(this),
                data = $this.data('tscroll'),
                options = $.extend({}, $.fn.myScrollBar.defaults, typeof option === 'object' && option);
            if (!data) {
                $this.data('tscroll', (data = new ScrollBar(this, options)));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    };

    $.fn.myScrollBar.defaults = {
        axis: 'y', // vertical or horizontal scrollbar? ( x || y ).
        wheel: 40,  //how many pixels must the mouswheel scroll at a time.
        scroll: true, //enable or disable the mousewheel scrollbar
        size: 'auto', //set the size of the scrollbar to auto or a fixed number.
        sizethumb: 'auto', //set the size of the thumb to auto or a fixed number.
        drag_content: true
    };

    $.fn.myScrollBar.Constructor = ScrollBar;

}(jQuery, document));