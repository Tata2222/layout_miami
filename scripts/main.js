'use strict'

(function() {
  onload = function() {
    document.getElementById('burger').onclick = function() {
      toggleClass('burger');
    };
  };
  function toggleClass(elem) {
    const burger = document.getElementById('burger');
    const nav = document.getElementById("nav")
    if(burger.className === 'header__burger active') {
      burger.className = 'header__burger';
      nav.className = 'nav header__nav';
    } else {
      burger.className = 'header__burger active';
      nav.className = 'nav header__nav active';
    };
  }
})();

