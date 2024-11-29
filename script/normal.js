const navCheck = document.getElementById("nav-toggle");
const animatedEvent = document.getElementById("navBack");
const animatedWrap = document.getElementById("wrapper");
const hamMid = document.getElementsByClassName("ham");

const links = document.getElementsByClassName("navigation__link");
const menu = document.getElementById('enlist');

const keyOne = document.getElementById("keyOne");
const keyTwo = document.getElementById("keyTwo");



keyOne.style.display = "none";
keyTwo.style.display = "none";
 
setTimeout(() => {
  keyOne.style.display = "block";
  keyTwo.style.display = "block";
}, 1000);


navCheck.addEventListener('change', function() {
    if (this.checked) {
      animatedEvent.classList.add('menuanimatedX');
      animatedEvent.classList.remove('reverseanimatedX');
      animatedWrap.classList.add("menuanimatedY")
      animatedWrap.classList.remove("reverseanimatedY");
      hamMid[0].style.display = "none";
      

      setTimeout(function() {
        menu.style.visibility = 'visible';
        menu.style.opacity = '1';
        menu.style.transition = 'opacity 600ms ease-in-out';
        links[0].style.display = "block";
      }, 2500);
    } 
    else {
      animatedEvent.classList.remove('menuanimatedX');
      animatedEvent.classList.add('reverseanimatedX');
      animatedWrap.classList.add("reverseanimatedY")
      animatedWrap.classList.remove("menuanimatedY");
      hamMid[0].style.display = "block";
      

      setTimeout(function() {
        menu.style.visibility = 'none';
        menu.style.opacity = '0';
        menu.style.transition = 'opacity 10ms ease-in-out';
        links[0].style.display = "none";
      }, 100);
    };
  });
