<script type="text/javascript">
  $(document).ready(function() {
    $(".signup-tile input").val($(".signup-tile input").data("placeholder"));    
    $(".win-tile input").val($(".win-tile input").data("placeholder"));    
    $(".hamper-tile input").val($(".hamper-tile input").data("placeholder"));
  });
  $(".signup-tile input").on("focus", function() {
    if ($(this).val() == $(this).data("placeholder")) {
      $(this).val("");
    }
  });
  $(".signup-tile input").on("focusout", function() {
    if ($(this).val() == "") {
      $(this).val($(this).data("placeholder"));
    }  
  });
  $(".signup-tile input").keydown(function(e) {
      if(e.which == 13){
        e.preventDefault();
        e.stopPropagation();
        $('.signup-tile button').trigger("click");        
      }
  });  
  $('.signup-tile button').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.signup-message').removeClass("invalid-email").addClass('hidden');
    $('signup-tile input').removeClass('invalid-email');
    var emailAddress = $('.signup-tile input').val();
    var callbackFunction = function() {
      $(".signup-tile input, .signup-tile button").addClass("hidden");
      $('.signup-message').html('Thank you for signing up for TOAST newsletters').removeClass("hidden");
      _gaq.push(['_trackEvent', 'Sign Up Landing Page', "Click", "Homepage"]);
    }
    if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(emailAddress) == true) {
        mainModule.signUpEmail(emailAddress, [true, true], ["NewsletterOptIn", "user.CustomAttribute.RealTime"], callbackFunction); 
    } else {
      $('.signup-message').removeClass('hidden').addClass('invalid-email');
      $('signup-tile input').addClass('invalid-email');
  _gaq.push(['_trackEvent', 'Sign Up Landing Page Error', "Click", "Homepage"]);
    }
  });   
  

  $(".win-tile input").on("focus", function() {
    if ($(this).val() == $(this).data("placeholder")) {
        $(this).val("");
    }
  });
  $(".win-tile input").on("focusout", function() {
    if ($(this).val() == "") {
        $(this).val($(this).data("placeholder"));
    }  
  });
  $(".win-tile input").keydown(function(e) {
  if(e.which == 13){
    e.preventDefault();
    e.stopPropagation();
    $('.win-tile button').trigger("click");        
  }
  });  
  $('.win-tile button').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.win-message').removeClass("invalid-email").addClass('hidden');
    $('.win-tile input').removeClass('invalid-email');
    var emailAddress = $('.win-tile input').val();
    var callbackFunction = function() {
    $(".win-tile input, .win-tile button").addClass("hidden");
    $('.win-message').html('Thank you for signing up for TOAST newsletters').removeClass("hidden");
    _gaq.push(['_trackEvent', 'Sign Up Landing Page', "Click", "Homepage"]);
    _gaq.push(['_trackEvent', 'Sign Up Gift Card Competition', "Click", "Homepage"]);
    }
    if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(emailAddress) == true) {
       //  var signUpEmail = function(emailAddress, aValues, aNames, callbackFunction) {  
    var params = {
      method: '/user/create',
      queryNames: ['email'],
      queryValues: [emailAddress],
      attributeValues: [true, true, "AW14_1000_landing"],
      attributeNames: ["NewsletterOptIn", "user.CustomAttribute.RealTime", "user.CustomAttribute.Competition1"],
      httpVerb: 'post'
    };
    $.ajax({
      url: '/services/ecrelay.asmx/Relay',
      type: 'POST',
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(params),
      dataType: 'json',
      success: function (data, status) {
        // If user already exists update the profile to have LastOrder Date  
        if(data.d.indexOf("OBJECT_ALREADY_EXISTS") > 0) {
          var dateStampParams = {
            method: '/user/updateProfileByEmail',
            queryNames: ['email'],
            queryValues: [emailAddress],
            attributeValues: [true, true, "AW14_1000_landing"],
            attributeNames: ["NewsletterOptIn", "user.CustomAttribute.RealTime", "user.CustomAttribute.Competition1"],
            httpVerb: 'post'
          };
          $.ajax({
            url: '/services/ecrelay.asmx/Relay',
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(dateStampParams),
            dataType: 'json',
            success: function (data, status) {
              mainModule.subscribeToGroup(emailAddress, 750049776);
              if(typeof callbackFunction != "undefined") {
                callbackFunction();
                _gaq.push(['_trackEvent', 'Sign Up Gift Card Competition - Existing', "Click", "Homepage"]);
              }
            }
          });
        }
        else {
          mainModule.subscribeToGroup(emailAddress, 750049776);
          if(typeof callbackFunction != "undefined") {
            callbackFunction();
            _gaq.push(['_trackEvent', 'Sign Up Gift Card Competition - New', "Click", "Homepage"]);
          }
        }
      }
    });
    } else {
    $('.win-message').removeClass('hidden').addClass('invalid-email');
    $('.win-tile input').addClass('invalid-email');
      _gaq.push(['_trackEvent', 'Sign Up Landing Page Error', "Click", "Homepage"]);
    }
  });     
  
  
  //Christmas Hamper competition
  $(".hamper-tile input").on("focus", function() {
    if ($(this).val() == $(this).data("placeholder")) {
        $(this).val("");
    }
  });
  $(".hamper-tile input").on("focusout", function() {
    if ($(this).val() == "") {
        $(this).val($(this).data("placeholder"));
    }  
  });
  $(".hamper-tile input").keydown(function(e) {
  if(e.which == 13){
    e.preventDefault();
    e.stopPropagation();
    $('.hamper-tile button').trigger("click");        
  }
  });  
  $('.hamper-tile button').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.hamper-message').removeClass("invalid-email").addClass('hidden');
    $('.hamper-tile input').removeClass('invalid-email');
    var emailAddress = $('.hamper-tile input').val();
    var callbackFunction = function() {
    $(".hamper-tile input, .hamper-tile button").addClass("hidden");
    $('.hamper-message').html('Thank you for entering. ').removeClass("hidden");
    _gaq.push(['_trackEvent', 'Sign Up Landing Page', "Click", "Homepage"]);
    _gaq.push(['_trackEvent', 'Sign Up Hamper Competition', "Click", "Homepage"]);
    }
    if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(emailAddress) == true) {
       //  var signUpEmail = function(emailAddress, aValues, aNames, callbackFunction) {  
    var params = {
      method: '/user/create',
      queryNames: ['email'],
      queryValues: [emailAddress],
      attributeValues: [true, true, "AW14_XmasHamper_Comp"],
      attributeNames: ["NewsletterOptIn", "user.CustomAttribute.RealTime", "user.CustomAttribute.Competition3"],
      httpVerb: 'post'
    };
    $.ajax({
      url: '/services/ecrelay.asmx/Relay',
      type: 'POST',
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(params),
      dataType: 'json',
      success: function (data, status) {
        // If user already exists update the profile to have LastOrder Date  
        if(data.d.indexOf("OBJECT_ALREADY_EXISTS") > 0) {
          var dateStampParams = {
            method: '/user/updateProfileByEmail',
            queryNames: ['email'],
            queryValues: [emailAddress],
            attributeValues: [true, true, "AW14_XmasHamper_Comp"],
            attributeNames: ["NewsletterOptIn", "user.CustomAttribute.RealTime", "user.CustomAttribute.Competition3"],
            httpVerb: 'post'
          };
          $.ajax({
            url: '/services/ecrelay.asmx/Relay',
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(dateStampParams),
            dataType: 'json',
            success: function (data, status) {
              mainModule.subscribeToGroup(emailAddress, 750049776);
              if(typeof callbackFunction != "undefined") {
                callbackFunction();
                _gaq.push(['_trackEvent', 'Sign Up Hamper Competition - Existing', "Click", "Homepage"]);
              }
            }
          });
        }
        else {
          mainModule.subscribeToGroup(emailAddress, 750049776);
          if(typeof callbackFunction != "undefined") {
            callbackFunction();
            _gaq.push(['_trackEvent', 'Sign Up Hamper Competition - New', "Click", "Homepage"]);
          }
        }
      }
    });
    } else {
    $('.hamper-message').removeClass('hidden').addClass('invalid-email');
    $('.hamper-tile input').addClass('invalid-email');
      _gaq.push(['_trackEvent', 'Sign Up Landing Page Error', "Click", "Homepage"]);
    }
  });       
</script>


<link href="//s3-eu-west-1.amazonaws.com/toast-production/css/min/homepageSlider.css" rel="stylesheet" />
 <script src="//s3-eu-west-1.amazonaws.com/toast-web-content-production/js/slider.js"></script>​