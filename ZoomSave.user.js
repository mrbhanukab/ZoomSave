// ==UserScript==
// @name         Zoom™ Save 3
// @namespace    https://mrbhanukab.github.io/ZoomSave/
// @version      3.0
// @description  Download Zoom™ Recordings Quickly 🔥
// @author       Bhanuka Bandara
// @homepage     https://mrbhanukab.github.io
// @icon         https://github.com/mrbhanukab/ZoomSave/blob/main/assets/logo512.png?raw=true
// @supportURL   https://github.com/mrbhanukab/ZoomSave
// @match        https://*.zoom.us/rec*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Check if the current URL has "component-page" after "/rec/" and exit if it does
    if (/\/rec\/component-page/.test(window.location.href)) {
        return;
    }

    console.log("Zoom™ Save userscript is running!");

    function modifyPage() {
        let spanElement = document.querySelector('h1[data-v-f8df28cc][data-v-c5781866].r-title span[data-v-f8df28cc].extra');
        let videoElement = document.getElementById('vjs_video_3_html5_api');
        let fileNameSpan = document.querySelector('h1[data-v-f8df28cc][data-v-c5781866].r-title span[data-v-f8df28cc].topic');
        let fileName = fileNameSpan ? fileNameSpan.textContent.trim().replace(/ /g, '_') + '.mp4' : "download.mp4";

        if (spanElement && videoElement) {
            let src = videoElement.getAttribute('src');
            if (src) {
                // Create an anchor (link)
                let a = document.createElement('a');
                a.href = src;
                a.download = fileName;  // Sets the download filename
                a.textContent = "(Click Here To Download)";
                a.style.cursor = "pointer";
                a.style.textDecoration = "underline";
                a.style.color = "blue";
                a.style.marginLeft = "10px";  // Add 10 pixels of space to the left of the link

                // Replace the span with the anchor element
                spanElement.parentNode.replaceChild(a, spanElement);
                return true; // Return true if modification is successful
            } else {
                alert("Zoom™ Save Error: Video URL not found!");
            }
        } else {
            console.log("Zoom™ Save userscript couldn't find the required elements!");
            alert("Zoom™ Save Error: Required elements not found on the page!");
        }
        return false; // Return false if elements not found or modification unsuccessful
    }

    // Set a periodic check every 2 seconds (2000 milliseconds)
    let checkInterval = setInterval(function() {
        if (modifyPage()) {
            clearInterval(checkInterval); // Stop the interval once we've successfully modified the page
        }
    }, 2000);

})();
