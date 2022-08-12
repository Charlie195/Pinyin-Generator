// execute wordSelected function when mouse is released
window.addEventListener("mouseup", wordSelected);

function wordSelected() {
    // highlighted text
    let selectedText = window.getSelection().toString().trim();

    // send text as message object to background.js
    if (selectedText.length == 1) {
        let message = {
            text: selectedText
        };
        chrome.runtime.sendMessage(message);
    }
}