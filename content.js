// content.js
try{
  isImg = document.getElementsByClassName("hdtb-mitem hdtb-msel hdtb-imb")[0].innerHTML=="Images";
}catch (e){
  isImg = false;
}
if ( window.location.hostname == "www.google.com" && !isImg){
  var input = document.getElementById("lst-ib");
}else if( window.location.hostname == "stackoverflow.com" ){
  var input = document.getElementsByClassName("f-input js-search-field")[0];
}else if( window.location.hostname == "github.com" ){
  var input = document.getElementsByClassName("form-control header-search-input js-site-search-focus js-site-search-field is-clearable")[0] || document.getElementsByClassName("form-control header-search-input js-site-search-focus  ")[0];
}else{
  var input = null;
}
var isDel = false;
var oldX = [],oldY = [], oldDeg = [];
oldX.push(Math.random() * 90 + 5);
oldY.push(Math.random() * 90 + 5);
oldDeg.push(Math.random()*Math.PI/4);
var size = {
  width: window.innerWidth || document.body.clientWidth,
  height: window.innerHeight || document.body.clientHeight
}
var img = {
  width: 30/2, height: 55/2
}
var sizemult = Math.sqrt(Math.pow(img.width,2)+Math.pow(img.height,2));

addText();

input.oninput = function(){
  var toDelete = document.getElementsByClassName("LETTER_____ClASS");
  while (toDelete[0]) {
    document.body.removeChild(toDelete[0]);
  }
  addText();
}

function isASCII(i) {
    return /^[\x00-\x7F]*$/.test(input.value.charAt(i));
}

function addText(){
  while(input.value.length+1>=oldX.length){
    var randDeg = oldDeg[input.value.length]+(Math.random()-0.5)*Math.PI/4;
    var newX = oldX[oldX.length-1]+100*sizemult*Math.cos(randDeg)/size.width;
    var newY = oldY[oldY.length-1]+100*sizemult*Math.sin(randDeg)/size.height;
    if ( newX>95 ){
      newX -= 90;
    }else if(newX<5) {
      newX +=90;
    }
    if ( newY>95 ){
      newY -= 90;
    }else if(newY<5) {
      newY +=90;
    }
    oldX.push(newX);
    oldY.push(newY);
    oldDeg.push(randDeg);
  }
  for(var i = 0; i<input.value.length; i++){
    var div = document.createElement("DIV");
    var request = new XMLHttpRequest();
    if(isASCII(i)){
      div.style.backgroundImage = "url(https://raw.githubusercontent.com/UnsignedByte/NewTab-Chrome-Extension/master/letters/"+input.value.charCodeAt(i)+".png)";
    }else{
      div.style.backgroundImage = "url(https://raw.githubusercontent.com/UnsignedByte/NewTab-Chrome-Extension/master/letters/13.png)"
    }
    div.className = "LETTER_____ClASS";
    div.style.width = img.width+"px";
    div.style.height = img.height+"px";
    div.style.backgroundSize = "contain";
    div.style.backgroundRepeat = "no-repeat";
    div.style.position = "fixed";
    div.style.top = oldY[i] + "%";
    div.style.left = oldX[i] + "%";
    div.style.transform = "translate(-50%, -50%) rotate(" + oldDeg[i+1]/Math.PI/2*360 + "deg)";
    div.style.zIndex = "1";
    document.body.appendChild(div);
  }
}
