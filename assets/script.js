const { default: Typed } = require("typed.js");

function redirLinkedIn() {
  window.open('https://www.linkedin.com/in/alvin-zulfanur-bachtiar-2032a7222/');
}
function redirGithub() {
  window.open('https://github.com/AlvinZulfanur');
}
function redirTwitter() {
  window.open('https://twitter.com/tauninisidang');
}
function redirInstagram() {
  window.open('https://www.instagram.com/alzlzxz/');
}

const UNU = document.getElementById('redirectUNU')

UNU.style.textDecoration = "Underline"

const typed = select('.element')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.element', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }
