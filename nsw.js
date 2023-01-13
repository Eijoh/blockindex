// ==UserScript==
// @name     NoAds (NSW)
// @include  https://ouo.io/*
// @include  https://ouo.press/*
// @include  https://nxbrew.com/*
// @version  1.0
// @author   Hipelago
// ==/UserScript==
/*
*/

setInterval(function () {
    document.getElementsByClassName("btn btn-main")[0].click();
}, 500);
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
                                          'https://yes.noads.ga/ER.php?!VAR!000!=https://1link.club/');
}
