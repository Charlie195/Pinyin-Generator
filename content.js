// Setting up transliterate button
const transliterateBtn = document.createElement("button");
transliterateBtn.innerHTML = "TRANSLITERATE";
document.getElementById("meta_content").appendChild(transliterateBtn);
console.log("button should be loaded");

// Execute receiveText when transliterate button is clicked
transliterateBtn.onclick = receiveText;

var title;
var transliteratedPinyin = "";

// Listener to receive the background.js message with pinyin
chrome.runtime.onMessage.addListener(receivedPinyinMsg);

function receiveText() {
    // Title
    title = document.getElementById("activity-name").innerHTML;

    // Transliterate through each character
    for (var i = 0; i < title.length; i++) {
        transliterate(title[i]);
    }

    displayPinyin(transliteratedPinyin);
}

function transliterate(character) {
    // send text as message object to background.js
    let message = {
        text: character
    };

    chrome.runtime.sendMessage(message);
}

// Receiving the pinyin message as an event object
function receivedPinyinMsg(request) {
    transliteratedPinyin += request.text + " "; // Setting keywords as favTeams from popup.js
}

function displayPinyin(displayText) {
    console.log(displayText);
}