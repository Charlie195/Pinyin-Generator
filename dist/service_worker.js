// Set activated state to true when extension is installed
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({"activated": true});
});