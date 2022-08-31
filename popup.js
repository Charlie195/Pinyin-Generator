window.onload = init;

function init() {
    chrome.tabs.query({currentWindow: true, active: true}, tabs => {
        tabID = tabs[0].id; // current tab

        if (!localStorage["popup state"] || localStorage["popup state"] == "home") {
            var yesBtn = document.getElementById("yesBtn");
            yesBtn.onclick = displayTransliteration;
    
            var noBtn = document.getElementById("noBtn");
            noBtn.onclick = displayFarewell;
        }
        if (localStorage["popup state"] == "transliterating") {
            displayTransliteration();
        }
    });

    function clearElements(container) {
        container.innerHTML = "";
    }

    function displayTransliteration() {
        localStorage.setItem("popup state", "transliterating");

        var extensionStateMsg = {"id": "extensionStateMsg", "started": true};
        chrome.tabs.sendMessage(tabID, extensionStateMsg);

        var displayDiv = document.getElementById("displayDiv");
        clearElements(displayDiv);

        displayDiv.innerHTML = `
        <h4>Highlight the text that you want to transliterate</h4>
        <h4>Here's the pinyin for your text:</h4>
        <h4 id="transliteration">Placeholder for rn</h4>
        <button id="doneTransliteratingBtn">Done Transliterating</button>
        `;

        var doneTransliteratingBtn = document.getElementById("doneTransliteratingBtn");
        doneTransliteratingBtn.onclick = displayFarewell;
    }

    function displayFarewell() {
        localStorage.setItem("popup state", "home");

        var extensionStateMsg = {"id": "extensionStateMsg", "started": false};
        chrome.tabs.sendMessage(tabID, extensionStateMsg);
        
        var displayDiv = document.getElementById("displayDiv");
        clearElements(displayDiv);

        displayDiv.innerHTML = `
        <h4>OK, just open the popup when you need to transliterate!</h4>
        `;

        setTimeout(()=> {
            window.close();
        }, 5000)
    }
}