<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=1260, user-scalable=yes">
    <title>{$site_title}</title>
    <link href="{$THEME}/css/style.css" rel="stylesheet" type="text/css">
    <link href="{$THEME}/css/reset.css" rel="stylesheet" type="text/css">
    <!--<link href="{$THEME}/css/media.css" rel="stylesheet" type="text/css">-->
    <link href="{$THEME}/css/tinyscroll.css" rel="stylesheet" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=PT+Sans:400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="{$THEME}/css/elusive-webfont.css">
    <script type="text/javascript" src="{$THEME}/js/jquery-1.7.2.min.js"></script>
    <script type="text/javascript" src="{$THEME}/js/function.js"></script>
    <script type="text/javascript" src="{$THEME}/js/jquery.transform-0.9.3.min_.js"></script>
    <script type="text/javascript" src="{$THEME}/js/jquery.mousewheel.js"></script>
    <script type="text/javascript" src="{$THEME}/js/browser-detection.js"></script>
    <script type="text/javascript" src="{$THEME}/js/main.js"></script>
    <!--<script type="text/javascript" src="{$THEME}/js/media.js"></script>-->
    <script type="text/javascript" src="{$THEME}/js/scroll_bar.js"></script>
    <script type="text/javascript" src="{$THEME}/js/jquery.roundabout.min.js"></script>
    <script type="text/javascript" src="{$THEME}/js/jquery.roundabout-shapes.min.js"></script>
    <!--[if IE 7]>
    <link rel="stylesheet" href="{$THEME}/css/elusive-webfont-ie7.css">
    <script type="text/javascript" src="{$THEME}/js/lte-ie7.js"></script>
    <![endif]-->
    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
</head>

<body>
<section id="ravstyle_loader"></section>
<header>
    <div class="logotyp">
        <img src="{$THEME}/images/dark-logo.png" alt="">
    </div>
    <nav id="navigation">
        {load_menu('main_menu')}
    </nav>
    <div id="socials">
        <a href="#">
            <i class="icon-facebook"></i>
        </a>
        <a href="#">
            <i class="icon-vkontakte"></i>
        </a>
    </div>
</header>

<section id="wrapper" class="ontop">
<article id="page01">
    <section id="first" data-speed="18" data-type="background" data-offsety="0">
        <article>
            <div class="light-1" data-type="element" data-offsety="520" data-speed="0.7"><img src="{$THEME}/images/parallax/index-1.png"></div>
            <div class="light-2" data-type="element" data-offsety="390" data-speed="0.3"><img src="{$THEME}/images/parallax/index-2.png"></div>
            <div class="light-3" data-type="element" data-offsety="650" data-speed="1"><img src="{$THEME}/images/parallax/index-3.png"></div>
            <div class="intro" data-type="element" data-offsety="250" data-speed="2">
                <div class="f30">
                    the
                </div>
                <div class="f90">
                    RAVSTYLE
                </div>
                <div class="f20">
                    make up & hair style
                </div>
                <div class="text">
                    <p>Наша работа &mdash; нести красоту людям.</p>
                    <p>Помните! Нет не красивых людей, есть ленивые!</p>
                    <i class="icon-heart-alt"></i>
                </div>
            </div>
        </article>
    </section>
</article>

<article id="page02">
    <section id="second" data-speed="17" data-type="background" data-offsety="0">
        <article>
            <div class="wedding-1" data-type="element" data-offsety="1150" data-speed="3"><img src="{$THEME}/images/parallax/wedding-1.png"></div>
            <div class="wedding-2" data-type="element" data-offsety="720" data-speed="9"><img src="{$THEME}/images/parallax/wedding-2.png"></div>
            <div class="wedding-3" data-type="element" data-offsety="1150" data-speed="6"><img src="{$THEME}/images/parallax/wedding-3.png"></div>
            <div class="wedding-4" data-type="element" data-offsety="8800" data-speed="0.2"><img src="{$THEME}/images/parallax/wedding-4.png"></div>
            <div class="slide" data-type="element" data-offsety="1800" data-speed="1">

                {widget('wedding_gallery')}

            </div>
        </article>
    </section>
</article>

<article id="page03">
    <section id="third" data-speed="6" data-type="background" data-offsety="250">
        <article>
            <div class="style-frame evening-makeup" data-type="element" data-offsety="544" data-speed="5">
                {widget('style_gallery_1')}
            </div>
            <div class="style-frame day-makeup" data-type="element" data-offsety="1360" data-speed="2">
                {widget('style_gallery_2')}
            </div>
            <div class="style-frame holiday-makeup" data-type="element" data-offsety="2720" data-speed="1">
                {widget('style_gallery_3')}
            </div>
            <div class="style-frame stylized-makeup" data-type="element" data-offsety="5440" data-speed="0.5">
                {widget('style_gallery_4')}
            </div>
        </article>
    </section>
