
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: "void(function(u,s){s=document.body.appendChild(document.createElement('script'));s.src=u+'?ts='+Date.now();s.charset='UTF-8'}('http://zythum.sinaapp.com/mama2/dest/index.js'))"
  });
});
