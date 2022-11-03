const activateBtn = document.getElementById("activateBtn");
const deactivateBtn = document.getElementById("deactivateBtn");

const activateDemoBtn = document.getElementById("activateDemoBtn");
const demoVideo = document.getElementById("demoVideo")

activateBtn.onclick = activateExtension;
deactivateBtn.onclick = deactivateExtension;

activateDemoBtn.onclick = activateDemo;
deactivateDemoBtn.onclick = deactivateDemo;

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

function activateDemo() {
    document.body.style.height = "450px";
    demoVideo.hidden = false;
    activateDemoBtn.hidden = true;
    deactivateDemoBtn.hidden = false;
}

function deactivateDemo() {
    document.body.style.height = "250px";
    demoVideo.pause();
    demoVideo.hidden = true;
    activateDemoBtn.hidden = false;
    deactivateDemoBtn.hidden = true;
}