</article>

<article id="page04">
    <section id="fourth" data-speed="8" data-type="background" data-offsety="380">
        <article>
            <div class="creative-1" data-type="element" data-offsety="2750" data-speed="1.4"><img src="{$THEME}/images/parallax/creative-1.png"></div>
            <div class="creative-2" data-type="element" data-offsety="1150" data-speed="4"><img src="{$THEME}/images/parallax/creative-2.png"></div>
            <div class="creative-3" data-type="element" data-offsety="20100" data-speed="0.2"><img src="{$THEME}/images/parallax/creative-3.png"></div>
            <div class="creative-4" data-type="element" data-offsety="38900" data-speed="0.1"><img src="{$THEME}/images/parallax/creative-4.png"></div>

            <div class="slide" data-type="element" data-offsety="2050" data-speed="2">
                <div class="bx-wrapper">
                    <div class="bx-window">
                        <div id="slider_creative">
                            <div>
                                <img src="{$THEME}/images/gallery/creative/1.jpg" class="img1">
                                <img src="{$THEME}/images/gallery/creative/2.jpg" class="img2">
                                <img src="{$THEME}/images/gallery/creative/3.jpg" class="img3">

                                <img src="{$THEME}/images/gallery/creative/4.jpg" class="img4">
                                <img src="{$THEME}/images/gallery/creative/5.jpg" class="img5">
                                <img src="{$THEME}/images/gallery/creative/6.jpg" class="img6">
                            </div>
                        </div>
                    </div>
                    <a href="#" class="bx-prev">
                        <i class="icon-chevron-left"></i>
                    </a>
                    <a href="#" class="bx-next">
                        <i class="icon-chevron-right"></i>
                    </a>
                </div>
                <div class="clearfix"></div>
                <div class="text">
                    <h1>
                        <span class="left-shape"></span>
                        Креатив
                        <span class="right-shape"></span>
                    </h1>
                    <p>Работа стилиста по созданию креативного образа похожа на работу художника создающего своё полотно.
                        Креативному образу особо свойственен творческий подход, ведь креатив - это, прежде всего яркость,
                        что-то совсем необычное, бросающееся в глаза с использованием специальных красок, блесток,
                        звездочек, перьев и спецэффектов. Такой образ будет уместен на шумных вечеринках, дискотеках,
                        карнавалах и шоу.
                    </p>
                </div>
            </div>
        </article>
    </section>
</article>

<article id="page05">
    <section id="fifth" data-speed="10" data-type="background" data-offsety="350">
        <article>
            <div class="cost-1" data-type="element" data-offsety="5700" data-speed="1"><img src="{$THEME}/images/parallax/cost-1.png"></div>
            <div class="cost-2" data-type="element" data-offsety="16600" data-speed="0.3"><img src="{$THEME}/images/parallax/cost-2.png"></div>
            <div class="cost-3" data-type="element" data-offsety="2650" data-speed="2"><img src="{$THEME}/images/parallax/cost-3.png"></div>
            <div class="text">
                <h1>
                    <span class="left-shape"></span>
                    Стоимость услуг
                    <span class="right-shape"></span>
                </h1>
                <div class="scrollarea">
                    <div class="scrollbar">
                        <div class="track">
                            <div class="thumb"></div>
                        </div>
                    </div>
                    <div class="viewport" style="height:600px;">
                        <div class="overview">
                            {widget('pricelist')}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </section>
</article>

<article id="page06">
    <section id="sixth" data-speed="8" data-type="background" data-offsety="670">
        <article>
            <div class="contact-info" data-type="element" data-offsety="2200" data-speed="3.2">
                <h1>Анастасия Рогожкина</h1>
                <p>
                    <i class="icon-phone-alt"></i>+7 916 3567669
                </p>
                <p>
                    <i class="icon-skype"></i> <a href="skype:[ravstyle.ru]?[call]">ravstyle.ru</a>
                </p>
                <p>
                    <i class="icon-envelope"></i> <a href="mailto:info@ravstyle.ru">info@ravstyle.ru</a>
                </p>
            </div>
        </article>
    </section>
</article>

</section>

<footer>
    &copy; RAVSTYLE, 2013
</footer>

</body>
</html>