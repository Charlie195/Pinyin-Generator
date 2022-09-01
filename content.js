// Wait for page to load to run script
window.onload = init;

function init() {
    // Setting up activate button
    const activateBtn = document.createElement("button");
    activateBtn.setAttribute("id", "activateBtn");
    activateBtn.innerHTML = "TRANSLITERATE";
    document.getElementById("meta_content").appendChild(activateBtn);

    // Setting up deactivate button but keeping it hidden
    const deactivateBtn = document.createElement("button");
    deactivateBtn.setAttribute("id", "deactivateBtn");
    deactivateBtn.innerHTML = "DEACTIVATE";
    document.getElementById("meta_content").appendChild(deactivateBtn);
    deactivateBtn.hidden = true;

    // Global variable to store the function reference
    var receiveText;
    var receivePinyinMsg;

    // String to store transliterated pinyin
    var transliteratedPinyin = "";

    // Setting up the extension window
    var extensionWindow = document.createElement("div");
    extensionWindow.setAttribute("id", "extensionWindowDiv");
    extensionWindow.innerHTML = `
        <div id="draggableHeader">Drag to Move</div>
        <h2>Pinyin Transliteration</h2>
        <p>Here's your transliteration:</p>
        <p></p>
    `;

    // Adding top the top of the page, but keeping the extension window hidden
    var container = document.querySelector("html");
    container.insertBefore(extensionWindow, container.firstChild);
    extensionWindow.hidden = true;

    // Global variable for the element to display the transliteration in the extension window
    var displayElement = document.getElementById("extensionWindowDiv").querySelectorAll("p")[1];

    // Injecting css for extension window
    var cssElement = document.createElement("link");
    cssElement.setAttribute("rel", "stylesheet");
    cssElement.setAttribute("href", "extensionWindow.css");
    document.querySelector("html").appendChild(cssElement);

    // Making extension window draggable:
    dragElement(document.getElementById("extensionWindowDiv"));

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById("draggableHeader")) {
            // Ff present, the header is where you move the DIV from:
            document.getElementById("draggableHeader").onmousedown = dragMouseDown;
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

        // Receiving the pinyin message
        receivePinyinMsg = (pinyinMsg) => {
            if (pinyinMsg["id"] == "pinyinMsg") { // Checking if the message is for this receiver
                transliteratedPinyin += pinyinMsg["text"] + " "; // Storing each transliterated pinyin to the storage variable

                if (pinyinMsg["finishedTransliteration"]) { // Display the complete transliteration when all characters have been transliterated
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