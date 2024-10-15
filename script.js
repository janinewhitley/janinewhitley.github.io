const loader = () => {document.getElementById('loadscreen').style.display = 'none';}
const closeHamburger = () => {document.getElementById('burger-toggle').checked = false;}

var typed = new Typed('#element', {
    strings: [
        'UI/UX Design.', 
        'Software Engineering.', 
        'AI/Machine Learning.', 
        'Blockchain/Web3.', 
        '3D Modeling.',
        'Music Production.', 
        'Video Editing.', 
        'Film Photography.', 
        'DeFi/Crypto.', 
        'Kayaking/Sailing.', 
        'Sim Racing.'
    ],
    typeSpeed: 50,
  });
  

  var text = document.getElementById('text');
  var writing = document.getElementsByClassName('shadow');

  for (var i = 0; i < writing.length; i++) {

    writing[i].addEventListener("input", function() {
      this.setAttribute("data-text", this.innerText);
    });

  }
