// Execute receiver function when message from content.js is received
chrome.runtime.onMessage.addListener(receiveCharacterMsg);

// Global selectedCharacter
window.selectedCharacter = "";

function receiveCharacterMsg(characterMsg, sender, sendResponse) {
    if (characterMsg["id"] == "characterMsg") { // Ensuring sender and receiver match
        // Set selectedCharacter
        window.selectedCharacter = characterMsg["text"];

        console.log(selectedCharacter);
        // Find the pinyin for the selectedCharacter
        findPinyin(window.selectedCharacter, characterMsg["finishedTransliteration"]);
    }
}

function findPinyin(character, finished) {
    // Find index of selectedCharacter in data source
    var index = characterSource.findIndex(item => item.Character === character);

    // Find and return corresponding pinyin to content.js
    try {
        const pinyin = characterSource[index]["Pinyin"];
        chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {"id": "pinyinMsg", "text": pinyin, "finishedTransliteration": finished});
        });
    } catch(err) {
        chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {"id": "pinyinMsg", "text": character, "finishedTransliteration": finished});
        });
    }
}