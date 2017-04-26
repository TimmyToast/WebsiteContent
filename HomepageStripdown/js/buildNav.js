 function buildTopNav() {
    console.log("hello")
                    if (void 0 !== $(".selected .new-sub-nav").offset())
                        if ($(window).width() - ($(".selected .new-sub-nav").offset().left + $(".selected .new-sub-nav").outerWidth()) < 20)
                            for (; $(window).width() - ($(".selected .new-sub-nav").offset().left + $(".selected .new-sub-nav").outerWidth()) < 10;) $(".selected .new-sub-nav").css({
                                left: "-=10px"
                            });
                        else $(".selected .new-sub-nav").css({
                            left: "-10px"
                        }), $(window).width() - ($(".selected .new-sub-nav").offset().left + $(".selected .new-sub-nav").outerWidth()) < 20 && g()
                }
                $.browser.device = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|ios|mobile|opera mobi|opera|tab|touchpad|nexus 7|nexus 10|gt-n|pad|gt-p|ideatab|sm-t|hp slate|xoom|aurora-ii|me301t|a1-810|a1-811|nookhd|pmp5880d|quantum7|kindle fire|sgp3|nook hd|transformer|at300|cobalt|momo|sweet m|archos|nook|nabi2|mz60|vega|slider|mid7|kftt|streak|lepanii|htc_flyer|jro03h|bntv400|a500|kftt build|m805|pom727mc|cm_tenderloin/i.test(navigator.userAgent.toLowerCase()), $(".product-size-charts").click(function() {
                        _gaq.push(["_trackEvent", "beta", "product page size chart clicked"])
                    }), !0 === $.browser.device && $(".nav-option").click(function(a) {
                        a.preventDefault(), $that = $(this), $(".nav-option").each(function() {
                            $(this) !== $that && $(this).click(function(a) {
                                a.preventDefault(), $(this).trigger("hover"), $(this).unbind("click")
                            })
                        }), $(this).trigger("hover"), $(this).unbind("click")
                    },
                 void 0 === $.cookie("cookie-banner-dismissed17") && ($.cookie("cookie-banner-dismissed17", "true", {
                        expires: 999,
                        path: "/"
                    }), $("body").prepend("<div id='cookie-banner'>TOAST uses cookies to improve your experience of shopping online. In using the site you have agreed to our cookies policy. <a href='/content/help/help.htm?helpSection=cookie-policy'>Learn more.</a> <a href='#' id='cookie-dismiss'><span class='sprite close'></span></a>"), $("#cookie-dismiss").click(function(a) {
                        a.preventDefault(), $("#cookie-banner").remove()
                    })), $("#ctl00_ctl01_btnSearch").click(function(a) {
                        "search" == $("#ctl00_ctl01_txtSearch").val() && a.preventDefault()
                    }), $(".main-content .category-nav-list").removeClass("max-width-1000"), $(".login-item").appendTo($(".right-side-nav .user-options")), setTimeout(function() {
                        $("#    ").appendTo($(".right-side-nav .user-options"))
                    }, 50), $("#newFooter a").click(function() {
                        var a = "";
                        if ($(this).parents("#socialLinks").length > 0) a = $(this).attr("href").split("."), a = a[1];
                        else if ($(this).parents("#mainLinks").length > 0) {
                            var b = $(this).find("span").text();
                            a = $(this).text(), a = a.replace(b, ""), a = $.trim(a)
                        } else a = $(this).text();
                        _gaq.push(["_trackEvent", "Footer Link", "Click", a])
                    }), $(".new-cat-nav .nav-option .relative > a").click(function() {
                        _gaq.push(["_trackEvent", "Top Nav", "Click", $(this).text()])
                    }), $(".new-cat-nav .new-sub-nav-list a").click(function() {
                        _gaq.push(["_trackEvent", "Sub Nav", "Click", $(this).parents(".nav-option").find(".relative > a").text() + " > " + $(this).text()])
                    })), $(".product-details .recentlyViewed li").removeClass("grid-20 tablet-grid-20 mobile-grid-20").addClass("grid-33 tablet-grid-33 mobile-grid-33 visuallyHidden");
                for (var j = 0; j < $(".product-details .recentlyViewed li").length; j++) 3 > j && $($(".product-details .recentlyViewed li")[j]).removeClass("visuallyHidden");
                $("header .nav-bar").length > 0 && void 0 !== $("header .nav-bar").offset && $("header .nav-bar").offset().top, $(".category-container .category-nav-list").removeClass("hide-on-tablet"), $(".landingPage a").click(function() {
                    try {
                        var a = $(this).attr("href");
                        _gaq.push(["_trackEvent", "Landing Page Panel", "Click", a])
                    } catch (a) {}
                }), $(".close-nav-btn").click(function(a) {
                    a.preventDefault(), $(".category-nav .nav-option a").hasClass("selected") && ($(".category-nav .nav-option a").removeClass("selected"), c.css({
                        height: "0px",
                        opacity: 0
                    }), f(c, 450))
                }), $("body").on("click", ".product-sizes li", function(a, b) {
                    if (void 0 === b) {
                        var c = $(this).text();
                        if (_gaq.push(["_trackEvent", "Size", "Click", c]), $(this).hasClass("regular") || $(this).hasClass("long") || $(this).hasClass("short") || $(this).hasClass("product-sizes-split")) {
                            var d = $(this).html().split(" ");
                            d = d[1], _gaq.push(["_trackEvent", "Leg Length", "Click", d])
                        }
                    }
                }), $("body").on("change", ".product-qty select", function() {
                    var a = $(this).val();
                    _gaq.push(["_trackEvent", "Quantity", "Select", a])
                }), $("body").on("click", ".product-swatches li", function(a, b) {
                    if (void 0 === b) {
                        var c = $(this).find("img").attr("alt");
                        _gaq.push(["_trackEvent", "Colour", "Click", c])
                    }
                }), $("body").on("change", ".basketqtylist", function() {
                    var a = $(this).val(),
                        b = $(this).parent().parent().find(".basketProductDescription a").attr("title");
                    _gaq.push(["_trackEvent", "Change Quantity", a, b])
                }), $("body").on("click", "#basketTableMain .basketTableTd input", function() {
                    var a = $(this).parent().parent().find(".basketProductDescription a").attr("title");
                    _gaq.push(["_trackEvent", "Remove Product", "Click", a])
                }), $("#promobutton").click(function() {
                    var a = $("#promoForm input").val();
                    a.length > 0 && _gaq.push(["_trackEvent", "Promotional Code", "Enter", a])
                }), $(".promoField").keydown(function(a) {
                    13 == a.which && promoCode.length > 0 && _gaq.push(["_trackEvent", "Promotional Code", "Enter", promoCode])
                }), $("body").on("click", ".basket-recommendations-container .basket-recommendations", function() {
                    var a = $(this).find("img").attr("alt");
                    _gaq.push(["_trackEvent", "Others Like", "Click", a])
                }), $("#continueShopping").click(function() {
                    _gaq.push(["_trackEvent", "Continue Shopping", "Click", "Continue Shopping"])
                }), $(".checkoutButton").click(function() {
                    _gaq.push(["_trackEvent", "Secure Checkout", "Click", "Secure Checkout"])
                });
                var m = $('<div class="left-draw hide-on-desktop"><div class="nav-wrapper"><nav><ul class="search-nav nav-draw-ul"></ul><ul class="menu-nav nav-draw-ul"></ul><ul class="help-nav nav-draw-ul"></ul></nav></div></div>');
                $("body").prepend(m), $(".search-nav").append($('<li><form action="#"><input name="ctl01$txtSearch" type="search" id="ctl01_txtSearch" class="searchBox-Nav" /></form></li>')), $(".menu-nav").append("<li class='nav-option left-draw-basket'><a href='/basket.htm' associate='sub-list-basket'>Basket " + ($(".basket-items .qty").length > 0 ? $(".basket-items .qty").html() : "(0)") + "</a></li><li class='nav-option mobile-nav-checkout'><a href='/checkout/login.htm'>Checkout</a></li>"), $(".help-nav").append('<li class="hide-on-desktop"><a href="/content/wishlist/wishlist.htm">Wishlist (<span class="wishlist-qty">0</span>)</a></li><li class="hide-on-desktop"><a href="/account.htm?mode=myaccount">My Account</a></li>'), $(".help-nav #topBasketContainer").remove(), $("<li>" + $(".shop-section a") + "</li>"), $(".left-draw .searchBox-Nav").val("search"), $(".left-draw .searchBox-Nav").on("focus", function() {
                    "search" == $(this).val() && $(this).val("")
                }).on("focusout", function() {
                    "" == $(this).val() && $(this).val("search")
                });
                var n = !1;
                $("body").append("<div id='newHeaderBlackout' class='visuallyHidden'></div>"), $(".new-cat-nav > li:not(.separator):not(.new-cat-nav-new)").hover(function() {
                    $(this).find(".new-sub-nav").length > 0 && (n = !0, $(this).hasClass("selected") || $(".new-cat-nav > li").removeClass("selected"), $(".fixedRight").removeClass("fixedRight"), $(this).addClass("selected"), $("#newHeaderBlackout").removeClass("visuallyHidden"), $("#newHeaderBlackout").addClass("show"), g())
                }, function() {
                    n = !1, setTimeout(function() {
                        $(".new-cat-nav li.selected").length < 1 && $("#newHeaderBlackout").addClass("visuallyHidden"), !1 === n && ($("#newHeaderBlackout").removeClass("show"), setTimeout(function() {
                            !1 === n && $("#newHeaderBlackout").addClass("visuallyHidden")
                        }, 200), $(".new-cat-nav > li").removeClass("selected"))
                    }, 200)
                }), $(".separator").on("mouseenter mouseleave", function(a) {
                    $(this).prev("li").trigger(a.type)
                }), $(".close-tablet-menu-btn").click(function(a) {
                    a.preventDefault(), n = !1, $(".new-cat-nav > li").removeClass("selected"), setTimeout(function() {
                        $("#newHeaderBlackout").addClass("visuallyHidden")
                    }, 200)
                });
                var p = "",
                    q = 0;
                $(".new-cat-nav .nav-option").each(function() {
                    var a = $(this).find("> div > a");
                    if (p += "<li class='nav-option'><a href='" + a.attr("href") + "' " + (void 0 !== a.attr("style") ? "style='" + a.attr("style") + "'" : "") + ">" + a.text() + "</a></li>", $(this).find(".new-sub-nav li").length > 0) {
                        var b = "<li><ul class='mobile-sub-nav'>";
                        $(this).find(".new-sub-nav .main-link, .new-sub-nav .new-sub-nav-list-heading").each(function() {
                            var a = $(this).find("a");
                            if ($(this).hasClass("new-sub-nav-list-heading")) {
                                q++, b += "<li class='nav-option subNavItem" + q + "' id='" + $(this).text() + "'><a href='#' class='mobile-sub-list-heading'>+ " + $(this).text() + "</a></li>";
                                var c = "<li id='" + $(this).text() + "-sub'><ul class='mobile-sub-list' >";
                                $(this).parent().parent().parent().find("[data-parent=" + $(this).data("category") + "]").each(function() {
                                    c += "<li class='nav-option'><a href='" + $(this).find("a").attr("href") + "' " + (void 0 !== $(this).find("a").attr("style") ? "style='" + $(this).find("a").attr("style") + "'" : "") + ">- " + $(this).text() + "</a></li>"
                                }), b += c + "</ul></li>"
                            } else b += "<li class='nav-option'><a href='" + a.attr("href") + "' " + (void 0 !== a.attr("style") ? "style='" + a.attr("style") + "'" : "") + ">" + a.text() + "</a></li>"
                        }), p += b + "</ul></li>"
                    }
                }), $(".menu-nav").prepend(p), $(".mobile-sub-nav:first").prepend("<li>" + $("#Footwear-sub").html() + "</li>"), $(".mobile-sub-nav:first").prepend("<li class='nav-option'>" + $("#Footwear").html() + "</li>"), $(".mobile-sub-nav:first").prepend("<li>" + $("#Accessories-sub").html() + "</li>"), $(".mobile-sub-nav:first").prepend("<li class='nav-option'>" + $("#Accessories").html() + "</li>"), $(".mobile-sub-nav:first").prepend("<li>" + $("#Clothing-sub").html() + "</li>"), $(".mobile-sub-nav:first").prepend("<li class='nav-option'>" + $("#Clothing").html() + "</li>"), $("#Footwear-sub").remove(), $("#Footwear").remove(), $("#Accessories-sub").remove(), $("#Accessories").remove(), $("#Clothing-sub").remove(), $("#Clothing").remove(), $(".menu-nav > li > a").click(function(a) {
                    a.preventDefault();
                    var b = "Click";
                    $(this).parent().hasClass("mobile-nav-expanded") ? window.location.href = $(this).attr("href") : ($(".mobile-nav-expanded").removeClass("mobile-nav-expanded"), $(this).parent().addClass("mobile-nav-expanded"), b = "Expand"), _gaq.push(["_trackEvent", "Mobile Top Nav", b, $(this).text()])
                }), $(".mobile-sub-list-heading").click(function(a) {
                    a.preventDefault();
                    var b = "Contract",
                        c = $(this).text().replace("+ ", "");
                    $(this).parent().hasClass("mobile-sub-nav-expanded") ? $(this).parent().removeClass("mobile-sub-nav-expanded") : ($(".mobile-sub-nav-expanded").removeClass("mobile-sub-nav-expanded"), $(this).parent().addClass("mobile-sub-nav-expanded"), b = "Expand"), _gaq.push(["_trackEvent", "Mobile Sub Accordion", b, $(this).parent().parent().parent().prev().text() + " > " + c])
                }), $(".mobile-sub-list > li > a, .mobile-sub-nav > .nav-option > a:not(.mobile-sub-list-heading)").click(function() {
                    var a = $(this).text().replace("- ", ""),
                        b = $(this).parents(".mobile-sub-list").length > 0 ? $(this).parent().parent().parent().prev().parent().parent().prev().text() : $(this).parent().parent().parent().prev().text();
                    _gaq.push(["_trackEvent", "Mobile Sub Nav", "Click", b + " > " + a])
                }), $(".nav-wrapper").click(function(a) {
                    a.stopPropagation(), d()
                }), $("html").click(function() {
                    e(!0)
                }), $(".drawBtn").click(function(a) {
                    a.preventDefault(), a.stopPropagation(), e(!1)
                }), $(".left-draw-follow").click(function(a) {
                    a.preventDefault(), $("html, body").animate({
                        scrollTop: $(document).height()
                    }, 0), e(!1)
                });
              