// Wait for page to load to run script
window.onload = init;

function init() {
    const container = document.querySelector("html");

    // Setting up activate button
    const activateBtn = document.createElement("button");
    activateBtn.setAttribute("id", "activateBtn");
    activateBtn.setAttribute("class", "extensionBtn");
    activateBtn.innerHTML = "TRANSLITERATE";
    container.insertBefore(activateBtn, document.body);

    // Global variable to store the function reference
    var receiveText;
    var receivePinyinMsg;

    // String to store transliterated pinyin
    var transliteratedPinyin = "";

    // Setting up the extension window
    var extensionWindow = document.createElement("div");
    extensionWindow.setAttribute("class", "extensionWindowDiv");
    extensionWindow.innerHTML = `
        <div class="draggableHeader">
            <h1>Drag to Move</h1>
        </div>
        <div class="extensionBody">
            <h2>Highlight the Chinese characters that you want to transliterate</h2>
            <h2>Here's your transliteration:</h2>
            <p></p>
        </div>
    `;

    // Setting up deactivate button on the extension window but keeping it hidden
    const deactivateBtn = document.createElement("button");
    deactivateBtn.setAttribute("id", "deactivateBtn");
    deactivateBtn.setAttribute("class", "extensionBtn");
    deactivateBtn.innerHTML = "X";
    extensionWindow.querySelector("div").appendChild(deactivateBtn);
    deactivateBtn.hidden = true;

    // Adding top the top of the page, but keeping the extension window hidden
    container.insertBefore(extensionWindow, container.firstChild);
    extensionWindow.hidden = true;

    // Global variable for the element to display the transliteration in the extension window
    var displayElement = document.getElementsByClassName("extensionWindowDiv")[0].querySelector("p");

    // Injecting css for extension window
    var cssElement = document.createElement("link");
    cssElement.setAttribute("rel", "stylesheet");
    cssElement.setAttribute("href", "extensionWindow.css");
    document.querySelector("html").appendChild(cssElement);

    // Making extension window draggable:
    dragElement(document.getElementsByClassName("extensionWindowDiv")[0]);

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementsByClassName("draggableHeader")[0]) {
            // Ff present, the header is where you move the DIV from:
            document.getElementsByClassName("draggableHeader")[0].onmousedown = dragMouseDown;
        } else {
            // Otherwise, move the DIV from anywhere inside the DIV:
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // Get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // Call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // Calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // Set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // Stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    // Activate extension and extension window when the activate button is pressed
    activateBtn.onclick = activateExtension;

    function activateExtension() {
        // Reveal extension window
        extensionWindow.hidden = false;
    
        // Assigning a function reference to the receiveText variable
        receiveText = (eventObj) => {
            // Getting highlighted text before possible DOM modifications that would unhighlight the text
            var selectedText = window.getSelection().toString();

            transliteratedPinyin = ""; // Emptying the transliterated pinyin storage

            // Transliterate through each character of highlighted text
            for (var i = 0; i < selectedText.length; i++) {
                transliterate(selectedText[i], i == selectedText.length - 1);
            }
        }

        // Storing previous character states to format spaces properly
        var prevWasPinyin;
        var prevWasPunc;

        // Receiving the pinyin message
        receivePinyinMsg = (pinyinMsg) => {
            if (pinyinMsg["id"] == "pinyinMsg") { // Checking if the message is for this receiver
                // Adding space between pinyins and non-puncuations
                if (prevWasPinyin && !pinyinMsg["isPinyin"] && !pinyinMsg["text"].match(/\。|\，|\？|\！|\：|\；|\’|\“| /g)) {
                    transliteratedPinyin += " ";
                }
                
                // Adding space between pinyins but not between pinyins and punctuation
                if (pinyinMsg["isPinyin"] && !prevWasPunc) {
                    transliteratedPinyin += " ";
                    prevWasPinyin = true;
                }
                else {
                    prevWasPinyin = false;
                }

                // Identifying if this character is a punctuation for the next character
                prevWasPunc = false;
                if (pinyinMsg["text"].match(/\。|\，|\？|\！|\：|\；|\’|\“| /g)) {
                    prevWasPunc = true;
                }

                transliteratedPinyin += pinyinMsg["text"]; // Storing each transliterated pinyin to the storage variable

                if (pinyinMsg["finishedTransliteration"]) { // Display the complete transliteration when all characters have been transliterated
                    displayPinyin();
                    prevWasPinyin = false;
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
                "id": "characterMsg", // IDs to match specific sender to receiver
                "text": character, // Character to transliterate
                "finishedTransliteration": process // Identifying if there are more characters to transliterate
            };
            // Send message to background.js
            chrome.runtime.sendMessage(characterMsg);
        }

        function displayPinyin() {
            // Display the transliteration in the display element
            displayElement.innerHTML = transliteratedPinyin;
        }

        // Hide the activate button and reveal the deactivate button
        activateBtn.hidden = true;
        deactivateBtn.hidden = false;

        // Deactivate extension window when deactivate button is pressed
        deactivateBtn.onclick = deactivateExtension;
    }

    function deactivateExtension() {
        // Empty display element
        displayElement.innerHTML = "";

        // Hide extension window
        extensionWindow.hidden = true;

        // Remove listeners to avoid duplication
        window.removeEventListener("mouseup", receiveText);
        chrome.runtime.onMessage.removeListener(receivePinyinMsg);
        
        // Hide the deactivate button and reveal the activate button
        activateBtn.hidden = false;
        deactivateBtn.hidden = true;
    }
}