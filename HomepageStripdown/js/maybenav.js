  mainModule = function() {
        miniBasket = null;
        var b = [],
            c = $(""),
            d = function() {
                $(".nav-option a").removeClass("is-active"), $(".slide-right-list").removeClass("slide-list-visible"), $(".left-draw-scroll-indicator").fadeOut("slow"), $(".left-draw").removeClass("is-subdraw-visible"), $(".is-draw-visible .nav-wrapper nav > ul").removeClass("is-inactive")
            },
            e = function(a) {
                var b = $(".drawBtn");
                b.hasClass("selected") || a ? ($(".left-draw").removeClass("is-draw-visible"), $(".main-content, .marketing-message").removeClass("draw-visible-main-content"), b.removeClass("selected")) : ($(".left-draw").addClass("is-draw-visible"), $(".main-content, .marketing-message").addClass("draw-visible-main-content"), b.addClass("selected"))
            },
            f = function(a, b) {
                setTimeout(function() {
                    a.addClass("visuallyHidden")
                }, b + 100)
            },
            g = function() {
                $("ul.product-sizes li").each(function() {
                    $(this).text().length > 5 && $(this).css("min-width", "65px")
                })
            },
            h = function() {
                var a = window.location.pathname;
                if ("/" !== a) {
                    var b = _.find($(".category-nav-list li a"), function(b) {
                        return -1 != $(b).attr("href").toLowerCase().indexOf(a.toLowerCase())
                    });
                    b && $(b).length > 0 && $(b).addClass("current")
                }
            },
            i = function() {
                if ($(".basket-items li").length > 3) {
                    var a = 0;
                    $(".basket-items li").each(function(b) {
                        b > 2 && ($(this).remove(), a++)
                    }), $("ul.basket-items").after("<div id='mini-basket-overflow' style=''><a href='/basket.htm'>+ " + a + " more item" + (a > 1 ? "s" : "") + " in bag</a></div>"), $(".go-to-basket").text("VIEW FULL SHOPPING BAG")
                }
            },
            j = function() {
                var a = /( )(l)(?:$| )/i,
                    b = /( )(r)(?:$| )/i;
                $("div.product-sizes").each(function() {
                    for (var c = 0; c < $(this).find(".size").length; c++) {
                        var d = $($(this).find(".size")[c]); - 1 != d.text().toLowerCase().search(a) ? d.addClass("long grid-parent") : -1 != d.text().toLowerCase().search(b) && d.addClass("regular grid-parent")
                    }
                    $(this).find(".regular").wrapAll('<ul class="product-sizes-split regular-size-list"></ul>'), $(this).find(".long").wrapAll('<ul class="product-sizes-split long-size-list"></ul>').closest().insertAfter(".regular-size-list")
                });
                var c = $(".regSize").text(),
                    d = $(".longSize").text();
                $("ul.regular-size-list").before('<h3 class="product-label-sizes">Leg Length: ' + c + "</h3>"), $("ul.long-size-list").before('<h3 class="product-label-sizes">Leg Length: ' + d + "</h3>"), $(".regSize, .longSize").parent().addClass("hidden"), $("div.product-sizes").each(function() {
                    var a = $(this);
                    a.find(".long-size-list").appendTo(a.find("ul.product-sizes")), a.find(".regular-size-list").insertAfter(a.find("ul.product-sizes h3").eq(0))
                })
            },
            k = function(a, b) {
                var c = tcp_env.dynamic_image_settings.BaseUrl;
                b && (c += "content-images/", c = c + a.attr("season") + "/250"), a.attr("img-src", c + a.attr("img-src"))
            },
            l = function(a) {
                var b = "250",
                    c = "250",
                    d = "250",
                    e = "250";
                return 480 > a ? (b = "250", c = "350", d = "350", e = "450") : a >= 480 && 860 > a ? (b = "450", c = "550", d = "700", e = "950") : a >= 860 && 980 > a ? (b = "250", c = "450", d = "700", e = "950") : a > 979 && 1440 > a ? (b = "350", c = "550", d = "950", e = "1200") : a > 1439 && 1999 >= a ? (b = "450", c = "700", d = "950", e = "1553") : a > 1999 && (b = "550", c = "950", d = "1553", e = "1553"), [b, c, d, e]
            },
            m = function() {
                if (homepageWindowWidth = $(window).width(), !(homepageCurrentWindowWidth > homepageWindowWidth && homepageWindowWidth > 768)) {
                    var a = l(homepageWindowWidth);
                    n(b, a), homepageCurrentWindowWidth = homepageWindowWidth
                }
            },
            n = function(a) {
                for (var b = 0; b < a.length; b++) {
                    var c = $(a[b]);
                    if (!c.hasClass("range-product"))
                        if (void 0 != c.css("background-image") && "none" != c.css("background-image")) {
                            for (var d = c.css("background-image"), e = c.width(), f = 0; f < imageSizeBreakdownArray.length; f++)
                                if (e < imageSizeBreakdownArray[f]) {
                                    c.css("background-image", d.replace(sizeRegex, "/" + imageSizeBreakdownArray[f] + "/"));
                                    break
                                }
                        } else {
                            var d = c.attr("src");
                            (void 0 == d || 0 == d.length) && (d = c.attr("img-src"));
                            for (var e = c.width(), f = 0; f < imageSizeBreakdownArray.length; f++)
                                if (e < imageSizeBreakdownArray[f]) {
                                    c.attr("src", d.replace(sizeRegex, "/" + imageSizeBreakdownArray[f] + "/"));
                                    break
                                }
                        }
                }
            },
            o = function() {
                if (rangeWindowWidth = $(window).width(), !(rangeCurrentWindowWidth > rangeWindowWidth)) {
                    var a = "700";
                    600 > rangeWindowWidth ? a = "350" : rangeWindowWidth >= 860 && 980 > rangeWindowWidth ? a = "450" : rangeWindowWidth > 979 && 2e3 > rangeWindowWidth ? a = "550" : rangeWindowWidth > 1999 && (a = "700");
                    for (var b = $(".category-full-width-banner .range-image"), c = 0; c < b.length; c++) {
                        var d = $(b[c]);
                        if (-1 != d.attr("img-src").search(sizeRegex)) {
                            var e = d.attr("img-src");
                            e = e.replace(sizeRegex, "/" + a + "/"), d.attr("src", e)
                        }
                    }
                    rangeCurrentWindowWidth = rangeWindowWidth
                }
            },
            p = function(a) {
                var b = $(window).height() + $(window).scrollTop(),
                    c = 0;
                if (0 != $("#newFooter").length && 0 != $(".footer-list-links").length && (c = $("#newFooter").height() + parseInt($("#newFooter").css("padding-top")) + parseInt($("#newFooter").css("padding-bottom"))), b / ($(document).height() - c) > .9 || a) {
                    $(".landing-container").removeClass("visuallyHidden");
                    for (var d = 0; 4 > d; d++) $($(".archive-post.visuallyHidden")[d]).addClass("active-tile"), $($(".archive-post.visuallyHidden")[d]).find("img").attr("src", $($(".archive-post.visuallyHidden")[d]).find("img").attr("img-src"));
                    $(".active-tile").removeClass("visuallyHidden"), $(".active-tile").css("opacity", "1").removeClass("active-tile")
                }
            },
            q = function() {
                var a = {},
                    b = "";
                return b = $(".product-info h3").length > 0 ? $(".product-info h3").text() : $(".product-info h2").length > 0 ? $(".product-info h2").text() : $(".product-info h1").text(), a.socialProductDescription = $.trim(b), a.socialProductDetails = $.trim($($(".product-accordion section")[0]).find("p").text()), a.socialUrlhostname = tcp_env.site_base, a.socialUrlProdcode = 0 != $(".buy-off-container").length && "undefined" != typeof currentObjId ? currentObjId : $("#productId").attr("value"), a.socialUrlProdName = a.socialProductDescription.replace(/\s/g, ""), a.socialUrlShare = tcp_env.site_base + "product/" + a.socialUrlProdcode + "/" + a.socialUrlProdName + ".htm", 0 != $(".buy-off-container").length && "undefined" != typeof currentObjId && $(".twitter-social").attr("href", "//twitter.com/share?url=" + a.socialUrlShare + "&text=" + a.socialProductDescription + "%20by%20TOAST:%20"), a
            },
            r = function() {
                if ($("#social a").length > 0) {
                    var a = q();
                    $(".pinterest-social").click(function(b) {
                        b.preventDefault();
                        var c = $(".selected-swatch").attr("src").replace(sizeRegex, "/250/");
                        $(".pinterest-social").attr("href", "//pinterest.com/pin/create/button/?url=" + a.socialUrlShare + "&media=" + c + "&description=" + a.socialProductDescription + " by TOAST"), _gaq.push($("#mainContent").find(".buy-off-container").length > 0 ? ["_trackEvent", "Buy-off Social Sharing", "Click - " + a.socialProductDescription, "Pinterest"] : ["_trackEvent", "Product Social Sharing", "Click - " + $(".product-info h1").text(), "Pinterest"])
                    }), $(".facebook-social").click(function(b) {
                        b.preventDefault();
                        var c = $(".selected-swatch").attr("src"),
                            d = "";
                        0 != $(".buy-off-container").length && "undefined" != typeof currentObjId ? (c = c.replace(sizeRegex, "/250/"), d = "http://www.facebook.com/sharer.php?m2w&s=100&p[title]=" + a.socialProductDescription + "%20by%20TOAST&p[summary]=" + a.socialProductDetails + "&p[url]=" + a.socialUrlShare + "&p[images][0]=http:" + c + ",%20sharer,toolbar=0,status=0,width=1200,height=1200") : (d = "http://www.facebook.com/sharer.php?s=100&p[title]=" + a.socialProductDescription + "%20by%20TOAST&p[summary]=" + a.socialProductDetails + "&p[url]=" + a.socialUrlShare + "&p[images][0]=http:" + c + ",%20sharer,toolbar=0,status=0,width=250,height=250", c = c.replace(sizeRegex, "/250/")), $(".facebook-social").attr("href", d.replace(/\s/g, "%20")), _gaq.push($("#mainContent").find(".buy-off-container").length > 0 ? ["_trackEvent", "Buy-off Social Sharing", "Click - " + a.socialProductDescription, "Facebook"] : ["_trackEvent", "Product Social Sharing", "Click - " + $(".product-info h1").text(), "Facebook"])
                    }), $(".pinterest-social").popupWindow({
                        height: 400,
                        width: 800,
                        centerBrowser: 1
                    }), $(".facebook-social, .twitter-social").popupWindow({
                        height: 350,
                        width: 670,
                        centerBrowser: 1
                    }), $(".twitter-social").attr("href", "//twitter.com/share?url=" + a.socialUrlShare + "&text=" + a.socialProductDescription + "%20by%20TOAST:%20"), $(".twitter-social").click(function(b) {
                        b.preventDefault(), _gaq.push($("#mainContent").find(".buy-off-container").length > 0 ? ["_trackEvent", "Buy-off Social Sharing", "Click - " + a.socialProductDescription, "Twitter"] : ["_trackEvent", "Product Social Sharing", "Click - " + $(".product-info h1").text(), "Twitter"])
                    })
                }
            },
            s = function() {
                Tipped.create(".recentlyViewed ul li a, .ymal img, .browse-left, .browse-right, .product-swatch, .mapTooltip, .fourth-row .cutout-image, .fourth-row .homepage-image, .group-images .range-product img", {
                    skin: "toast",
                    target: "mouse",
                    hook: "topmiddle",
                    showDelay: 250
                })
            },
            t = function() {
                Tipped.remove(".recentlyViewed ul li a, .ymal img, .browse-left, .browse-right, .product-swatch, .fourth-row .cutout-image, .fourth-row .homepage-image, .group-images .range-product img")
            },
            u = function(a, b, c) {
                var d = {
                    method: "/membership/subscribeByEmail",
                    queryNames: ["email", "groupId", "subscriptionMode"],
                    queryValues: [a, b, "OPT_IN"],
                    attributeValues: null,
                    attributeNames: null,
                    httpVerb: "POST"
                };
                $.ajax({
                    url: "/services/ecrelay.asmx/Relay",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(d),
                    dataType: "json",
                    success: function(a) {
                        void 0 !== c && c(a)
                    }
                })
            },
            v = function(a, b, c, d) {
                var e = {
                    method: "/user/create",
                    queryNames: ["email"],
                    queryValues: [a],
                    attributeValues: b,
                    attributeNames: c,
                    httpVerb: "post"
                };
                $.ajax({
                    url: "/services/ecrelay.asmx/Relay",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(e),
                    dataType: "json",
                    success: function(e) {
                        if (e.d.indexOf("OBJECT_ALREADY_EXISTS") > 0) {
                            var f = {
                                method: "/user/updateProfileByEmail",
                                queryNames: ["email"],
                                queryValues: [a],
                                attributeValues: b,
                                attributeNames: c,
                                httpVerb: "post"
                            };
                            $.ajax({
                                url: "/services/ecrelay.asmx/Relay",
                                type: "POST",
                                contentType: "application/json; charset=utf-8",
                                data: JSON.stringify(f),
                                dataType: "json",
                                success: function() {
                                    u(a, 750049776), void 0 !== d && d()
                                }
                            })
                        } else u(a, 750049776), void 0 !== d && d()
                    }
                })
            },
            w = function() {
                var a = {};
                return function(b, c, d) {
                    d || (d = "Don't call this twice without a uniqueId"), a[d] && clearTimeout(a[d]), a[d] = setTimeout(b, c)
                }
            }();
       
        return $(".editorial-buy-off").length > 0 && $(".range-product").click(function() {
            $(this), $(".scrollToBuyOff").length, setTimeout(function() {
                $("body, html").animate({
                    scrollTop: $(".buy-off-container").offset().top
                }, "250")
            }, 300)
        }), $(".landing-container").length > 0 && (windowWidth = $(window).width(), $(".archive-post").addClass("visuallyHidden").css("opacity", 0), $(window).scroll(function() {
            p(!1)
        })), $("#aspnetForm > header").addClass("main-header"), {
            checkProductSizeBoxWidth: g,
            checkForLegLengths: j,
            buildSizedImageSources: k,
            setRangeImages: o,
            setSocialVariables: q,
            setSocialIcons: r,
            populateTippedElements: s,
            destroyTippedElements: t,
            subscribeToGroup: u,
            miniBasketCarousel: i,
            signUpEmail: v
        }
    }


