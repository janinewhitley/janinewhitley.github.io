document.querySelectorAll('#menu li a').forEach(function(a) {
    a.addEventListener('click', function() {
      document.querySelector('#burger-toggle').checked = false;
    });
  });
const loader = () => document.getElementById('loadscreen').style.display = 'none';
  
