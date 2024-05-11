// ==UserScript==
// @name        Discord 2019
// @description Uses the older 2019 Discord layout for older Mozilla based browsers
// @namespace   https://discord.com/
// @version     1.0
// @grant       none
// @match       https://discord.com/*
// ==/UserScript==
let script = document.createElement('script');
let script2 = document.createElement('script');
let script3 = document.createElement('script');
 script.src = "https://discord.com/assets/d7c70c292a77dd025eba.js"
script2.src = "https://discord.com/assets/9d3ff64602b4f78a60d8.js"
script3.src = "https://discord.com/assets/bb94134c7a50eb6067c2.js"
document.body.appendChild(script);
document.body.appendChild(script2);
document.body.appendChild(script3);
var cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "https://discord.com/assets/0.acc5d19163086a0c4b13.css";
cssLink.integrity = "";
document.head.appendChild(cssLink);