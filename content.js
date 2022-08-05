alert("Yup, this is Weixin")

window.addEventListener("mouseup", wordSelected);

function wordSelected() {
    let selectedText = window.getSelection().toString().trim();
    if (selectedText.length == 1) {
        let message = {
            text: selectedText
        };
        chrome.runtime.sendMessage(message);
    }
}