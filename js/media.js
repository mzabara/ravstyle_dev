$(document).ready(function(){
    var body = $('body').get(0);

    var getClassNameBySubstr = function (classes, substr) {
        for (var i = 0;i < classes.length;i++) {
            if (classes[i].indexOf(substr) > 1) {
                return classes[i];
            }
        }

        return undefined;
    }

    var getWidthClassName = function (classes) {
        return getClassNameBySubstr(classes, 'width');
    }

    var getHeightClassName = function (classes) {
        return getClassNameBySubstr(classes, 'height');
    }

    var getBodyClasses = function () {
        return body.className.split(/\s/);
    }

    var replaceBodyClass = function (old_class, new_class) {
        if (old_class === undefined) {
            body.className += ' ' + new_class;
        } else if (old_class != new_class) {
            body.className = body.className.replace(old_class, new_class);
        }
    }

    var logDimentionsInfo = function() {
        var elem = (document.compatMode === "CSS1Compat") ?
            document.documentElement :
            document.body;

        console.log('screen.width: ' + screen.width);
        console.log('viewportWidth: ' + elem.clientWidth);
        console.log('$(window).width(): ' +  $(window).width());
        console.log('$(document).width(): ' + $(document).width());
    }

    var updateLayoutClass = function() {
        var width = $(window).width(),
            height = $(window).height(),
        //
            body_classes = getBodyClasses(),
        //
            width_class_name = 'media-max-width-1024',
            height_class_name = 'media-min-height-1024',
        //
            current_width_class_name = getWidthClassName(body_classes),
            current_height_class_name = getHeightClassName(body_classes)
            ;

        if (width >= 1300) {
            width_class_name = 'media-min-width-1300'
        } else if (width < 1024) {
            width_class_name = 'media-max-width-768'
        }
        if (height < 750) {
            height_class_name = 'media-min-height-750';
        }

        replaceBodyClass(current_width_class_name, width_class_name);
        replaceBodyClass(current_height_class_name, height_class_name);
        logDimentionsInfo();
    }

    $(window)
        .resize(updateLayoutClass)
        .bind('orientationchange', updateLayoutClass)
    ;

    updateLayoutClass();
});