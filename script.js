const loader = () => {document.getElementById('loadscreen').style.display = 'none';}
const closeHamburger = () => {document.getElementById('burger-toggle').checked = false;}

var i = 0;
var txt = "The name's Janine. Full-stack developer. Here's some of my work.";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener('load', typeWriter);
