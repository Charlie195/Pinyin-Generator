// execute receiver function when message from content.js is received
chrome.runtime.onMessage.addListener(receivedCharacterMsg);

// global selectedCharacter
window.selectedCharacter = "";

function receivedCharacterMsg(request, sender, sendResponse) {
    // set selectedCharacter
    window.selectedCharacter = request.text;

    console.log(selectedCharacter);
    // find the pinyin for the selectedCharacter
    findPinyin(window.selectedCharacter, request.finishedTransliteration);
}

function findPinyin(character, finished) {
    // find index of selectedCharacter in data source
    var index = characterSource.findIndex(item => item.Character === character);

    // find and output corresponding pinyin
    try {
        const pinyin = characterSource[index]["Pinyin"];
        chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {text: pinyin, finishedTransliteration: finished});
        });
    } catch(err) {
        chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {text: character, finishedTransliteration: finished});
        });
    }
}