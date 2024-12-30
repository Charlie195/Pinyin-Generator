// Wait for page to load to run script
window.onload = init;

function init() {
    const openPopupIcon = chrome.runtime.getURL('openPopup.png');
    const openTooltipIcon = chrome.runtime.getURL('openTooltip.png')

    // Setting sessionStorage for activated/deactivated state to default if uninitialized
    if (sessionStorage.getItem("extension state") == null) {
        sessionStorage.setItem("extension state", "activated")
    }
    
    // Container of html
    const container = document.querySelector("html");

    // Global variable to store the function reference
    var receiveText;

    // String to store transliterated pinyin
    var transliteratedPinyin = "";

    // Creating the popup to display pinyin on highlight
    const popup = document.createElement("div");
    popup.innerHTML = `
        <button id="openTooltipBtn" class="displayBtn">
            <img id="openTooltipIcon" class="displayIcon" src=${openTooltipIcon} alt="Open Tooltip Icon" />
        </button>
        <div id="popupText">Hello</div>
    `;
    popup.setAttribute("id", "popup");
    container.insertBefore(popup, container.firstChild);
    popup.hidden = true;    // Initially hidden
    const openTooltipBtn = document.getElementById("openTooltipBtn");

    // Creating the tooltip to display pinyin on highlight
    const tooltip = document.createElement("div");
    tooltip.innerHTML = `
        <button id="openPopupBtn" class="displayBtn">
            <img id="openPopupIcon" class="displayIcon" src=${openPopupIcon} alt="Open Popup Icon" />
        </button>
        <div id="tooltipText">Hello</div>
    `;
    tooltip.setAttribute("id", "tooltip");
    container.insertBefore(tooltip, container.firstChild);
    tooltip.hidden = true;  // Initially hidden
    const openPopupBtn = document.getElementById("openPopupBtn");

    // Injecting css for extension window
    var cssElement = document.createElement("link");
    cssElement.setAttribute("rel", "stylesheet");
    cssElement.setAttribute("href", "extensionWindow.css");
    document.querySelector("html").appendChild(cssElement);

    // Making display element draggable:
    dragElement(document.getElementById("popup"));

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        // Move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;

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
    function openPopup() {
        popup.hidden = false;
        tooltip.hidden = true;
        display = popup;
    }

    function openTooltip() {
        popup.hidden = true;
        tooltip.hidden = false;
        tooltip.style.left = `${parseFloat(tooltip.style.left) - tooltip.clientWidth / 2}px`;
        tooltip.style.top = `${parseFloat(tooltip.style.top) - tooltip.clientHeight}px`;
        display = tooltip;
    }

    openPopupBtn.onclick = openPopup;
    openTooltipBtn.onclick = openTooltip;

    var selection;

    function displayPinyin() {
        // Reveal the display element
        display.hidden = false;

        if (selection.isCollapsed) {
            // Close display when nothing is selected
            display.hidden = true;
            return;
        }
        else {
            // Display the transliteration on the display
            document.getElementById("popupText").innerHTML = transliteratedPinyin;
            document.getElementById("tooltipText").innerHTML = transliteratedPinyin;

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
}