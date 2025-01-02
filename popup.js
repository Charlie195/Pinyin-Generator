// Buttons to activate/deactivate the extension
const activateBtn = document.getElementById("activateBtn");
const deactivateBtn = document.getElementById("deactivateBtn");

activateBtn.onclick = activateExtension;
deactivateBtn.onclick = deactivateExtension;

// Detecting the activation state of the extension to determine whether to render the activate or deactivate button
chrome.storage.local.get((result) => {
    if (result.activated) {
        activateBtn.hidden = true;
        deactivateBtn.hidden = false;
        document.getElementById("extensionStateHeader").innerHTML = "The extension is currently activated";
    }
    else {
        deactivateBtn.hidden = true;
        activateBtn.hidden = false;
        document.getElementById("extensionStateHeader").innerHTML = "The extension is currently deactivated";
    }
});


// Activating the extension
function activateExtension() {
    // Sending message to content script of all tabs as an update of extension state change
    chrome.tabs.query({}, (tabs) => {
        tabs.forEach((tab) => {
            chrome.tabs.sendMessage(tab.id, {})
                .catch((error) => {     // Catch error caused by lack of content script in receiving tab
                    
                });
        });
    });
    chrome.storage.local.set({"activated": true});

    activateBtn.hidden = true;
    deactivateBtn.hidden = false;
    document.getElementById("extensionStateHeader").innerHTML = "The extension is currently activated";
}

// Deactivating the extension
function deactivateExtension() {
    // Sending message to content script as an update of extension state change
    chrome.tabs.query({}, (tabs) => {
        tabs.forEach((tab) => {
            chrome.tabs.sendMessage(tab.id, {})
                .catch((error) => {     // Catch error caused by lack of content script in receiving tab
                    
                });
        });
    });
    chrome.storage.local.set({"activated": false});

    console.log("aga");

    deactivateBtn.hidden = true;
    activateBtn.hidden = false;
    document.getElementById("extensionStateHeader").innerHTML = "The extension is currently deactivated";
}


// chrome.storage.local.set({"activated": true});