($(window).resize(function() {
                w(function() {
                    $(window).width() < 1023 ? t() : $(window).width() > 1024 && s()
                }, 500, "windowResize")
            }), $(".left-side-nav").addClass("grid-60 tablet-grid-60 grid-parent"), $(".right-side-nav").addClass("grid-40 tablet-grid-40 grid-parent"), $(".right-side-nav ul").addClass("search-box grid-50 tablet-grid-50 mobile-grid-100 grid-parent"), $("#country-selector").before('<ol class="user-options grid-25 tablet-grid-25 mobile-grid-100 grid-parent"></ol>'), $("#toastFont").length > 0 && ($("body").append($('<a class="hide-on-mobile" href="#" id="more-content-arrow" style="display: inline;"><span id="more-content-arrow-hover" style="opacity: 0;"></span>To Top</a>')), $("#more-content-arrow").hover(function() {
                $("#more-content-arrow-hover").stop().animate({
                    opacity: 1
                }, 600, "linear")
            }, function() {
                $("#more-content-arrow-hover").stop().animate({
                    opacity: 0
                }, 700, "linear")
            }).click(function(a) {
                a.preventDefault(), _gaq.push(["_trackEvent", "More Content Arrow", "Click", "More Content Arrow"])
            }), $(window).scroll(function() {
                $(window).scrollTop() > 500 ? $("#more-content-arrow").fadeOut(300) : $("#more-content-arrow").fadeIn(300)
            })), $(document).ready(function() {
                function a() {
                    if ("uk" === tcp_env.country_code.toLowerCase()) {
                        var a = tcp_env.basket.subtotal,
                            b = parseInt(125 - a);
                        "undefined" != typeof toast_config && !1 === toast_config.in_sale && (b > 0 && a > 84 && 0 === $("#mini-basket-upsell").length && 0 === $("#basket-upsell").length ? ($(".mini-basket-sub-total").before("<div id='mini-basket-upsell' style='margin-top:15px; color: #186aa2; text-align: center; text-transform: uppercase; letter-spacing: 1px' class='medFont'>Add  Â£" + b + " more to your basket for free UK delivery and returns</div>"), $("#submitBasket").prepend("<div id='basket-upsell' style='margin-bottom:15px; color: #186aa2; text-align: center; text-transform: uppercase; letter-spacing: 1px' class='medFont grid-100 tablet-grid-100 mobile-grid-100 grid-parent'>Add  Â£" + b + " more to your basket for free UK delivery and returns</div>"), $("#continueShopping").css({
                            float: "right"
                        })) : 84 > a && $("#mini-basket-upsell").length > 0 && $("#mini-basket-upsell").remove())
                    }
                    $(".basketProductDescription").each(function() {
                        "6CHTANONEOS" == $(this).find("#Full_productid").html().trim() && $("#basket-upsell").hide()
                    })
                }

                function b() {
                    for (var a = {
                            skuList: []
                        }, b = tcp_env.basket.line_items, c = 0; c < b.length; c++) {
                        var d = b[c].product;
                        a.skuList.push(d.id)
                    }
                    $.ajax({
                        url: "/services/stockservices.asmx/GetProductVariantStock",
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify(a),
                        dataType: "json",
                        success: function(a) {
                            var b = $.parseJSON(a.d);
                            if (null !== b)
                                for (var c = 0; c < b.stocklist.length; c++)
                                    for (var d = b.stocklist[c], e = 0; e < d.sizesInStock.length; e++) {
                                        var f = d.sizesInStock[e];
                                        f.stlev < 5 && f.stlev > 0 && $("#mini-basket [data-sku=" + f.sku + "] .prod-error").html("Only " + f.stlev + " left in stock")
                                    }
                        }
                    })
                }

                function g() {
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
                    }),
                    function() {
                        var a = 0,
                            b = function() {
                                200 > a && (miniBasket ? miniBasket.data("tcplMinibasket").refreshBasket() : (a++, setTimeout(b, 25)))
                            };
                        b()
                    }(), void 0 === $.cookie("cookie-banner-dismissed17") && ($.cookie("cookie-banner-dismissed17", "true", {
                        expires: 999,
                        path: "/"
                    }), $("body").prepend("<div id='cookie-banner'>TOAST uses cookies to improve your experience of shopping online. In using the site you have agreed to our cookies policy. <a href='/content/help/help.htm?helpSection=cookie-policy'>Learn more.</a> <a href='#' id='cookie-dismiss'><span class='sprite close'></span></a>"), $("#cookie-dismiss").click(function(a) {
                        a.preventDefault(), $("#cookie-banner").remove()
                    })), $("#ctl00_ctl01_btnSearch").click(function(a) {
                        "search" == $("#ctl00_ctl01_txtSearch").val() && a.preventDefault()
                    }), $(".main-content .category-nav-list").removeClass("max-width-1000"), $(".login-item").appendTo($(".right-side-nav .user-options")), setTimeout(function() {
                        $("#topBasketContainer").appendTo($(".right-side-nav .user-options"))
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
                    }), $("#topBasketContainer").length > 0 && void 0 !== $("#topBasketContainer").minibasket && (miniBasket = $("#topBasketContainer").minibasket({
                        afterRemoveItem: function() {
                            document.body.style.cursor = "default"
                        },
                        refreshCompleted: function() {
                            jQuery.isFunction(i) && i(), a(), b()
                        }
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
              
             
          
               
               
            }), $("#toastFont, .homepageContainer").length > 0)