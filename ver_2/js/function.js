
hoverWidth = new Array(16, 36, 76, 49, 58, 92, 36);
hoverWidth_max = new Array(42, 62, 102, 75, 84, 122, 62);
hoverLeft = new Array(-680, -618, -534, -414, -319, -211, -71);
hoverLeft_max = new Array(-693, -631, -549, -427, -333, -228, -85);

///////////////////////////////////////////////

/*
 * jquery bkg_position
 * v. 1.02
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

/*
 * funzione CambiaPagina sullo scroll
 */

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

/*
 * funzione CambiaPagina sul menu principale
 */

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
 * imposto l'hover sul menu principale (rettangolo e freccine)
 */

function setHoverElement(){

    $('#arrowLi li').each(function(index) { $(this).css({ opacity : 0 , top : 30 }); })
    $('#hoverLi li').each(function(index) {	$(this).css({ width : hoverWidth[index] , opacity : 0 , left : hoverLeft[index] });	})

    $('#menuSection li.navItem').each(function(index) {
        var param = index+1;

        $(this).hover(function(){
            if( $(this).hasClass('allowHover') ){
                $('#hoverLi #overP0' + param).stop(true, true).animate({ opacity : 1 , width : hoverWidth_max[index] , left : hoverLeft_max[index] }, 500, 'easeOutElastic');
                $('#arrowLi #arrowP0' + param).stop(true, true).animate({ opacity : 1 , top : 55 }, 400, 'easeInOutExpo');
            }
        },function(){
            if( $(this).hasClass('allowHover') ){
                $('#arrowLi #arrowP0' + param).stop(true, true).animate({ opacity : 0 , top : 30 }, 300, 'easeInOutExpo');
                $('#hoverLi #overP0' + param).stop(true, true).delay(200).animate({ opacity : 0 , width : hoverWidth[index] , left : hoverLeft[index] }, 300, 'easeInOutExpo');
            }
        })
    })
}

/*
 * resetto i fumetti creati con l'hover
 */

function resetHover(){
    $("#menuSection > .navItem").addClass("allowHover");
    $('#menuSection li.navItem').removeAttr("style");

    $('#menuSection li.navItem').each(function(index) {
        var param = index+1;
        $('#arrowLi #arrowP0' + param).stop(true, true).animate({ opacity : 0 , top : 30 }, 300, 'easeInOutExpo');
        $('#hoverLi #overP0' + param).stop(true, true).delay(200).animate({ opacity : 0 , width : hoverWidth[index]  , left : hoverLeft[index] }, 300, 'easeInOutExpo');
    })}

function showroom(){
    var mLeft = $('#fourth .slide .bx-pager').width()/-2;
    $('#fourth .slide .bx-pager').css({'margin-left':mLeft})
};


function clickInterni(){
    $("#logo a").click(function(){
        $("#wrapper").scrollTo( '0px', 1500, {
            easing: 'easeInOutQuart',
            onAfter: function () {
                $('#wrapper').bind('scroll', switchPages);
            }
        });
        $('#footer_dx').animate({'right' : -500} , 800 , "easeOutExpo");
        $('#footer_sx').animate({'left': -500} , 800 , "easeOutExpo");
        $('#footer_sx').animate({'left': -500} , 800 , "easeOutExpo" , function(){
            $('#footer_sx').css({'color' : '#001b22'});
            $('#footer_sx a').css({'color' : '#001b22'});
            $("#footer_sx a").hover(
                function () {	$(this).css({'color' : '#a9005c'}); },
                function () { $(this).css({'color' : '#001b22'}); }
            );
            $('#footer_sx').animate({'left' : 58} , 800 , "easeOutExpo");
        });
    })

    $("#page01 .scopri a").click(function(){
        $("#wrapper").scrollTo( '4950px', 1500, {
            easing: 'easeInOutQuart',
            onAfter: function () {
                $('#wrapper').bind('scroll', switchPages);
            }
        });
        $('#footer_dx').animate({'right' : -500} , 800 , "easeOutExpo");
        $('#footer_sx').animate({'left': -500} , 800 , "easeOutExpo" , function(){
            $('#footer_sx').css({'color' : '#46410f'});
            $('#footer_sx a').css({'color' : '#46410f'});
            $("#footer_sx a").hover(
                function () {	$(this).css({'color' : '#a9005c'}); },
                function () { $(this).css({'color' : '#46410f'}); }
            );
            $('#footer_sx').animate({'left' : 58} , 800 , "easeOutExpo");
        });
    })

};

