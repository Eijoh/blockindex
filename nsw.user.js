// ==UserScript==
// @name     NoAds (NSW) ⭐
// @include  https://ouo.io/*
// @include  https://ouo.press/*
// @include  https://nxbrew.com/*
// @include  https://cutdl.xyz/*
// @version  1.1
// @author   Hipelago
// @run-at   document-end
// @grant    none
// @require  http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// ==/UserScript==
/*
*/
(function() {
  var si = setInterval;
  setInterval = function(fn, duration) {
    if (duration >= 1000) duration = duration === 1000 ? 500 : duration;
    return si.apply(this, arguments);
  };
})();
setInterval(function () {
    document.getElementsByClassName("btn btn-main")[0].click();
}, 2000);
var links,thisLink;
links = document.evaluate("//a[@href]",
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null);
for (var i=0;i<links.snapshotLength;i++) {
    var thisLink = links.snapshotItem(i);
    thisLink.href = thisLink.href.replace('http://1link.club/',
                                          'https://1link.club/');
    thisLink.href = thisLink.href.replace('https://1link.club/',
                                          'http://yes.noads.ga/ER.php?!VAR!000!=https://1link.club/');
}
$(".btn.btn-success.btn-lg.get-link.disabled").hide()
setInterval(function () {
    document.getElementsByClassName("btn btn-success btn-lg get-link")[0].click();
}, 2000);
