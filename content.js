// content.js
var input = document.getElementById("lst-ib");
var css = 'span::selection{background: none;}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

head.appendChild(style);
console.log(css);
input.oninput = function(){
  "use strict";
  var div = document.createElement("DIV");
  div.style.backgroundImage = "url(https://raw.githubusercontent.com/UnsignedByte/NewTab-Chrome-Extension/master/Happi%20Banana.png)";
  div.style.width = "100px";
	div.style.height = "200px";
	div.style.backgroundSize = "contain";
	div.style.backgroundRepeat = "no-repeat";
	div.style.position = "fixed";
	div.style.top = Math.random() * 100 + "%";
	div.style.left = Math.random() * 100 + "%";
	div.style.transform = "translate(-50%, -50%) rotate(" + Math.random() * 360 + "deg)";
	div.style.zIndex = "1";
	document.body.appendChild(div);
}
