// ==UserScript==
// @name         GoToWrike
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Jeżeli w tytule MRa znajduje się [wrike*] to skrypt utworzy link do zadania w wriku i doda go na początku tytułu MRa.
// @author       Atath
// @match        https://nsgitlab.nomasolutions.pl/nomasolutions/*/merge_requests/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const titleEl = document.querySelector('h2.title');
    const rx = /\[wrike.*\]/g;
    const wrikeTitle = rx.exec(titleEl.innerText);
    if(wrikeTitle && wrikeTitle[0]) {
       const wrikeId = wrikeTitle[0].match(/\d+/g);
       const a = document.createElement('a');
       a.href = 'https://www.wrike.com/open.htm?id=' + wrikeId;
       a.target = '_blank';
       const img = document.createElement('img');
       img.src = 'https://www.wrike.com/avatars/reminderbot.png';
       img.style.marginTop = "-3px";
       img.style.width = "35px";
       a.appendChild(img);
       titleEl.prepend(a);
   }
})();