/*
 function playMusic(){
 soundManager.setup({
 url: 'swf/',
 onready: function() {
 var mySound1 = soundManager.createSound({ id:'mySound1', url: '_mp3/01.mp3'});
 var mySound2 = soundManager.createSound({ id:'mySound2', url: '_mp3/02.mp3'});
 var mySound3 = soundManager.createSound({ id:'mySound3', url: '_mp3/03.mp3'});
 var mySound4 = soundManager.createSound({ id:'mySound4', url: '_mp3/04.mp3'});
 var mySound5 = soundManager.createSound({ id:'mySound5', url: '_mp3/05.mp3'});
 var mySound6 = soundManager.createSound({ id:'mySound6', url: '_mp3/06.mp3'});
 var mySound7 = soundManager.createSound({ id:'mySound7', url: '_mp3/07.mp3'});
 mySound1.play();

 $('#li01 a').click(function(){ soundManager.stopAll(); mySound1.play(); })
 $('#li02 a').click(function(){ soundManager.stopAll(); mySound2.play(); })
 $('#li03 a').click(function(){ soundManager.stopAll(); mySound3.play(); })
 $('#li04 a').click(function(){ soundManager.stopAll(); mySound4.play(); })
 $('#li05 a').click(function(){ soundManager.stopAll(); mySound5.play(); })
 $('#li06 a').click(function(){ soundManager.stopAll(); mySound6.play(); })
 $('#li07 a').click(function(){ soundManager.stopAll(); mySound7.play(); })

 },
 ontimeout: function() { }
 });
 }
 */

///////////////////////////////////////////////////////////////////////////////////

//$(document).ready(function (e) {
//
////    $("body").queryLoader2({
////        barColor: "#000000",
////        backgroundColor: "#000000",
////        percentage: true,
////        barHeight: 0,
////        completeAnimation: "fade"
////    });
////
////    $('.fancybox').fancybox({
////        maxWidth:	1100,
////        maxHeight:	800,
////        fitToView:	false,
////        width:		1100,
////        height:		800,
////        autoSize:	false,
////        loseClick:	false,
////        openEffect:	'none',
////        closeEffect:'none'
////    });
////
////    $(".various").fancybox({
////        maxWidth	: 600,
////        maxHeight	: 'auto',
////        fitToView	: false,
////        width		: 600,
////        height		: 'auto',
////        autoSize	: false,
////        closeClick	: false,
////        openEffect	: 'none',
////        closeEffect	: 'none'
////    });
//
//    $('#social .krescendo a img').css({'opacity':0.5})
//    $('#social .krescendo a img').hover(
//        function () {
//            $(this).css({'opacity':1})
//        },
//        function () {
//            $(this).css({'opacity':0.5})
//        });
//
//    if(!swfobject.hasFlashPlayerVersion("1")){
//        $('#sfogliabile').attr('href', 'public/RTT_3ante.pdf')
//    }
//
//    setHoverElement();
//    showroom();
//    clickInterni();
//    //playMusic();
//
//    $('#slider_world').bxSlider();
//    $('#slider_show').bxSlider({auto: true , pager: true});
//    $(".img1").rotate({angle:-5});
//    $(".img2").rotate({angle:-1});
//    $(".img3").rotate({angle:4});
//    $(".img4").rotate({angle:4});
//    $(".img5").rotate({angle:5});
//    $(".img6").rotate({angle:-4});
//
//    if(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1){
//        $('#third .mainTxt h2').css({'margin' : '55px 0 0 20px'});
//        $('#third .mainTxt h3').css({'width': 150});
//        $('.fancy_txt h2').css({'margin-top':0});
//    }
//});

$(window).load(function (e) {
    $("body > section").removeClass("hidden");
    init();
    setupParallax();
    setupEventHandlers();
});

