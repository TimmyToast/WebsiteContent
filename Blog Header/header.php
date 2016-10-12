<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>" />
        <meta name="viewport" content="width=device-width" />
        <title><?php wp_title( ' | ', true, 'right' ); ?></title>
    <link rel="apple-touch-icon" sizes="57x57" href="//d1kh76s6bjh8ww.cloudfront.net/site/Toast_Favicon_57x57_Black.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="//d1kh76s6bjh8ww.cloudfront.net/site/Toast_Favicon_114x114_Black.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="//d1kh76s6bjh8ww.cloudfront.net/site/Toast_Favicon_72x72_Black.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="//d1kh76s6bjh8ww.cloudfront.net/site/Toast_Favicon_144x144_Black.png" />
    <link rel="icon" type="image/x-icon" href="//d1kh76s6bjh8ww.cloudfront.net/site/favicon16x16v2.ico" />
        <link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_uri(); ?>" />
    <meta name="referrer" content="always" /> 
        <!-- Start GAS -->
        <script type="text/javascript">
        var _gas = _gas || [];
        _gas.push(['_setAccount', 'UA-1341106-3']); _gas.push(['_trackPageview']); _gas.push(['_gasTrackForms']); _gas.push(['_gasTrackOutboundLinks']);
        _gas.push(['_gasTrackMaxScroll']);
        _gas.push(['_gasTrackDownloads']);
        _gas.push(['_gasTrackYoutube', {force: true}]); _gas.push(['_gasTrackVimeo', {force: true}]); _gas.push(['_gasTrackMailto']);

        (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = '//cdnjs.cloudflare.com/ajax/libs/gas/1.10.1/gas.min.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
        })();
        </script>
        <!-- End GAS -->

        <script type="text/javascript">
            var customPath = "/wp-content/themes/blankslate/fonts";
        </script>
        <script type="text/javascript" src="/wp-content/themes/blankslate/fonts/MyFontsWebfontsKit.js"></script>

        <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?>>
        
        <!-- Google Tag Manager -->
        <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-WMFLQ5"
        height="0" width="0" 
        style="display:none;visibility:hidden"></iframe></noscript>
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WMFLQ5');</script>
        <!-- End Google Tag Manager -->

        <div id="wrapper" class="hfeed">
            <header id="header" role="banner" class="max-width-1100">
                <section id="branding">
                    <div id="site-title">
                        <a class="btn-navbar drawBtn hide-on-desktop hide-on-tablet" href="#">
                            <span class="icon-bar drawBtn"></span>
                            <span class="icon-bar drawBtn"></span>
                            <span class="icon-bar drawBtn"></span>
                        </a>
                        <a href="https://www.toa.st/" title="<?php esc_attr_e( get_bloginfo( 'name' ), 'blankslate' ); ?>" rel="home">

                            <img src="//d1kh76s6bjh8ww.cloudfront.net/img/logo-mobile.png" class="toast-logo">
                        </a>
                    </div>
                    <div id="site-description"><?php bloginfo( 'description' ); ?></div>
                </section>
                <nav id="menu" role="navigation">
                    <div id="search">
                        <form role="search" method="get" id="searchform" class="searchform" action="http://travels.toa.st/">
                            <div>
                                <label class="screen-reader-text visuallyHidden" for="s"></label>
                                <input type="text" value="search" name="s" id="s" autocomplete="off" onfocus="this.value=''">
                                <input type="submit" id="searchsubmit" value="Search" class="sprite">
                            </div>
                        </form>
                    </div>
                    <nav class="category-container grid-90 tablet-grid-90 mobile-grid-90 prefix-5 suffix-5 tablet-prefix-5 tablet-suffix-5 mobile-prefix-5 mobile-suffix-5 hide-on-mobile">
                        <nav class="grid-100 tablet-grid-100 category-nav">
                            <ul>
                                <li class="women nav-option"><a href="https://www.toa.st/women.htm" associate="sub-list-one">Women</a></li>
                                <li class="separator">/</li>
                                <!--<li class="men nav-option"><a href="https://www.toa.st/men.htm" associate="sub-list-two">Men</a></li>
                                <li class="separator">/</li> -->
                                <li class="houseHome nav-option"><a href="https://www.toa.st/houseandhome.htm" associate="sub-list-three">House&amp;Home</a></li>
                                <li class="separator">/</li>
                                <li class="lookbook nav-option"><a href="https://www.toa.st/uk/content/landing-pages/lookbook.htm" associate="sub-list-eight">Lookbook</a></li>
                                <li class="separator">/</li>
                                <li class="editorial nav-option"><a href="/" associate="sub-list-four">Magazine</a></li>
                            </ul>
                        </nav>
                    </nav>
                    <a href="/"><h3 class="tt_header grid-100 tablet-grid-100 mobile-grid-100 grid-parent">Toast Magazine</h3></a>
                    <div class="travels-categories hide-on-mobile">
                        <ul>
                            <li class="category-option"><a href="/category/life-arts/">Arts & Culture</a></li>
                            <li class="separator">/</li>
                            <li class="category-option"><a href="category/food-drink-28/">Food & Drink</a></li>
                            <li class="separator">/</li>
                            <li class="category-option"><a href="/category/land-nature/">Land & Nature</a></li>
                            <li class="separator">/</li>
                            <li class="category-option"><a href="/category/style-stories/">Style & Stories</a></li>
                            <li class="separator">/</li>
                            <li class="category-option"><a href="/category/travel-place/">Travel & Place</a></li>
                            <li class="separator">/</li>
                            <li class="category-option"><a href="/category/book-club/">Book Club</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div id="container">