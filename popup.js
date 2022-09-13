const activateBtn = document.getElementById("activateBtn");
const deactivateBtn = document.getElementById("deactivateBtn");

activateBtn.onclick = activateExtension;
deactivateBtn.onclick = deactivateExtension;

if (sessionStorage.getItem("extension state") == null) {
    sessionStorage.setItem("extension state", "activated")
}

if (sessionStorage.getItem("extension state") == "activated") {
    activateBtn.hidden = true;
    document.getElementById("extensionStateHeader").innerHTML = "The extension is currently activated";
}

if (sessionStorage.getItem("extension state") == "deactivated") {
    deactivateBtn.hidden = true;
    document.getElementById("extensionStateHeader").innerHTML = "The extension is currently deactivated";
}

function activateExtension() {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {"id": "stateMsg", "extension state": "activated"});
    });
    sessionStorage.setItem("extension state", "activated");

    activateBtn.hidden = true;
    deactivateBtn.hidden = false;
    document.getElementById("extensionStateHeader").innerHTML = "The extension is currently activated";
}

function deactivateExtension() {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {"id": "stateMsg", "extension state": "deactivated"});
    });
    sessionStorage.setItem("extension state", "deactivated");

    deactivateBtn.hidden = true;
    activateBtn.hidden = false;
    document.getElementById("extensionStateHeader").innerHTML = "The extension is currently deactivated";
}