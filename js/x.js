/*
 * PARALLAX
 * Author: Richard Shepherd
 */

$(document).ready(function() {
    var $window = $("#wrapper");
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
                var d = "(50% " + b + "px)";
                a.stop().animate({backgroundPosition:d}, 1500, "easeOutExpo");
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
    });
});
