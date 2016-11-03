
    home_video_aspect_ratio = 0.56347826086957
    pb_termsAgreed = false
    baseZIPURL = '/zips/'

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
        $(".mainVideo iframe").height("350px")
      }
    }

    jQuery(window).resize(function() {
      setVideoIframeHeight()
        $(".pb_videoHolder").height( $(".pb_videoHolder").width() * home_video_aspect_ratio )
        $(".youtubeBackground").height( $(".pb_videoHolder").width() * home_video_aspect_ratio )
    })

    function createLightBox() {
      $('body').prepend('<div class="pb_Lightbox"></div>')
      $('.pb_Lightbox').height($(document).height())
    }

    function setHoverState(){
      $('.pb_imageRepeater').mouseover(function() {

          $('#' +  this.id + " .pb_HoverHolder").height($('#' +  this.id + " .pb_imageHolder img").height())
          $('#' +  this.id + " .pb_HoverHolder").fadeIn()
            globalID = this.id

          $('#' + globalID + ' .pb_imageHoverContent').mouseleave(function() {
            $('.pb_HoverHolder').fadeOut()
          })

      })
    }

    function setHeaderRatios(){
      $(".pb_videoHolder").height( $(".pb_videoHolder").width() * home_video_aspect_ratio )
      $(".pb_videoText").height( $(".pb_videoHolder").width() * home_video_aspect_ratio )
      $(".youtubeBackground").height( $(".pb_videoHolder").width() * home_video_aspect_ratio )
    }

    function startVideo(){
      $(".pb_videoHolder").prepend('<iframe class="youtubeBackground" type="text/html" src="http://www.youtube.com/embed/L5HSvcEqHnQ?autoplay=1&loop=1&rel=0&showinfo=0&controls=0&playlist=L5HSvcEqHnQ&origin=http://toa.st&wmode=transparent" frameborder="0" style="width:100%" wmode="opaque"/>')

     setHeaderRatios()
    }

    function openSmallTermsBox(passedID) {
      $('.pb_Lightbox').html('<div class="pb_passwordBox">'+ $(".smallTermsBox").html() +'</div>')
      $('.pb_termsWhiteBox').css('margin-top', $('body').scrollTop()+50+'px')
      setLightBoxHeight()
      $('.pb_termsTarget button').attr('id', passedID)
      lightboxInteractionInit()
      $('.pb_Lightbox').fadeIn()
    }

    function openPasswordField() {
      $('.pb_Lightbox').html('<div class="pb_passwordBox">'+ $(".passwordBox").html() +'</div>')
      setLightBoxHeight()
      $('.pb_Lightbox').fadeIn()
    }
  
    function submitPassword() {
      if ($('#passsWordField').val() == "TOAST_17") {
        $('.pb_Lightbox').fadeOut()
        $('.visibleContent').html($('.pressBookContent').html())

        if ($(window).width() > 768) {
          startVideo()
        } else {
          setHeaderRatios()
        }
        
        setHoverState()
      } else if ( $('#passsWordField').val() == "") {
        $('.pb_submitFeedback').html('Please enter a password')
      }
      else {
         $('.pb_submitFeedback').html('Incorrect password')
      }
    }

    function closePasswordBox(){
      $('.pb_Lightbox').fadeOut()
      $(".pb_productTerms").fadeOut()
      $('.pb_Lightbox').html('')
    }

    function downloadZIP(passedID) {
      if (pb_termsAgreed) {
        location.href = baseZIPURL + passedID + ".zip"
      } else {
        if ($(".pb_productInfo").is(":visible")) {
          $(".pb_productTerms").fadeIn()
        } else {
          openSmallTermsBox(passedID) 
        }
      }
    }

    function productsReady() {
      $('.pb_Lightbox').fadeIn()
    }

    function viewProduct(passedID) {
       $('.pb_Lightbox').html($('.pb_productContent').html())
       $('.pb_productHolder').css('margin-top', $('body').scrollTop()+50+'px')
       $(".pb_productTerms button").attr('id', passedID)
       $('.pb_downloadLink').attr('href', 'javascript:downloadZIP('+passedID+')')
       getJson(passedID)
       lightboxInteractionInit() 
       if (pb_termsAgreed){
          $(".pb_productTerms").hide()
       }
    }

    function getObjects(obj, key, val) {
      var objects = [];
        for (var i in obj) {
                if (!obj.hasOwnProperty(i)) continue;
                if (typeof obj[i] == 'object') {
                    objects = objects.concat(getObjects(obj[i], key, val));
                } else if (i == key && obj[key] == val) {
                    objects.push(obj);
                }
            }
        return objects;
    }

    function setLightBoxHeight(){
        $('.pb_Lightbox').height($(document).height())
    }

     function getJson(passedID) {
        var dataPath = 'dpb-new.json'
        var imageCounter = 0
      
        $('.pb_imageSlider').html('<div class="pb_imageSlides"><ul></ul></div>')
        $('.pb_productText').html('')

        passedInteger = parseInt(passedID)

        $('.pb_productID').html( $('.pb_mainContent #'+passedInteger + ' .pb_lookNumber').html() + ' ')

        $.ajax({
            url: dataPath, 
            error: function(error){alert('An error has occured in retrieving the feed, please check the feed source.')},
            method: 'GET'
                }).done(function (data) {

                  initObj = getObjects(data, 'look', passedID)
                  if(passedID <= 0 || passedID > data.length){
                      alert('incorrect ID passed.')
                  }

                  var imagePostFix = ["a", "b", "c"]

                  // imageObject = initObj[0].lkimages
                  // $.each(imageObject, function (index, data) {
                  //   $('.pb_imageSlides ul').append('<li><img src="'+ imageObject[index].Path + '" class="img-responsive" /></li>')
                  //   imageCounter++
                  // })
                  // $('.pb_imageSlides ul').append('<li><img src="/carouselImages/'+ passedID + 'a.jpg" class="img-responsive" /></li>')
                  // $('.pb_imageSlides ul').append('<li><img src="/carouselImages/'+ passedID + 'b.jpg" class="img-responsive" /></li>')
                  

                  for (i = 0; i < initObj[0].imagecount; i++) { 
                      $('.pb_imageSlides ul').append('<li><img src="carouselImages/'+ passedID + imagePostFix[i] + '.jpg" class="img-responsive" /></li>')
                  }

                  productObject = initObj[0].products
                  $.each(productObject, function (index, data) {
                    $('.pb_productText').append('<div class="pb_productRepeater col-md-3 col-sm-4 col-xs-6"><div class="pb_productTitle sansBold">' + productObject[index].title + '</div><div class="pb_productPriceCode sansBook">£' + productObject[index].price + '. ' + productObject[index].sku  + '.</div><div class="pb_productColour sansBook">' + productObject[index].colour + '.</div></div>')
                   })

                  console.log()

                  if (initObj[0].imagecount > 1 ) {
                    $('.pb_imageSlides ul').prepend('<li><img src="landingImages/'+ passedID +'.jpg" class="img-responsive" /></li>')
                    $('.pb_imageSlides').unslider()
                  }

                  productsReady() 
                  setLightBoxHeight()
                    
           })
    }

    $( document ).ready(function() {

      globalID = ''
      // temp jump to images //
      //$('.visibleContent').html($('.pressBookContent').html())
      //setHoverState()

      createLightBox()  

    })
