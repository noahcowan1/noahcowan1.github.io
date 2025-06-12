(function() {
  'use strict';

  // Toggle mobile menu
  var toggle = document.getElementById('toggle-main-menu-mobile');
  var menu = document.getElementById('main-menu-mobile');
  var body = document.body;

  if (toggle && menu) {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      this.classList.toggle('is-active');
      menu.classList.toggle('open');
      body.classList.toggle('lock-scroll');
    });
  }
})(); 