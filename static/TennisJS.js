var i=0;
var text = "this is a typewritwe effect Demo!";
console.log(text)
var speed= 50

function typing() {
    if(i<text.length){
        document.getElementById("description").innerHTML += text.charAt(i)
        i++;
        setTimeout(() => {
            typing();
 
        }, speed);
    }
}

var i = 0;
var txt = 'To better health and mind';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("description").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}