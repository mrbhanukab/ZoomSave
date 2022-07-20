// ==UserScript==
// @name         Zoom™ Save
// @namespace    https://mrbhanukab.github.io/ZoomSave/
// @version      1.0
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
            var h1 = document.createTextNode("ZoomSave V1.0");
            zoomH.appendChild(h1);
            document.getElementById("ZoomSave").appendChild(zoomH);

            //Create Zoom Paragraph
            var zoomP = document.createElement('p');
            var text = document.createTextNode("Note :- This video is the property of the owner of the video, and the owner reserves the right to take legal action against its unauthorised use, including unauthorised access and distribution. ZoomSave takes no responsibility for such illegal activities");
            zoomP.appendChild(text);
            document.getElementById("ZoomSave").appendChild(zoomP);

            //Make Zoom Downloadable
            var h2 = document.createElement('h2');
            var LinkText = document.createTextNode("👉 Right Click on Video Element and click 'Save As' ");
            h2.appendChild(LinkText);
            h2.setAttribute('href', Vurl);
            document.getElementById("ZoomSave").appendChild(Link);
        }
    }, false)  })();
