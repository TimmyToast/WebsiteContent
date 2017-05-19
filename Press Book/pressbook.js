    home_video_aspect_ratio = 0.56347826086957
    pb_termsAgreed = false
    baseZIPURL = 'https://toast-production.s3-eu-west-1.amazonaws.com/js/min/pressbook/'

    function lightboxInteractionInit() {

      $('.pb_checkBox').change(function() {
         if ($(".pb_checkBox").is(':checked') == true) {
            $('.pb_termsTarget button').prop('disabled', false)
            pb_termsAgreed = true
         } else {
            $('.pb_termsTarget button').prop('disabled', true)
            pb_termsAgreed = false
         }
      })

      $(".downloadButton").click(function() {
        downloadZIP(this.id)
      })

    }

    function setVideoIframeHeight(){
      if (document.body.clientWidth < 768) {
        $('.mainVideo iframe').height('350px')
      }
    }

    function createLightBox() {
      $('body').prepend('<div class="pb_Lightbox"></div>')
      $('.pb_Lightbox').height($(document).height())
    }

    function setHoverState(){
      $('.pb_imageRepeater').mouseover(function() {

          $('#' +  this.id + ' .pb_HoverHolder').height($('#' +  this.id + ' .pb_imageHolder img').height())
          $('#' +  this.id + ' .pb_HoverHolder').fadeIn()
            globalID = this.id

          $('#' + globalID + ' .pb_imageHoverContent').mouseleave(function() {
            $('.pb_HoverHolder').fadeOut()
          })

      })
    }

    function setHeaderRatios(){
      $('.pb_videoHolder').height( $('.pb_videoHolder').width() * home_video_aspect_ratio - 1)
      $('.pb_videoText').height( $('.pb_videoHolder').width() * home_video_aspect_ratio )
      $('.youtubeBackground').height( $('.pb_videoHolder').width() * home_video_aspect_ratio )
    }

    function startVideo(){
      $(".pb_videoHolder").prepend('<iframe class="youtubeBackground" type="text/html" src="https://www.youtube.com/embed/36lsvqHADGo?autoplay=1&loop=1&rel=0&showinfo=0&controls=0&playlist=36lsvqHADGo&origin=http://toa.st&wmode=transparent" frameborder="0" style="width:100%" wmode="opaque"/>')

     setHeaderRatios()
    }

    function openSmallTermsBox(passedID) {

      scrollTopGap = window.pageYOffset || document.documentElement.scrollTop

      $('.pb_Lightbox').html('<div class="pb_passwordBox">'+ $('.smallTermsBox').html() +'</div>')
      $('.pb_termsWhiteBox').css('margin-top', scrollTopGap +90+'px')
      setLightBoxHeight()
      $('.pb_termsTarget button').attr('id', passedID)
      lightboxInteractionInit()
      $('.pb_Lightbox').fadeIn()
    }

    // function openPasswordField() {
    //   $('.pb_Lightbox').html('<div class="pb_passwordBox">'+ $('.passwordBox').html() +'</div>')
    //   setLightBoxHeight()
    //   $('.pb_Lightbox').fadeIn()

    //   $("#passsWordField").keyup(function(event){
    //     if(event.keyCode == 13){
    //         submitPassword()
    //     }
    //   })
    // }
  
    function submitPassword() {
     // if ($('#passsWordField').val() == 'TOAST_17') {
        $('.pb_Lightbox').fadeOut()
        $('.visibleContent').html($('.pressBookContent').html())

         _gaq.push(["_trackEvent", "Pressbook - Clicked Enter (password removed)", "Click", "Success"])

        if ($(window).width() > 768) {
          startVideo()
        } else {
          setHeaderRatios()
      }
        
        setHoverState()
      // } else if ( $('#passsWordField').val() == "") {
      //   $('.pb_submitFeedback').html('Please enter a password')
      // }
      // else {
      //    $('.pb_submitFeedback').html('Incorrect password')
      // }
    }

    function closePasswordBox(){
      $('.pb_Lightbox').fadeOut()
      $(".pb_productTerms").fadeOut()
      $('.pb_Lightbox').html('')
    }

    function downloadZIP(passedID) {
      if (pb_termsAgreed) {

        if (passedID == 'all') {
            window.open(baseZIPURL + 'TOAST_Pressbook_SS17_All.zip','_blank' )
            closePasswordBox()
        } else {
            window.open(baseZIPURL + passedID + ".zip",'_blank' )
            closePasswordBox()
        }

      } else {

        if ($(".pb_productInfo").is(":visible")) {
          $(".pb_productTerms").fadeIn()
        } else {
          openSmallTermsBox(passedID) 
        }
      }
    }

    function setLightboxWidth(){

      if ($(window).width() > 1024){ 
         lightboxRatioHeight = $(window).height() * 1.29
          $(".lighboxWidth").width($(window).height() * 0.8)
      } else{
         $(".lighboxWidth").css('width', '')
      }
    }

    function productsReady() {
      setLightboxWidth()
      $('.pb_Lightbox').fadeIn()
    }

    function viewProduct(passedID) {
      scrollTopGap = window.pageYOffset || document.documentElement.scrollTop
       $('.pb_Lightbox').html($('.pb_productContent').html())
       $('.pb_productHolder').css('margin-top', scrollTopGap +90+'px')
       $(".pb_productTerms button").attr('id', passedID)
       $('.pb_downloadLink').attr('href', 'javascript:downloadZIP('+passedID+')')
       getJson(passedID)
       lightboxInteractionInit() 
       if (pb_termsAgreed){
          $(".pb_productTerms").hide()
       }
    }

    function getObjects(obj, key, val) {
      var objects = []
        for (var i in obj) {
                if (!obj.hasOwnProperty(i)) continue
                if (typeof obj[i] == 'object') {
                    objects = objects.concat(getObjects(obj[i], key, val))
                } else if (i == key && obj[key] == val) {
                    objects.push(obj)
                }
            }
        return objects
    }

    function setLightBoxHeight(){
        $('.pb_Lightbox').height($(document).height())
    }

     function getJson(passedID) {
        var dataPath = 'https://toast-webfonts.s3-eu-west-1.amazonaws.com/dpb-new.json'
        var imageCounter = 0
        $('.pb_imageSlider').html('<div class="pb_imageSlides"><ul></ul></div>')
        $('.pb_productText').html('')
        passedInteger = parseInt(passedID)
        $('.pb_productID').html( $('.pb_mainContent #'+passedInteger + ' .pb_lookNumber').html() + ' ')

        $.ajax({
            url: dataPath, 
            error: function(error){alert('An error has occurred in retrieving the data feed.')},
            method: 'GET'
                }).done(function (data) {

                  data = JSON.parse(data)

                  initObj = getObjects(data, 'look', passedID)
                  if(passedID <= 0 || passedID > data.length){
                      alert('incorrect ID passed.')
                  }

                  var imagePostFix = ['a', 'b', 'c']

                  if (initObj[0].imagecount > 1 ) {
                    for (i = 0; i < initObj[0].imagecount; i++) { 
                        $('.pb_imageSlides ul').append('<li><img src="https://d117fiyhpld8f9.cloudfront.net/content-images/pressbook17/1290/'+ passedID + imagePostFix[i] + '.jpg" class="img-responsive" /></li>')
                    }
                  }

                  productObject = initObj[0].products
                  $.each(productObject, function (index, data) {
                    $('.pb_productText').append('<div class="pb_productRepeater col-md-3 col-sm-6 col-xs-6"><div class="pb_productTitle sansSemi">' + productObject[index].title + '</div><div class="pb_productPriceCode sansBook">£' + productObject[index].price + '. ' + productObject[index].sku  + '.</div><div class="pb_productColour sansBook">' + productObject[index].colour + '.</div></div>')
                   })

                  _gaq.push(["_trackEvent", "Pressbook - Open", "Click", "Look ID: " + passedID])


                  
                  $('.pb_imageSlides ul').prepend('<li><img src="https://d117fiyhpld8f9.cloudfront.net/content-images/pressbook17/1290/'+ passedID +'.jpg" class="img-responsive" /></li>')

                    if (initObj[0].imagecount > 1 ) {
                       $('.pb_imageSlides').unslider()
                    }
                                      
                  productsReady() 
                  setLightBoxHeight()
                    
           })
    }

    jQuery(window).resize(function() {

      setLightboxWidth()
      setVideoIframeHeight()
      $('.pb_videoHolder').height( $('.pb_videoHolder').width() * home_video_aspect_ratio)
      $('.youtubeBackground').height( $('.pb_videoHolder').width() * home_video_aspect_ratio)

    })

    $( document ).ready(function() {

      globalID = ''
      createLightBox()  

    })