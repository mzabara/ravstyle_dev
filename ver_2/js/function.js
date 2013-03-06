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

$(document).ready(function(e) {
    $("body").queryLoader2({
        barColor: "#000000",
        backgroundColor: "#000000",
        percentage: true,
        barHeight: 0,
        completeAnimation: "fade"
    });
});

$(window).load(function (e) {
    $("body > section").removeClass("hidden");
    init();
    setupParallax();
    setupEventHandlers();
});

