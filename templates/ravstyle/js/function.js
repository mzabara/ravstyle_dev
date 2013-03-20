/*
 * jquery background position
 */

(function($) {
    $.extend($.fx.step,{
        backgroundPosition: function(fx) {
            if (fx.state === 0 && typeof fx.end == 'string') {
                var start = $.curCSS(fx.elem,'backgroundPosition');
                start = toArray(start);
                fx.start = [start[0],start[2]];
                var end = toArray(fx.end);
                fx.end = [end[0],end[2]];
                fx.unit = [end[1],end[3]];
            }
            var nowPosX = [];
            nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
            nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];
            fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];

            function toArray(strg){
                strg = strg.replace(/left|top/g,'0px');
                strg = strg.replace(/right|bottom/g,'100%');
                strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
                var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
                return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
            }
        }
    });
})(jQuery);

///////////////////////////////////////////////

function whichTransitionEvent() {
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
        'transition': 'transitionEnd',
        'OTransition': 'oTransitionEnd',
        'MSTransition': 'msTransitionEnd',
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd'
    }

    for (t in transitions) {
        if (el.style[t] !== undefined) {
            return transitions[t];
        }
    }
};


function switchPages(e) {
    var array = new Array();
    $("#wrapper > article").each(function () {
        var num = this.offsetTop - this.offsetParent.scrollTop;
        var difToCenter = $(this.parentNode).height() * 0.5 - num, constant;
        if (difToCenter > 0) array.push(this);
    });
    if (array.length > 0) {
        var selector = array[array.length - 1].id;
        var patt1 = new RegExp("([0-9]*)$");
        var item = document.querySelector("#menuSection #li" + patt1.exec(selector)[0]);

        //if( item.className == "navItem selected" ) return;

        $("#menuSection > .selected").removeClass('selected');

        if (item.className == "") {
            var actualSelected = document.querySelector("#menuSection > .selected");
            //actualSelected.className = "";
            //item.className = "selected";
            item.className = "navItem selected";
        }

        //////
        resetHover();
        var li_num = patt1.exec(selector)[0];
        $("#menuSection > #li"+li_num).addClass("selected").removeClass("allowHover");

        //////

    };
}

function switchTops(e) {
    e.currentTarget.removeEventListener(transitionEnd, switchTops, false);
    $("body > section").each(function () {
        if (this.style.zIndex == -1) {
            this.style.zIndex = 0;
        };
    });
    e.currentTarget.style.zIndex = -1;
    e.currentTarget.className = "";
    $(e.currentTarget.children).each(function () {
        this.className = "";
        this.style.left = '0px';
    });
}

function switchTopsJQ(target) {
    $("body > section").each(function () {
        if (this.style.zIndex == -1) {
            this.style.zIndex = 0;
        };
    });
    target.style.zIndex = -1;
    target.className = "";
    $(target.children).each(function () {
        this.className = "";
        this.style.left = '0px';
    });
}


function onClickHandler(e) {
    if (e.target) {
        var navTo = false;
        var navTarget;
        if (e.target.nodeName == "A") {

            if(  e.target.parentNode.className == "navItem selected" ) return;
            $('#wrapper').unbind('scroll', switchPages);
            var actualSelected = document.querySelector("#menuSection > .selected");
            //actualSelected.className = "";
            $("#menuSection > .selected").removeClass('selected');
            e.target.parentNode.className = "navItem selected";

            var patt1 = new RegExp("([0-9]*)$");
            var sel = document.querySelector("#page" + patt1.exec(e.target.parentNode.id)[0]);

            //////
            var li_num = patt1.exec(e.target.parentNode.id)[0];
            resetHover();
            $("#menuSection > #li"+li_num).addClass("selected").removeClass("allowHover");
            //////

            $("#wrapper").scrollTo(sel.offsetTop + 'px', 1500, {
                easing: 'easeInOutQuart',
                onAfter: function () {
                    $('#wrapper').bind('scroll', switchPages);
                }
            });

        }

    };

};

/*
 * imposto le funzioni sul menu e 
 * sullo scorrimento della scrollbar laterale
 */

function setupEventHandlers() {
    $("#navigation").on( 'click', onClickHandler );
    $('#wrapper').bind( 'scroll', switchPages );
};

/*
 * inizializzo il menu
 */

function init() {
    if(window.addEventListener){
        window.addEventListener('DOMMouseScroll',wheel,false);
    }

    function wheel(event)
    {
        event.preventDefault();
        event.returnValue=false;
    }
    window.onmousewheel=document.onmousewheel=wheel;

    $("#menuSection > .navItem").addClass("allowHover");
    $("#menuSection > #li01").addClass("selected").removeClass("allowHover");
    document.getElementById("wrapper").className = "selected";

    list = $("body>section");
    i = 0;
    var j = 0;
    for (i; i < list.length; ++i) {
        if (list[i].className != "selected") {
            list[i].style.zIndex = j - 1;
            --j;
        } else {
            list[i].style.zIndex = "0";
            list[i].className = "ontop";
        };
    };


};


