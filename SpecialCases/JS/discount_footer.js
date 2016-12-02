<script>
  

$('.buy-off-container #ctl00_globalMainContent_btnCheckout').attr('href', '/basket.htm');
 
// DOC READY SECTION - Page ready only scripts
$(document).ready(function() {
 
  $.cookie("mediacode", "S16XW", {explires: 365, path: "/"});
                if (typeof toast_config !== "undefined" && toast_config.in_sale === true) {
                                $('.standard-pp').show();
                } else {
                                $('.free-pp-and-returns').show();
                }
 
                showMeTheMoney();
 
                if($.cookie('preset_filters') === "")
                                $.removeCookie('preset_filters');
 
                var forceFilters = getParameterByName('presetFilters').split('~');
                // If there is url params for filters it takes precedence    
                if(forceFilters.length > 0 && forceFilters[0] != ""){
                                $.removeCookie('preset_filters');
                                $.cookie('preset_filters', 'size~'+forceFilters[0].slice(1,3), {path: '/'});
                }
                var mediaCodeExpress = getParameterByName('mediacode');
});
 

  </script>
