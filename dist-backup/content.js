// Wait for page to load to run script
window.onload = init;


function init() {
    // Managing the activated state
    var activated;

    chrome.storage.local.get((result) => {
        activated = result.activated;
        run();  // Run the extension after the activated state is initially retrieved
    });

    function run() {
        // Listener to detect when activated state has been changed by popup
        chrome.runtime.onMessage.addListener(() => {
            activated = !activated;   // If the popup changed the state, it must be flipped
            
            // Close any displays
            display.classList.remove("fadeIn");
            display.classList.add("fadeOut");
        });

        const revertIcon = chrome.runtime.getURL('revert.png');

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

        // Creating the tooltip to display pinyin on highlight
        const display = document.createElement("div");
        display.innerHTML = `
            <div id="revertBtnContainer" class="displayBtnContainer">
                <button id="revertBtn" class="displayBtn fadeOut">
                    <img class="displayIcon" src=${revertIcon} alt="Open Popup Icon" />
                </button>
            </div>
            <div id="displayText"></div>
            <div id="tooltipArrowContainer">
                <div id="tooltipArrow"></div>
            </div>
        `;
        display.hidden = true;      // Initially hidden
        display.setAttribute("class", "display tooltip");   // Initially set as tooltip mode
        container.insertBefore(display, container.firstChild);
        const revertBtn = document.getElementById("revertBtn");
        const tooltipArrowContainer = document.getElementById("tooltipArrowContainer"); // Container is necessary to prevent translateX(-50%) of the tooltipArrow from taking effect when adding fadeOut class

        // Injecting css for extension window
        var cssElement = document.createElement("link");
        cssElement.setAttribute("rel", "stylesheet");
        cssElement.setAttribute("href", chrome.runtime.getURL("extensionWindow.css"));
        document.querySelector("html").appendChild(cssElement);

        // Making display element draggable:
        dragElement(display);

        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

            // Move the DIV from anywhere inside the DIV:
            elmnt.onmousedown = dragMouseDown;

            function dragMouseDown(e) {
                // Initial transition to popup mode
                if (display.classList.contains("tooltip")) {
                    // Popup mode
                    display.classList.remove("tooltip");
                    display.classList.add("popup");
                    
                    // Take away the scroll offsets from the positioning since the position is now fixed
                    display.style.left = `${parseFloat(display.style.left) - window.scrollX}px`;
                    display.style.top = `${parseFloat(display.style.top) - window.scrollY}px`;
                    revertBtn.classList.remove("fadeOut");
                    revertBtn.classList.add("fadeIn");
                    tooltipArrowContainer.classList.add("fadeOut");
                }

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

        // Variables for the positioning of the display
        var selection, revertLeft, revertTop;

        function revert() {
            // Fade out and in
            display.classList.remove("fadeIn");
            display.classList.add("fadeOut");

            setTimeout(() => {
                // Change to tooltip mode (this has to be after the animation since the position gets changed to absoulte)
                display.classList.remove("popup");
                display.classList.add("tooltip");
                tooltipArrowContainer.classList.remove("fadeOut");

                display.style.left = revertLeft;
                display.style.top = revertTop;
                display.classList.remove("fadeOut");
                display.classList.add("fadeIn");
                revertBtn.classList.remove("fadeIn");
                revertBtn.classList.add("fadeOut");
            }, 300);
        }

        revertBtn.onclick = revert;

        function displayPinyin() {
            if (selection.isCollapsed) {
                // Close display when nothing is selected
                display.classList.remove("fadeIn");
                display.classList.add("fadeOut");
            }
            else {
                // Display the transliteration on the display
                document.getElementById("displayText").innerHTML = transliteratedPinyin;

                // Reveal display if there is transliteratedPinyin
                if (transliteratedPinyin.trim()) {
                    display.hidden = false;     // Reveal display from initial hidden state
                    display.classList.remove("fadeOut");
                    display.classList.add("fadeIn");
        
                    const rect = selection.getRangeAt(0).getBoundingClientRect();
        
                    // Adjustments for scrolled amount, since clientWidth and clientHeight is relative to viewport
                    const scrollLeft = window.scrollX;
                    const scrollTop = window.scrollY;
        
                    revertLeft = `${rect.left + rect.width / 2 - display.clientWidth / 2 + scrollLeft}px`;
                    revertTop = `${rect.top - display.clientHeight - 10 + scrollTop}px`;
        
                    // Set update the position of the display if it is in tooltip mode
                    if (display.classList.contains("tooltip")) {
                        display.style.left = revertLeft;
                        display.style.top = revertTop;
                    }
                }
            }
        }

        // Assigning a function reference to the receiveText variable
        receiveText = (eventObj) => {
            // Only run if extension is activated
            if (activated) {
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
        }

        // Execute receiveText when the selected text is changed
        document.addEventListener("selectionchange", receiveText);


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
}