var transitionEnd = whichTransitionEvent();

/*
 * resetto i fumetti creati con l'hover
 */

function resetHover(){
    $("#menuSection > .navItem").addClass("allowHover");
    $('#menuSection li.navItem').removeAttr("style");
}

$(window).load(function (e) {
    $("body > section").removeClass("hidden");
    init();
    setupParallax();
    setupEventHandlers();
});

function setupParallax() {
    $window = $("#wrapper");
    $("[data-type]").each(function () {
        $(this).data("offsetY", parseInt($(this).attr("data-offsetY")));
        $(this).data("Xposition", $(this).attr("data-Xposition"));
        $(this).data("speed", $(this).attr("data-speed"))
    });

    $('section[data-type="background"]').each(function () {
        var a = $(this), b = a.offset(), c = b.top;
        $("#wrapper").scroll(function () {
            if ($window.scrollTop() + $window.height() > c && c + a.height() > $window.scrollTop()) {
                var b = -($window.scrollTop() / a.data("speed"));
                if (a.data("offsetY")) {
                    b += a.data("offsetY")
                }
                var dx = '50%';
                var dy = b + 'px';
                a.stop().animate({'background-position-x': dx, 'background-position-y': dy}, 1500, "easeOutExpo");
                $('[data-type="background_sprite"]', a).each(function () {
                    var a = $(this);
                    var b = -($window.scrollTop() / a.data("speed"));
                    var c = a.data("Xposition") + " " + (b + a.data("offsetY")) + "px";
                    a.stop().animate({backgroundPosition:c}, 1500, "easeOutQuart", function () {
                    })
                });
                $('[data-type="element"]', a).each(function () {
                    var a = $(this);
                    var b = -($window.scrollTop() / a.data("speed"));
                    var c = b + a.data("offsetY") + "px";
                    a.stop().animate({top:c}, 1500, "easeOutExpo", function () {
                    })
                })
            }
        })
    })
}

$(document).ready(function () {
    var h = $('body').hasClass('media-min-height-1024') ? 650 : 450;
    $('.scrollarea').css('height', h+'px');
    $('.scrollarea').myScrollBar();

    $("#ravstyle_loader").queryLoader2({
        barColor: "#ffffff",
        backgroundColor: "#101010",
        percentage: true,
        barHeight: 0,
        completeAnimation: "fade"
    });

    $('div.style-frame').click(function() {
        var $this = $(this);
        var isActive = $this.hasClass('active');
        var activeIndex = $this.index();
        var map = {
            0: {'width_map': [40,20,20,20],'left_map': [0,40,60,80]},
            1: {'width_map': [20,40,20,20],'left_map': [0,20,60,80]},
            2: {'width_map': [20,20,40,20],'left_map': [0,20,40,80]},
            3: {'width_map': [20,20,20,40],'left_map': [0,20,40,60]}
        };
        var init_map = {
            'width_map': [25,25,25,25],
            'left_map': [0,25,50,75]
        };

        $('div.style-frame').removeClass('active');
        if(!isActive) {
            $this.addClass('active');
            $('div.style-frame').each(function() {
                var index = $(this).index();
                $(this).stop().animate({'width': map[activeIndex]['width_map'][index] + "%",'left': map[activeIndex]['left_map'][index] + "%"});
            });
        } else {
            $('div.style-frame').each(function() {
                var index = $(this).index();
                $(this).stop().animate({'width': init_map['width_map'][index] + "%",'left': init_map['left_map'][index] + "%"});
            });
        }
    });

    $('ul.roundabout-holder').roundabout();

    $('ul.roundabout-holder-waterWheel').roundabout({
        shape: 'waterWheel'
    });

    $('#slider_creative').bxSlider({
        pager: false,
        nextText: '<i class="icon-chevron-right"></i>',
        prevText: '<i class="icon-chevron-left"></i>'
    });

    $('#li03').click(function() {
        var init_map = {
            'width_map': [25,25,25,25],
            'left_map': [0,25,50,75]
        };

        if(!$(this).hasClass('selected')) {
            $('div.style-frame').removeClass('active');
            $('div.style-frame').each(function() {
                var index = $(this).index();
                $(this).css({'width': init_map['width_map'][index] + "%",'left': init_map['left_map'][index] + "%"});
            });
        }
    });

    var windowHeight = $(window).height();
    $('.processing').each(function() {
        var y = $(this).attr('data-offsety') * (windowHeight / 1200);
        $(this).attr('data-offsety', y);
    });

    WebFontConfig = {
        google: { families: [ 'PT+Sans::latin,cyrillic' ] }
    };
    (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
            '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
    })();
})

