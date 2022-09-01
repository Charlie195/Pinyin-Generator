// execute receiver function when message from content.js is received
chrome.runtime.onMessage.addListener(receiveCharacterMsg);

// global selectedCharacter
window.selectedCharacter = "";

function receiveCharacterMsg(characterMsg, sender, sendResponse) {
    if (characterMsg["id"] == "characterMsg") {
        // set selectedCharacter
        window.selectedCharacter = characterMsg["text"];

        console.log(selectedCharacter);
        // find the pinyin for the selectedCharacter
        findPinyin(window.selectedCharacter, characterMsg["finishedTransliteration"]);
    }
}

function findPinyin(character, finished) {
    // find index of selectedCharacter in data source
    var index = characterSource.findIndex(item => item.Character === character);

    // find and output corresponding pinyin
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