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

        switch (patt1.exec(selector)[0]) {
            case '01':
                resetHover();
                $('<style> #navigation li:hover:not(.selected) {color:#333} #navigation .selected {color:#333} </style>').appendTo('head');
                $("#menuSection > #li01").addClass("selected").removeClass("allowHover");
                $('#arrowLi #arrowP01').delay(1000).animate({ opacity : 1 , top : 55 }, 400, 'easeInOutExpo');
                $('#hoverLi #overP01').delay(1000).animate({ opacity : 1 , width : 42 , left : -693 }, 500, 'easeOutElastic');
                break;

            case '02':
                resetHover();
                $('<style> #navigation li:hover:not(.selected) {color:#02627c} #navigation .selected {color:#02627c} </style>').appendTo('head');
                $("#menuSection > #li02").addClass("selected").removeClass("allowHover");
                $('#arrowLi #arrowP02').delay(1000).animate({ opacity : 1 , top : 55 }, 400, 'easeInOutExpo');
                $('#hoverLi #overP02').delay(1000).animate({ opacity : 1 , width : 62 , left : -631 }, 500, 'easeOutElastic');
                break;

            case '03':
                resetHover();
                $('<style> #navigation li:hover:not(.selected) {color:#c16d00} #navigation .selected {color:#c16d00} </style>').appendTo('head');
                $("#menuSection > #li03").addClass("selected").removeClass("allowHover");
                $('#arrowLi #arrowP03').delay(1000).animate({ opacity : 1 , top : 55 }, 400, 'easeInOutExpo');
                $('#hoverLi #overP03').delay(1000).animate({ opacity : 1 , width : 102 , left : -549 }, 500, 'easeOutElastic');
                break;

            case '04':
                resetHover();
                $('<style> #navigation li:hover:not(.selected) {color:#ca6eb6} #navigation .selected {color:#ca6eb6} </style>').appendTo('head');
                $("#menuSection > #li04").addClass("selected").removeClass("allowHover");
                $('#arrowLi #arrowP04').delay(1000).animate({ opacity : 1 , top : 55 }, 400, 'easeInOutExpo');
                $('#hoverLi #overP04').delay(1000).animate({ opacity : 1 , width : 75 , left : -427 }, 500, 'easeOutElastic');
                break;

            case '05':
                resetHover();
                $('<style> #navigation li:hover:not(.selected) {color:#bcb134} #navigation .selected {color:#bcb134} </style>').appendTo('head');
                $("#menuSection > #li05").addClass("selected").removeClass("allowHover");
                $('#arrowLi #arrowP05').delay(1000).animate({ opacity : 1 , top : 55 }, 400, 'easeInOutExpo');
                $('#hoverLi #overP05').delay(1000).animate({ opacity : 1 , width : 84 , left : -333 }, 500, 'easeOutElastic');
                break;

            case '06':
                resetHover();
                $('<style> #navigation li:hover:not(.selected) {color:#593a7a} #navigation .selected {color:#593a7a} </style>').appendTo('head');
                $("#menuSection > #li06").addClass("selected").removeClass("allowHover");
                $('#arrowLi #arrowP06').delay(1000).animate({ opacity : 1 , top : 55 }, 400, 'easeInOutExpo');
                $('#hoverLi #overP06').delay(1000).animate({ opacity : 1 , width : 122 , left : -228 }, 500, 'easeOutElastic');
                break;

            case '07':
                resetHover();
                $('<style> #navigation li:hover:not(.selected) {color:#a12701} #navigation .selected {color:#a12701} </style>').appendTo('head');
                $("#menuSection > #li07").addClass("selected").removeClass("allowHover");
                $('#arrowLi #arrowP07').delay(1000).animate({ opacity : 1 , top : 55 }, 400, 'easeInOutExpo');
                $('#hoverLi #overP07').delay(1000).animate({ opacity : 1 , width : 62 , left : -85 }, 500, 'easeOutElastic');
                break;
        }

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

            switch (patt1.exec(e.target.parentNode.id)[0]) {
                case '01':
                    resetHover();
                    $('<style> #navigation li:hover:not(.selected) {color:#333} #navigation .selected {color:#333} </style>').appendTo('head');
                    $("#menuSection > #li01").addClass("selected").removeClass("allowHover");
                    $('#arrowLi #arrowP01').delay(1000).animate({ opacity : 1 , top : 55 }, 400, 'easeInOutExpo');
                    $('#hoverLi #overP01').delay(1000).animate({ opacity : 1 , width : 42 , left : -693 }, 500, 'easeOutElastic');
                    break;

                case '02':
                    resetHover();
                    $('<style> #navigation li:hover:not(.selected) {color:#02627c} #navigation .selected {color:#02627c} </style>').appendTo('head');
                    $("#menuSection > #li02").addClass("selected").removeClass("allowHover");
                    $('#arrowLi #arrowP02').delay(1000).animate({ opacity : 1 , top : 55 }, 400, 'easeInOutExpo');
                    $('#hoverLi #overP02').delay(1000).animate({ opacity : 1 , width : 62 , left : -631 }, 500, 'easeOutElastic');
                    break;

                case '03':
                    resetHover();
                    $('<style> #navigation li:hover:not(.selected) {color:#c16d00} #navigation .selected {color:#c16d00} </style>').appendTo('head');
                    $("#menuSection > #li03").addClass("selected").removeClass("allowHover");
                    $('#arrowLi #arrowP03').delay(1000).animate({ opacity : 1 , top : 55 }, 400, 'easeInOutExpo');
                    $('#hoverLi #overP03').delay(1000).animate({ opacity : 1 , width : 102 , left : -549 }, 500, 'easeOutElastic');
                    break;

                case '04':
                    resetHover();
                    $('<style> #navigation li:hover:not(.selected) {color:#ca6eb6} #navigation .selected {color:#ca6eb6} </style>').appendTo('head');
                    $("#menuSection > #li04").addClass("selected").removeClass("allowHover");
                    $('#arrowLi #arrowP04').delay(1000).animate({ opacity : 1 , top : 55 }, 400, 'easeInOutExpo');
                    $('#hoverLi #overP04').delay(1000).animate({ opacity : 1 , width : 75 , left : -427 }, 500, 'easeOutElastic');
                    break;

                case '05':
                    resetHover();
                    $('<style> #navigation li:hover:not(.selected) {color:#bcb134} #navigation .selected {color:#bcb134} </style>').appendTo('head');
                    $("#menuSection > #li05").addClass("selected").removeClass("allowHover");
                    $('#arrowLi #arrowP05').delay(1000).animate({ opacity : 1 , top : 55 }, 400, 'easeInOutExpo');
                    $('#hoverLi #overP05').delay(1000).animate({ opacity : 1 , width : 84 , left : -333 }, 500, 'easeOutElastic');
                    break;

                case '06':
                    resetHover();
                    $('<style> #navigation li:hover:not(.selected) {color:#593a7a} #navigation .selected {color:#593a7a} </style>').appendTo('head');
                    $("#menuSection > #li06").addClass("selected").removeClass("allowHover");
                    $('#arrowLi #arrowP06').delay(1000).animate({ opacity : 1 , top : 55 }, 400, 'easeInOutExpo');
                    $('#hoverLi #overP06').delay(1000).animate({ opacity : 1 , width : 122 , left : -228 }, 500, 'easeOutElastic');
                    break;

                case '07':
                    resetHover();
                    $('<style> #navigation li:hover:not(.selected) {color:#a12701} #navigation .selected {color:#a12701} </style>').appendTo('head');
                    $("#menuSection > #li07").addClass("selected").removeClass("allowHover");
                    $('#arrowLi #arrowP07').delay(1000).animate({ opacity : 1 , top : 55 }, 400, 'easeInOutExpo');
                    $('#hoverLi #overP07').delay(1000).animate({ opacity : 1 , width : 62 , left : -85 }, 500, 'easeOutElastic');
                    break;
            }

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
    $('#hoverLi #overP01').animate({ opacity : 1 , width : 42 , left : -693 }, 500, 'easeOutElastic');
    $('#arrowLi #arrowP01').animate({ opacity : 1 , top : 55 }, 400, 'easeInOutExpo');
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

