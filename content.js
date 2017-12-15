// content.js
var input = document.getElementById("lst-ib");
input.oninput = function(){
  input.value
  "use strict";
  var div = document.createElement("DIV");
  div.style.backgroundImage = "url(https://raw.githubusercontent.com/UnsignedByte/NewTab-Chrome-Extension/master/letters/"+input.value.charCodeAt(input.value.length-1)+".png)";
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
