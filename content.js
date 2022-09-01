// Listener to receive the popup.js message with extension state
chrome.runtime.onMessage.addListener(receiveExtensionStateMsg);

// Variable to ensure the initTranslation isn't executed multiple times over
var initiated;

// Global variable to store the function reference
var receiveText;
var receivePinyinMsg;

// Original element of the text on the page
var origTextElement;

// String to store transliterated pinyin
var transliteratedPinyin = "";

if (localStorage.getItem("extension started") == "true" && !initiated) { // Local storage doesn't store actual booleans but rather strings
    initTranslation();
}

function receiveExtensionStateMsg(extensionStateMsg) {
    if (extensionStateMsg["id"] == "extensionStateMsg") {
        if (extensionStateMsg["started"]) {
            localStorage.setItem("extension started", true);
            if (!initiated) {
                initTranslation();
            }
        }
        else {
            localStorage.setItem("extension started", false);
            endTranslation();
        }
    }
}

function initTranslation() {
    receiveText = (eventObj) => {
        // Getting highlighted text before possible DOM modifications that would unhighlight the text
        var selectedText = window.getSelection().toString();
        
        if (origTextElement) { // Delete the previous displayed transliteration if there is one
            origTextElement.innerHTML = origTextElement.innerHTML.replace(`<br>${transliteratedPinyin}`, ""); // We need to set the innerHTML to the changed value
        }

        transliteratedPinyin = ""; // Emptying the transliterated pinyin storage
        origTextElement = eventObj.target;

        // Transliterate through each character of highlighted text
        for (var i = 0; i < selectedText.length; i++) {
            transliterate(selectedText[i], i == selectedText.length - 1);
        }
    }

    // Receiving the pinyin message as an event object
    receivePinyinMsg = (pinyinMsg) => {
        if (pinyinMsg["id"] == "pinyinMsg") {
            transliteratedPinyin += pinyinMsg["text"] + " "; // Setting keywords as favTeams from popup.js

            if (pinyinMsg["finishedTransliteration"]) { // Send the pinyin to the popup to display when all characters have been transliterated
                displayPinyin();
            }
        }
    }

    // Execute receiveText when mouse is released
    window.addEventListener("mouseup", receiveText);

    // Listener to receive the background.js message with pinyin
    chrome.runtime.onMessage.addListener(receivePinyinMsg);

    function transliterate(character, process) {
        // Send text as message object to background.js
        var characterMsg = {
            "id": "characterMsg",
            "text": character,
            "finishedTransliteration": process // Identifying if there are more characters to transliterate
        };

        chrome.runtime.sendMessage(characterMsg);
    }

    function displayPinyin() {
        origTextElement.innerHTML += "<br>" + transliteratedPinyin;

        // Send display transliteration message to popup.js
        var displayMsg = {
            "id": "displayMsg",
            "text": transliteratedPinyin
        };

        chrome.runtime.sendMessage(displayMsg);
    }

    initiated = true;
}

function endTranslation() {
    window.removeEventListener("mouseup", receiveText);

    chrome.runtime.onMessage.removeListener(receivePinyinMsg);

    if (origTextElement) { // Delete the last displayed transliteration
        origTextElement.innerHTML = origTextElement.innerHTML.replace(`<br>${transliteratedPinyin}`, ""); // We need to set the innerHTML to the changed value
    }

    initiated = false;
}