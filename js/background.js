chrome.action.onClicked.addListener(function(tab) {
    chrome.tabs.create({ url: "index.html" });
});
chrome.runtime.onInstalled.addListener(function() {
	chrome.tabs.create({ url: "index.html"});
});
if(chrome.runtime.setUninstallURL) {
  chrome.runtime.setUninstallURL('https://iminthebibleson.github.io/enhancement/');
}