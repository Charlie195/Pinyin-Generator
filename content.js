window.onload = init;

function init() {
    // Setting up activate button
    const activateBtn = document.createElement("button");
    activateBtn.setAttribute("id", "activateBtn");
    activateBtn.innerHTML = "TRANSLITERATE";
    document.getElementById("meta_content").appendChild(activateBtn);

    var deactivateBtn = document.createElement("button");
    deactivateBtn.setAttribute("id", "deactivateBtn");
    deactivateBtn.innerHTML = "DEACTIVATE";
    document.getElementById("meta_content").appendChild(deactivateBtn);
    deactivateBtn.hidden = true;

    // Global variable to store the function reference
    var receiveText;
    var receivePinyinMsg;

    // Original element of the text on the page
    var origTextElement;

    // String to store transliterated pinyin
    var transliteratedPinyin = "";

    var extensionWindow = document.createElement("div");
    extensionWindow.setAttribute("id", "extensionWindowDiv");
    extensionWindow.innerHTML = `
        <div id="draggableHeader">Click here to move</div>
        <p>Move</p>
        <p>this</p>
        <p>DIV</p>
    `;

    var container = document.querySelector("html");
    container.insertBefore(extensionWindow, container.firstChild);
    extensionWindow.hidden = true;

    var cssElement = document.createElement("link");
    cssElement.setAttribute("rel", "stylesheet");
    cssElement.setAttribute("href", "extensionWindow.css");
    document.querySelector("html").appendChild(cssElement);

    // Make the DIV element draggable:
    dragElement(document.getElementById("extensionWindowDiv"));

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById("draggableHeader")) {
            // if present, the header is where you move the DIV from:
            document.getElementById("draggableHeader").onmousedown = dragMouseDown;
        } else {
            // otherwise, move the DIV from anywhere inside the DIV:
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    activateBtn.onclick = activateExtension;

    function activateExtension() {
        extensionWindow.hidden = false;
    
        receiveText = (eventObj) => {
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

        // Receiving the pinyin message as an event object
        receivePinyinMsg = (pinyinMsg) => {
            if (pinyinMsg["id"] == "pinyinMsg") {
                transliteratedPinyin += pinyinMsg["text"] + " "; // Setting keywords as favTeams from popup.js

                if (pinyinMsg["finishedTransliteration"]) { // Send the pinyin to the popup to display when all characters have been transliterated
                    displayPinyin();
                }
            }
        }

        // Execute receiveText when mouse is released
        window.addEventListener("mouseup", receiveText);

        // Listener to receive the background.js message with pinyin
        chrome.runtime.onMessage.addListener(receivePinyinMsg);

        function transliterate(character, process) {
            // Send text as message object to background.js
            var characterMsg = {
                "id": "characterMsg",
                "text": character,
                "finishedTransliteration": process // Identifying if there are more characters to transliterate
            };

            chrome.runtime.sendMessage(characterMsg);
        }

        function displayPinyin() {
            origTextElement.innerHTML += "<br>" + transliteratedPinyin;
        }

        var activateBtn = document.getElementById("activateBtn");
        activateBtn.hidden = true;

        var deactivateBtn = document.getElementById("deactivateBtn");
        deactivateBtn.hidden = false;

        deactivateBtn.onclick = deactivateExtension;
    }

    function deactivateExtension() {
        extensionWindow.hidden = true;

        window.removeEventListener("mouseup", receiveText);

        chrome.runtime.onMessage.removeListener(receivePinyinMsg);

        if (origTextElement) { // Delete the last displayed transliteration
            origTextElement.innerHTML = origTextElement.innerHTML.replace(`<br>${transliteratedPinyin}`, ""); // We need to set the innerHTML to the changed value
        }
        
        var activateBtn = document.getElementById("activateBtn");
        activateBtn.hidden = false;

        var deactivateBtn = document.getElementById("deactivateBtn");
        deactivateBtn.hidden = true;
    }

    // function receiveExtensionStateMsg(extensionStateMsg) {
    //     if (extensionStateMsg["id"] == "extensionStateMsg") {
    //         if (extensionStateMsg["started"]) {
    //             localStorage.setItem("extension started", true);
    //             if (!initiated) {
    //                 initTranslation();
    //             }
    //         }
    //         else {
    //             localStorage.setItem("extension started", false);
    //             endTranslation();
    //         }
    //     }
    // }

    // function initTranslation() {
    //     receiveText = (eventObj) => {
    //         // Getting highlighted text before possible DOM modifications that would unhighlight the text
    //         var selectedText = window.getSelection().toString();
            
    //         if (origTextElement) { // Delete the previous displayed transliteration if there is one
    //             origTextElement.innerHTML = origTextElement.innerHTML.replace(`<br>${transliteratedPinyin}`, ""); // We need to set the innerHTML to the changed value
    //         }

    //         transliteratedPinyin = ""; // Emptying the transliterated pinyin storage
    //         origTextElement = eventObj.target;

    //         // Transliterate through each character of highlighted text
    //         for (var i = 0; i < selectedText.length; i++) {
    //             transliterate(selectedText[i], i == selectedText.length - 1);
    //         }
    //     }

    //     // Receiving the pinyin message as an event object
    //     receivePinyinMsg = (pinyinMsg) => {
    //         if (pinyinMsg["id"] == "pinyinMsg") {
    //             transliteratedPinyin += pinyinMsg["text"] + " "; // Setting keywords as favTeams from popup.js

    //             if (pinyinMsg["finishedTransliteration"]) { // Send the pinyin to the popup to display when all characters have been transliterated
    //                 displayPinyin();
    //             }
    //         }
    //     }

    //     // Execute receiveText when mouse is released
    //     window.addEventListener("mouseup", receiveText);

    //     // Listener to receive the background.js message with pinyin
    //     chrome.runtime.onMessage.addListener(receivePinyinMsg);

    //     function transliterate(character, process) {
    //         // Send text as message object to background.js
    //         var characterMsg = {
    //             "id": "characterMsg",
    //             "text": character,
    //             "finishedTransliteration": process // Identifying if there are more characters to transliterate
    //         };

    //         chrome.runtime.sendMessage(characterMsg);
    //     }

    //     function displayPinyin() {
    //         origTextElement.innerHTML += "<br>" + transliteratedPinyin;

    //         // Send display transliteration message to popup.js
    //         var displayMsg = {
    //             "id": "displayMsg",
    //             "text": transliteratedPinyin
    //         };

    //         chrome.runtime.sendMessage(displayMsg);
    //     }

    //     initiated = true;
    // }

    // function endTranslation() {
    //     window.removeEventListener("mouseup", receiveText);

    //     chrome.runtime.onMessage.removeListener(receivePinyinMsg);

    //     if (origTextElement) { // Delete the last displayed transliteration
    //         origTextElement.innerHTML = origTextElement.innerHTML.replace(`<br>${transliteratedPinyin}`, ""); // We need to set the innerHTML to the changed value
    //     }

    //     initiated = false;
    // }
}