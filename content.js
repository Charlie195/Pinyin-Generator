// Wait for page to load to run script
window.onload = init;

function init() {
    // Constants for display mode
    const MODES = {
        aboveLine : "above line",
        separate : "separate",
    }

    const separateIcon = chrome.runtime.getURL('separate.png');
    const aboveLineIcon = chrome.runtime.getURL('aboveLing.png')

    // Default display mode is above line
    var displayMode = MODES.aboveLine;

    // Setting sessionStorage for activated/deactivated state to default if uninitialized
    if (sessionStorage.getItem("extension state") == null) {
        sessionStorage.setItem("extension state", "activated")
    }

    // Link for source of demo video
    const demoVideoURL = chrome.runtime.getURL('pinyin_generator_demo.mp4');
    
    // Container of html
    const container = document.querySelector("html");

    // // Setting up open button
    // const openBtn = document.createElement("button");
    // openBtn.setAttribute("id", "openBtn");
    // openBtn.setAttribute("class", "extensionBtn squareBtn");
    // openBtn.innerHTML = "TRANSLITERATE";
    // container.insertBefore(openBtn, document.body);

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
            <h4>To activate/deactivate the extension, click on the extension icon</h4>

            <button id="activateDemoBtn" class="circularBtn extensionBtn">i</button>
            <button id="deactivateDemoBtn" class="circularBtn extensionBtn" hidden>X</button>

            <video id="demoVideo" width="300" height="240" controls hidden>
                <source src="${demoVideoURL}" type="video/mp4">
            </video>
        </div>
    `;

    // Setting up close button on the extension window but keeping it hidden
    const closeBtn = document.createElement("button");
    closeBtn.setAttribute("id", "closeBtn");
    closeBtn.setAttribute("class", "extensionBtn squareBtn");
    closeBtn.innerHTML = "X";
    extensionWindow.querySelector("div").appendChild(closeBtn);
    closeBtn.hidden = true;

    // Adding top the top of the page, but keeping the extension window hidden
    container.insertBefore(extensionWindow, container.firstChild);
    extensionWindow.hidden = true;

    // Creating the tooltip to display pinyin on highlight
    const tooltip = document.createElement("div");
    tooltip.innerHTML = `
        <button id="separateBtn">
            <img id="separateIcon" src=${separateIcon} alt="Separate Icon" />
        </button>
        <div id="tooltipText">Hello</div>
    `;
    tooltip.setAttribute("id", "tooltip");
    container.insertBefore(tooltip, container.firstChild);
    tooltip.hidden = true;
    const separateBtn = document.getElementById("separateBtn");

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


    // Variable for the reference of current display element (popup or tooltip)
    var display = tooltip;

    // Open extension and extension window when the open button is pressed
    function openSeparate() {
        console.log(tooltip.style.left);
        extensionWindow.hidden = false;
        tooltip.hidden = true;
        display = extensionWindow;
    }

    function openTooltip() {
        extensionWindow.hidden = true;
        tooltip.hidden = false;
        tooltip.style.left = `${parseFloat(tooltip.style.left) - tooltip.clientWidth / 2}px`;
        tooltip.style.top = `${parseFloat(tooltip.style.top) - tooltip.clientHeight}px`;
        display = tooltip;
    }

    separateBtn.onclick = openSeparate;
    closeBtn.onclick = openTooltip;

    // openBtn.onclick = openExtension;

    // // Activate/deactivate extension based on popup message
    // chrome.runtime.onMessage.addListener(receiveStateMsg);
    // if (sessionStorage.getItem("extension state") == "deactivated") {
    //     openBtn.hidden = true;
    // }

    // function receiveStateMsg(stateMsg) {
    //     if (stateMsg["id"] == "stateMsg") {
    //         if (stateMsg["extension state"] == "activated") {
    //             openBtn.hidden = false;
    //             sessionStorage.setItem("extension state", "activated");
    //         }
    //         if (stateMsg["extension state"] == "deactivated") {
    //             openBtn.hidden = true;
    //             extensionWindow.hidden = true;
    //             sessionStorage.setItem("extension state", "deactivated");
                
    //             // Remove listeners to avoid duplication
    //             window.removeEventListener("mouseup", receiveText);
    //         }
    //     }
    // }

    // // Receive request for initial state
    // chrome.runtime.onMessage.addListener(receiveRequestInitialStateMsg);
    
    // function receiveRequestInitialStateMsg(requestInitialStateMsg) {
    //     if (requestInitialStateMsg["id"] == "requestInitialStateMsg") {
    //         // Send message to popup.js with current extension state
    //         chrome.runtime.sendMessage({"id": "initialStateMsg", "extension state": `${sessionStorage.getItem("extension state")}`});
    //     }
    // }

    var selection;

    function displayPinyin() {
        // // Reveal popup with pinyin if the display mode is separate
        // displayElement.hidden = displayMode != MODES.separate;

        // Display the transliteration on the popup
        displayElement.innerHTML = transliteratedPinyin;

        // // Reveal tooltip with pinyin if the display mode is above line
        // tooltip.hidden = displayMode != MODES.aboveLine;

        display.hidden = false;

        // Display the transliteration on the tooltip
        if (selection.isCollapsed) {
            tooltip.hidden = true;
            return;
        }
        else {
            document.getElementById("tooltipText").innerHTML = transliteratedPinyin;
            document.getElementById("tooltipText").innerHTML = "x";
            const rect = selection.getRangeAt(0).getBoundingClientRect();

            // Adjustments for scrolled amount, since clientWidth and clientHeight is relative to viewport
            const scrollLeft = window.pageXOffset;
            const scrollTop = window.pageYOffset;

            tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.clientWidth / 2 + scrollLeft}px`;
            tooltip.style.top = `${rect.top - tooltip.clientHeight - 10 + scrollTop}px`;
        }
    }

    // Assigning a function reference to the receiveText variable
    receiveText = (eventObj) => {
        selection = window.getSelection();
        // Getting highlighted text before possible DOM modifications that would unhighlight the text
        var selectedText = selection.toString();

        transliteratedPinyin = ""; // Emptying the transliterated pinyin storage

        // Transliterate through each character of highlighted text
        for (var i = 0; i < selectedText.length; i++) {
            transliterate(selectedText[i], i == selectedText.length - 1);
        }

        displayPinyin();
    }

    // Execute receiveText when mouse is released
    window.addEventListener("mouseup", receiveText);

    function transliterate(character, process) {
        // Send text as message object to background.js
        var characterMsg = {
            "text": character, // Character to transliterate
            "finishedTransliteration": process // Identifying if there are more characters to transliterate
        };

        // Find index of selectedCharacter in data source yessir
        var index = characterSource.findIndex(item => item.Character === characterMsg["text"]);

        // Find and return corresponding pinyin to content.js
        try {
            const pinyin = characterSource[index]["Pinyin"];

            var pinyinMsg = {"text": pinyin, 
                "isPinyin": true, 
                "finishedTransliteration": characterMsg["finishedTransliteration"]
            };
        } 
        catch(err) {
            var pinyinMsg = {"text": characterMsg["text"], 
                "isPinyin": false, 
                "finishedTransliteration": characterMsg["finishedTransliteration"]
            };
        }
        finally {
            appendToDisplayText(pinyinMsg);
        }
    }

    // Storing previous character states to format spaces properly
    var prevWasPinyin;
    var prevWasPunc;

    // Seperate function to format the pinyin and non-pinyins together for the display
    function appendToDisplayText(pinyinMsg) {
        // Adding space between pinyins and non-puncuations
        if (prevWasPinyin && !pinyinMsg["isPinyin"] && !pinyinMsg["text"].match(/\.|\,|\?|\!|\:|\;|\'|\"|\。|\，|\？|\！|\：|\；|\’|\“| /g)) {
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
        if (pinyinMsg["text"].match(/\.|\,|\?|\!|\:|\;|\'|\"|\。|\，|\？|\！|\：|\；|\’|\“| /g)) {
            prevWasPunc = true;
        }

        transliteratedPinyin += pinyinMsg["text"]; // Storing each transliterated pinyin to the storage variable

        if (pinyinMsg["finishedTransliteration"]) { // Display the complete transliteration when all characters have been transliterated
            // displayPinyin();
            prevWasPinyin = false;
        }
    }

    function openExtension() {
        // Reveal extension window
        // extensionWindow.hidden = false;
    
        // // Assigning a function reference to the receiveText variable
        // receiveText = (eventObj) => {
        //     const selection = window.getSelection();
        //     // Getting highlighted text before possible DOM modifications that would unhighlight the text
        //     var selectedText = selection.toString();

        //     transliteratedPinyin = ""; // Emptying the transliterated pinyin storage

        //     // Transliterate through each character of highlighted text
        //     for (var i = 0; i < selectedText.length; i++) {
        //         transliterate(selectedText[i], i == selectedText.length - 1);
        //     }

        //     if (selection.isCollapsed) {
        //         tooltip.hidden = true;
        //         console.log("her her")
        //         return;
        //     }
        //     else {
        //         document.getElementById("tooltipText").innerHTML = transliteratedPinyin;
        //         const rect = selection.getRangeAt(0).getBoundingClientRect();

        //         // Adjustments for scrolled amount, since clientWidth and clientHeight is relative to viewport
        //         const scrollLeft = window.pageXOffset;
        //         const scrollTop = window.pageYOffset;

        //         console.log("tooltip: " + tooltip.clientWidth);
        //         console.log(rect.left + rect.width / 2 - tooltip.clientWidth / 2);

        //         tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.clientWidth / 2 + scrollLeft}px`;
        //         tooltip.style.top = `${rect.top - tooltip.clientHeight - 10 + scrollTop}px`;
        //     }
        // }

        // // Execute receiveText when mouse is released
        // window.addEventListener("mouseup", receiveText);

        // function transliterate(character, process) {
        //     // Send text as message object to background.js
        //     var characterMsg = {
        //         "text": character, // Character to transliterate
        //         "finishedTransliteration": process // Identifying if there are more characters to transliterate
        //     };

        //     // Find index of selectedCharacter in data source yessir
        //     var index = characterSource.findIndex(item => item.Character === characterMsg["text"]);

        //     // Find and return corresponding pinyin to content.js
        //     try {
        //         const pinyin = characterSource[index]["Pinyin"];

        //         var pinyinMsg = {"text": pinyin, 
        //             "isPinyin": true, 
        //             "finishedTransliteration": characterMsg["finishedTransliteration"]
        //         };
        //     } 
        //     catch(err) {
        //         var pinyinMsg = {"text": characterMsg["text"], 
        //             "isPinyin": false, 
        //             "finishedTransliteration": characterMsg["finishedTransliteration"]
        //         };
        //     }
        //     finally {
        //         appendToDisplayText(pinyinMsg);
        //     }
        // }

        // // Storing previous character states to format spaces properly
        // var prevWasPinyin;
        // var prevWasPunc;

        // // Seperate function to format the pinyin and non-pinyins together for the display
        // function appendToDisplayText(pinyinMsg) {
        //     // Adding space between pinyins and non-puncuations
        //     if (prevWasPinyin && !pinyinMsg["isPinyin"] && !pinyinMsg["text"].match(/\.|\,|\?|\!|\:|\;|\'|\"|\。|\，|\？|\！|\：|\；|\’|\“| /g)) {
        //         transliteratedPinyin += " ";
        //     }
            
        //     // Adding space between pinyins but not between pinyins and punctuation
        //     if (pinyinMsg["isPinyin"] && !prevWasPunc) {
        //         transliteratedPinyin += " ";
        //         prevWasPinyin = true;
        //     }
        //     else {
        //         prevWasPinyin = false;
        //     }

        //     // Identifying if this character is a punctuation for the next character
        //     prevWasPunc = false;
        //     if (pinyinMsg["text"].match(/\.|\,|\?|\!|\:|\;|\'|\"|\。|\，|\？|\！|\：|\；|\’|\“| /g)) {
        //         prevWasPunc = true;
        //     }

        //     transliteratedPinyin += pinyinMsg["text"]; // Storing each transliterated pinyin to the storage variable

        //     if (pinyinMsg["finishedTransliteration"]) { // Display the complete transliteration when all characters have been transliterated
        //         displayPinyin();
        //         prevWasPinyin = false;
        //     }
        // }

        // Hide the open button and reveal the close button
        openBtn.hidden = true;
        closeBtn.hidden = false;

        // Close extension window when close button is pressed
        closeBtn.onclick = closeExtension;
    }

    function closeExtension() {
        // Empty display element
        displayElement.innerHTML = "";

        // Hide extension window
        extensionWindow.hidden = true;

        // Remove listeners to avoid duplication
        window.removeEventListener("mouseup", receiveText);
        // chrome.runtime.onMessage.removeListener(receivePinyinMsg);
        
        // Hide the close button and reveal the open button
        openBtn.hidden = false;
        closeBtn.hidden = true;
    }

    // Buttons for activating/deactivating demo video
    const activateDemoBtn = document.getElementById("activateDemoBtn");
    const deactivateDemoBtn = document.getElementById("deactivateDemoBtn");
    const demoVideo = document.getElementById("demoVideo");

    activateDemoBtn.onclick = activateDemo;
    deactivateDemoBtn.onclick = deactivateDemo;

    function activateDemo() {
        // document.getElementsByClassName("extensionWindowDiv")[0].style.height = "500px";
        demoVideo.hidden = false;
        activateDemoBtn.hidden = true;
        deactivateDemoBtn.hidden = false;
    }
    
    function deactivateDemo() {
        // document.getElementsByClassName("extensionWindowDiv")[0].style.height = "350px";
        demoVideo.pause();
        demoVideo.hidden = true;
        activateDemoBtn.hidden = false;
        deactivateDemoBtn.hidden = true;
    }
}