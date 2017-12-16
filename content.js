// content.js
var input = document.getElementById("lst-ib");
var randDeg = Math.random()*2*Math.PI;
var isDel = false;
var oldX = [],oldY = [];
oldX.push(Math.random() * 90 + 5);
oldY.push(Math.random() * 90 + 5);
var size = {
  width: window.innerWidth || document.body.clientWidth,
  height: window.innerHeight || document.body.clientHeight
}
var img = {
  width: 30, height: 55
}
var sizemult = Math.sqrt(Math.pow(img.width,2)+Math.pow(img.height,2));

input.oninput = function(){
  if(!isDel){
    var div = document.createElement("DIV");
    div.style.backgroundImage = "url(https://raw.githubusercontent.com/UnsignedByte/NewTab-Chrome-Extension/master/letters/"+input.value.charCodeAt(input.value.length-1)+".png)";
    div.className = "LETTER_____ClASS";
    div.style.width = img.width+"px";
  	div.style.height = img.height+"px";
  	div.style.backgroundSize = "contain";
  	div.style.backgroundRepeat = "no-repeat";
  	div.style.position = "fixed";
  	div.style.top = (oldY[oldY.length-1]-100*img.width/size.width) + "%";
  	div.style.left = (oldX[oldX.length-1]-100*img.height/size.width) + "%";
  	div.style.zIndex = "1";
  	document.body.appendChild(div);
    randDeg+=(Math.random()-0.5)*Math.PI/2;
    var newX = oldX[oldX.length-1]+100*sizemult*Math.cos(randDeg)/size.width;
    var newY = oldY[oldY.length-1]+100*sizemult*Math.sin(randDeg)/size.height;
    if ( newX>95 ){
      newX -= 90;
    }else if(newX<5) {
      newX = 90-newX;
    }
    if ( newY>95 ){
      newY -= 90;
    }else if(newY<5) {
      newY = 90-newY;
    }
    oldX.push(newX);
    oldY.push(newY);
  }
}

input.onkeydown = function(evt) {
    evt = evt || window.event;
    var keyCode = evt.keyCode;
    var deleteKey = (keyCode == 46), backspaceKey = (keyCode == 8);
    var sel, deletedText, val;
    if (deleteKey || backspaceKey) {
        val = this.value;
        sel = window.getSelection().toString();
        if (sel.length) {
            deletedText = val.slice(sel.start, sel.end);
        } else {
            deletedText = val.charAt(deleteKey ? sel.start : sel.start - 1);
        }
        for (var i = 0; i<deletedText.length; i++){
          var toDelete = document.getElementsByClassName("LETTER_____ClASS");
          document.body.removeChild(toDelete[toDelete.length-1]);
          var T_ = oldX.pop();
          var T_ = oldY.pop();
        }
    }
    isDel = deleteKey || backspaceKey;
};
