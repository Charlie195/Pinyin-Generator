// Setting up transliterate button
const transliterateBtn = document.createElement("button");
transliterateBtn.innerHTML = "TRANSLITERATE";
document.getElementById("meta_content").appendChild(transliterateBtn);
console.log("button should be loaded");

// Execute receiveText when transliterate button is clicked
transliterateBtn.onclick = receiveText;

var title;

function receiveText() {
    // Title
    title = document.getElementById("activity-name").innerHTML;

    // Transliterate through each character
    for (var i = 0; i < title.length; i++) {
        transliterate(title[i]);
    }
}

function transliterate(character) {
    // send text as message object to background.js
    let message = {
        text: character
    };

    chrome.runtime.sendMessage(message);
}