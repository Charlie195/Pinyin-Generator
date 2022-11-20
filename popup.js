// Buttons to activate/deactivate the extension
const activateBtn = document.getElementById("activateBtn");
const deactivateBtn = document.getElementById("deactivateBtn");

activateBtn.onclick = activateExtension;
deactivateBtn.onclick = deactivateExtension;

// Ensuring no duplication of listeners to retrieve the extension state when the popup is opened
chrome.runtime.onMessage.removeListener(receiveInitalStateMsg);
chrome.runtime.onMessage.addListener(receiveInitalStateMsg);

// Sending a message when the popup opens to request for extension state
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {"id": "requestInitialStateMsg"});
});

// Retrieving the return message with extension state
function receiveInitalStateMsg(initialStateMsg) {
    if (initialStateMsg["id"] == "initialStateMsg") {
        
        // Matching session storage of popup to that of the content page
        sessionStorage.setItem("extension state", `${initialStateMsg["extension state"]}`);

        // Displaying the proper prompt and button based on extension state
        if (sessionStorage.getItem("extension state") == "activated") {
            activateBtn.hidden = true;
            document.getElementById("extensionStateHeader").innerHTML = "The extension is currently activated";
        }
        
        if (sessionStorage.getItem("extension state") == "deactivated") {
            deactivateBtn.hidden = true;
            document.getElementById("extensionStateHeader").innerHTML = "The extension is currently deactivated";
        }
    }
}

// Activating the extension
function activateExtension() {
    // Sending message to content script as an update of extension state change
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {"id": "stateMsg", "extension state": "activated"});
    });
    sessionStorage.setItem("extension state", "activated");

    activateBtn.hidden = true;
    deactivateBtn.hidden = false;
    document.getElementById("extensionStateHeader").innerHTML = "The extension is currently activated";
}

// Deactivating the extension
function deactivateExtension() {
    // Sending message to content script as an update of extension state change
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {"id": "stateMsg", "extension state": "deactivated"});
    });
    sessionStorage.setItem("extension state", "deactivated");

    deactivateBtn.hidden = true;
    activateBtn.hidden = false;
    document.getElementById("extensionStateHeader").innerHTML = "The extension is currently deactivated";
}