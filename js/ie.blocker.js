var IE6 = (navigator.userAgent.indexOf("MSIE 6") >= 0) ? true : false;
var IE7 = (navigator.userAgent.indexOf("MSIE 7") >= 0) ? true : false;
var IE8 = (navigator.userAgent.indexOf("MSIE 8") >= 0) ? true : false;

if ((IE6) || (IE7) || (IE8)) {

    $(function () {

        $('<div>')
            .css({
                'position':'fixed',
                'overflow':'hidden',
                'top':'0px',
                'left':'0px',
                backgroundColor:'#ffffff',
                'opacity':'1',
                'width':'100%',
                'height':$(window).height(),
                zIndex:5000
            })
            .appendTo("body");

        $("<div><a href='http://www.mozilla.org/it/firefox/new/' target='_blank' style='position:absolute; bottom:107px; height:50px; cursor:pointer; width:50px; left:70px;  '></a><a href='https://www.google.com/chrome?hl=it' target='_blank' style='position:absolute; cursor:pointer; bottom:107px; height:50px; width:50px; left:125px;  '></a><a href='http://www.opera.com/download/get.pl?id=35257&thanks=true&sub=true' target='_blank' style='position:absolute; cursor:pointer; bottom:107px; height:50px; width:50px; left:178px;  '></a><a href='http://www.microsoft.com/italy/internet-explorer/scarica/' target='_blank' style='position:absolute; cursor:pointer; bottom:107px; height:50px; width:50px; left:235px;  '></a>")
            .css({
                'top':'50%',
                'left':'50%',
                marginLeft:-180,
                marginTop:-250,
                width:360,
                height:500,
                'background-image':'url("img/ie-blocked.jpg")',
                'position':'fixed',
                zIndex:6000
            })
            .appendTo("body");
    });
}