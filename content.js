// Listener to receive the popup.js message with extension state
chrome.runtime.onMessage.addListener(receiveExtensionStateMsg);

function receiveExtensionStateMsg(extensionStateMsg) {
    if (extensionStateMsg["started"]) {
        initTranslation();
    }
}

function initTranslation() {
    // Execute receiveText when mouse is released
    window.addEventListener("mouseup", receiveTextMsg);

    // String to store transliterated pinyin
    var transliteratedPinyin = "";

    // Original element of the text on the page
    var origTextElement;

    var displayElement;

    // Listener to receive the background.js message with pinyin
    chrome.runtime.onMessage.addListener(receivePinyinMsg);

    function receiveTextMsg(eventObj) {
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

    function transliterate(character, process) {
        // Send text as message object to background.js
        let message = {
            text: character,
            finishedTransliteration: process // Identifying if there are more characters to transliterate
        };

        chrome.runtime.sendMessage(message);
    }

    // Receiving the pinyin message as an event object
    function receivePinyinMsg(request) {
        transliteratedPinyin += request.text + " "; // Setting keywords as favTeams from popup.js

        if (request.finishedTransliteration) { // Display the pinyin when all characters have been transliterated
            displayPinyin();
        }
    }

    function displayPinyin() {
        console.log(transliteratedPinyin);
        origTextElement.innerHTML += "<br>" + transliteratedPinyin;
    }
}