const loader = () => {document.getElementById('loadscreen').style.display = 'none';}
const closeHamburger = () => {document.getElementById('burger-toggle').checked = false;}

 var options = {
          strings: [
        'UI/UX Design.', 
        'Computer Science.', 
        'Network Engineering.', 
        'Cloud Architecture.', 
        'Cybersecurity.',
    ],
      typeSpeed: 40,
      loop: true
    }
var typed = new Typed("#element", options);
  

  var text = document.getElementById('text');
  var writing = document.getElementsByClassName('shadow');

  for (var i = 0; i < writing.length; i++) {

    writing[i].addEventListener("input", function() {
      this.setAttribute("data-text", this.innerText);
    });

  }
