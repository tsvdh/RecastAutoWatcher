// ==UserScript==
// @name         Recast auto watcher
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically keeps watching ads for you
// @author       Tobias van den Hurk
// @match        https://watch.recast.tv/watch-and-earn
// @icon         https://www.google.com/s2/favicons?sz=64&domain=recast.tv
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("Hello world!");

    window.setInterval(() => {
        console.log("pressing buttons")

        let click = new MouseEvent("click", {bubbles: true});

        document.getElementsByClassName("adPlayerPlaceholder__bottomLayout__buttons")[0]
            ?.firstChild.dispatchEvent(click);

        document.getElementsByClassName("adPlayer__playButton")[0]
            ?.dispatchEvent(click)
    }, 1000);
}) ();
