import { pinyin, customPinyin } from "pinyin-pro";

// Wait for page to load to run script
if (document.readyState === "loading") {
    // The DOM is still loading; wait for the event
    document.addEventListener("DOMContentLoaded", init);
} else {
    // The DOM is ready now, so run immediately
    init();
}

function init() {
    // Managing the activated state
    var activated;

    chrome.storage.local.get((result) => {
        activated = result.activated;
        run();  // Run the extension after the activated state is initially retrieved
    });

    function run() {
        // Defining custom pinyin
        customPinyin({
            嗯: 'ēn',
        });

        // Listener to detect when activated state has been changed by popup
        chrome.runtime.onMessage.addListener(() => {
            activated = !activated;   // If the popup changed the state, it must be flipped
            
            // Close any displays
            display.classList.remove("pinyinGenerator-fadeIn");
            display.classList.add("pinyinGenerator-fadeOut");
        });

        const revertIcon = chrome.runtime.getURL('revert.png');

        // Setting sessionStorage for activated/deactivated state to default if uninitialized
        if (sessionStorage.getItem("extension state") == null) {
            sessionStorage.setItem("extension state", "activated")
        }

        // String to store transliterated pinyin
        var transliteratedPinyin = "";

        // Creating the tooltip to display pinyin on highlight
        const display = document.createElement("div");
        display.innerHTML = `
            <div id="pinyinGenerator-revertBtnContainer" class="pinyinGenerator-displayBtnContainer">
                <button id="pinyinGenerator-revertBtn" class="pinyinGenerator-displayBtn pinyinGenerator-fadeOut">
                    <img class="pinyinGenerator-displayIcon" src=${revertIcon} alt="Open Popup Icon" />
                </button>
            </div>
            <div id="pinyinGenerator-displayText"></div>
            <div id="pinyinGenerator-tooltipArrowContainer">
                <div id="pinyinGenerator-tooltipArrow"></div>
            </div>
        `;
        display.setAttribute("class", "pinyinGenerator-display pinyinGenerator-tooltip");   // Initially set as tooltip mode
        document.body.append(display)   // Append the display to DOM
        const revertBtn = document.getElementById("pinyinGenerator-revertBtn");
        const tooltipArrowContainer = document.getElementById("pinyinGenerator-tooltipArrowContainer"); // Container is necessary to prevent translateX(-50%) of the tooltipArrow from taking effect when adding fadeOut class

        display.hidden = true;      // Initially hidden
        
        // Injecting css for extension window
        var cssElement = document.createElement("link");
        cssElement.setAttribute("rel", "stylesheet");
        cssElement.setAttribute("href", "extensionWindow.css");
        document.querySelector("html").appendChild(cssElement);

        // Making display element draggable:
        dragElement(display);

        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

            // Move the DIV from anywhere inside the DIV:
            elmnt.onmousedown = dragMouseDown;

            function dragMouseDown(e) {
                // Initial transition to popup mode
                if (display.classList.contains("pinyinGenerator-tooltip")) {
                    // Popup mode
                    display.classList.remove("pinyinGenerator-tooltip");
                    display.classList.add("pinyinGenerator-popup");
                    
                    // Take away the scroll offsets from the positioning since the position is now fixed
                    display.style.left = `${parseFloat(display.style.left) - window.scrollX}px`;
                    display.style.top = `${parseFloat(display.style.top) - window.scrollY}px`;
                    revertBtn.classList.remove("pinyinGenerator-fadeOut");
                    revertBtn.classList.add("pinyinGenerator-fadeIn");
                    tooltipArrowContainer.classList.add("pinyinGenerator-fadeOut");
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
            display.classList.remove("pinyinGenerator-fadeIn");
            display.classList.add("pinyinGenerator-fadeOut");

            setTimeout(() => {
                // Change to tooltip mode (this has to be after the animation since the position gets changed to absoulte)
                display.classList.remove("pinyinGenerator-popup");
                display.classList.add("pinyinGenerator-tooltip");
                tooltipArrowContainer.classList.remove("pinyinGenerator-fadeOut");

                display.style.left = revertLeft;
                display.style.top = revertTop;
                display.classList.remove("pinyinGenerator-fadeOut");
                display.classList.add("pinyinGenerator-fadeIn");
                revertBtn.classList.remove("pinyinGenerator-fadeIn");
                revertBtn.classList.add("pinyinGenerator-fadeOut");
            }, 300);
        }

        revertBtn.onclick = revert;

        function displayPinyin() {
            if (selection.isCollapsed) {
                // Close display when nothing is selected
                display.classList.remove("pinyinGenerator-fadeIn");
                display.classList.add("pinyinGenerator-fadeOut");
            }
            else {
                // Display the transliteration on the display
                document.getElementById("pinyinGenerator-displayText").innerHTML = transliteratedPinyin;

                // Reveal display if there is transliteratedPinyin
                if (transliteratedPinyin.trim()) {
                    display.hidden = false;     // Reveal display from initial hidden state
                    display.classList.remove("pinyinGenerator-fadeOut");
                    display.classList.add("pinyinGenerator-fadeIn");
        
                    const rect = selection.getRangeAt(0).getBoundingClientRect();
        
                    // Adjustments for scrolled amount, since clientWidth and clientHeight is relative to viewport
                    const scrollLeft = window.scrollX;
                    const scrollTop = window.scrollY;
        
                    revertLeft = `${rect.left + rect.width / 2 - display.clientWidth / 2 + scrollLeft}px`;
                    revertTop = `${rect.top - display.clientHeight - 10 + scrollTop}px`;
        
                    // Set update the position of the display if it is in tooltip mode
                    if (display.classList.contains("pinyinGenerator-tooltip")) {
                        display.style.left = revertLeft;
                        display.style.top = revertTop;
                    }
                }
            }
        }

        // Assigning a function reference to the receiveText variable
        transliterate = (eventObj) => {
            // Only run if extension is activated
            if (activated) {
                selection = window.getSelection();
                // Getting highlighted text before possible DOM modifications that would unhighlight the text
                var selectedText = selection.toString();
    
                transliteratedPinyin = pinyin(selectedText, { nonZh: "consecutive" })

                displayPinyin();
            }
        }

        // Execute receiveText when the selected text is changed
        document.addEventListener("selectionchange", transliterate);
    }
}