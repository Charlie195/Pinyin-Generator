// execute receiver function when message from content.js is received
chrome.runtime.onMessage.addListener(receiver);

// global selectedCharacter
window.selectedCharacter = "";

function receiver(request, sender, sendResponse) {
    // set selectedCharacter
    window.selectedCharacter = request.text;

    // find the pinyin for the selectedCharacter
    findPinyin(window.selectedCharacter);
}

function findPinyin(character) {
    // find index of selectedCharacter in data source
    var index = characterSource.findIndex(item => item.Character === character);

    // find and output corresponding pinyin
    try {
        const pinyin = characterSource[index]["Pinyin"];
        chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {text: pinyin});
        });
    } catch(err) {
        chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {text: character});
        });
    }
}