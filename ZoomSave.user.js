// ==UserScript==
// @name         Zoom™ Save
// @namespace    https://mrbhanukab.github.io/ZoomSave/
// @version      1.5
// @description  Download Zoom™ Recordings Quickly 🔥
// @author       Bhanuka Bandara
// @homepage     https://mrbhanukab.github.io
// @icon         https://github.com/mrbhanukab/ZoomSave/blob/main/logo512.png?raw=true
// @supportURL   https://github.com/mrbhanukab/ZoomSave
// @match      https://*.zoom.us/*
// ==/UserScript==

(function() {
    'use strict';
    // when the page has loaded
    window.addEventListener("load", function () {
        // search for the video element
        const Vurl = document.getElementById("vjs_video_3_html5_api").src;
        // if the element exists
        if (Vurl) {
            console.log(Vurl);
            var firstMatch = document.getElementsByClassName('r-header')[0];
            var zoomSaveDiv = document.createElement('div');
            zoomSaveDiv.setAttribute('id', "ZoomSave");
            firstMatch.appendChild(zoomSaveDiv);

            var zoomH = document.createElement("H1");
            var h1 = document.createTextNode("ZoomSave V1.5");
            zoomH.appendChild(h1);
            document.getElementById("ZoomSave").appendChild(zoomH);

            //Create Zoom Paragraph
            var zoomP = document.createElement('p');
            var text = document.createTextNode("Note :- This video is the property of the owner of the video, and the owner reserves the right to take legal action against its unauthorised use, including unauthorised access and distribution. ZoomSave takes no responsibility for such illegal activities");
            zoomP.setAttribute('id', "ZoomSaveP");
            zoomP.appendChild(text);
            document.getElementById("ZoomSave").appendChild(zoomP);

            //Enable Contex Menu
            function enableContextMenu(aggressive = true) {
                void(document.ondragstart=null);
                void(document.onselectstart=null);
                void(document.onclick=null);
                void(document.onmousedown=null);
                void(document.onmouseup=null);
                void(document.body.oncontextmenu=null);
                enableRightClickLight(document);
                if (aggressive){
                    enableRightClick(document);
                    removeContextMenuOnAll('body');
                    removeContextMenuOnAll('img');
                    removeContextMenuOnAll('td'); }
            }
            function removeContextMenuOnAll(tagName) {
                var elements = document.getElementsByTagName(tagName);
                for (var i = 0; i < elements.length; i++) {
                    enableRightClick(elements[i]);
                    enablePointerEvents(elements[i]);
                }
            }
            function enableRightClickLight(el) {
                el || (el = document);
                el.addEventListener('contextmenu', bringBackDefault, true);
            }
            function enableRightClick(el) {
                el || (el = document);
                el.addEventListener('contextmenu', bringBackDefault, true);
                el.addEventListener('dragstart', bringBackDefault, true);
                el.addEventListener('selectstart', bringBackDefault, true);
                el.addEventListener('click', bringBackDefault, true);
                el.addEventListener('mousedown', bringBackDefault, true);
                el.addEventListener('mouseup', bringBackDefault, true);
            }
            function restoreRightClick(el) {
                el || (el = document); el.removeEventListener('contextmenu', bringBackDefault, true);
                el.removeEventListener('dragstart', bringBackDefault, true);
                el.removeEventListener('selectstart', bringBackDefault, true);
                el.removeEventListener('click', bringBackDefault, true);
                el.removeEventListener('mousedown', bringBackDefault, true);
                el.removeEventListener('mouseup', bringBackDefault, true);
            }
            function bringBackDefault(event) {
                event.returnValue = true;
                (typeof event.stopPropagation === 'function') && event.stopPropagation();
                (typeof event.cancelBubble === 'function') && event.cancelBubble();
            }
            function enablePointerEvents(el) {
                if (!el) return; el.style.pointerEvents='auto';
                el.style.webkitTouchCallout='default';
                el.style.webkitUserSelect='auto';
                el.style.MozUserSelect='auto';
                el.style.msUserSelect='auto';
                el.style.userSelect='auto';
                enablePointerEvents(el.parentElement);
            }
            enableContextMenu();

            //Create line Breake
            var brake = document.createElement('br');
            document.getElementById("ZoomSaveP").appendChild(brake);
            document.getElementById("ZoomSaveP").appendChild(brake);

            //Create Zoom Paragraph
            var zoomH2 = document.createElement('h1');
            var h2T = document.createTextNode("Absolute mode is enabled. Right-click on the video and click 'Save as' and download the video.");
            zoomP.appendChild(h2T);
            document.getElementById("ZoomSave").appendChild(zoomH2);
        }
    }, false)})();
