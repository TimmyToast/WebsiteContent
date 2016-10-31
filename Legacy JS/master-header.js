// Legacy
var _gaq = _gaq || [];
var pluginUrl = '//www.google-analytics.com/plugins/ga/inpage_linkid.js';
_gaq.push(['_require', 'inpage_linkid', pluginUrl]);
_gaq.push(['_setAccount', 'UA-1341106-1']);
_gaq.push(['_addIgnoredRef', 'travels.toa.st']); 
_gaq.push(['_addIgnoredRef', 'display.ugc.bazaarvoice.com']); 
_gaq.push(['_addIgnoredRef', 'paypal.com']); 
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


var customPath = "//toast-staging.s3.amazonaws.com";