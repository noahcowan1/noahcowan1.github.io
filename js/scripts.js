!function() {
  "use strict";
  
  const hamburger = document.getElementById("toggle-main-menu-mobile");
  const mobileMenu = document.getElementById("main-menu-mobile");
  const closeButton = document.getElementById("close-main-menu-mobile");
  const body = document.body;

  if (hamburger && mobileMenu) {
    // Toggle menu when clicking hamburger
    hamburger.addEventListener("click", function(e) {
      e.preventDefault();
      this.classList.toggle("is-active");
      mobileMenu.classList.toggle("open");
      body.classList.toggle("lock-scroll");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function(e) {
      if (mobileMenu.classList.contains("open") && 
          !mobileMenu.contains(e.target) && 
          !hamburger.contains(e.target)) {
        hamburger.classList.remove("is-active");
        mobileMenu.classList.remove("open");
        body.classList.remove("lock-scroll");
      }
    });

    // Close menu when clicking the close button
    if (closeButton) {
      closeButton.addEventListener("click", function(e) {
        e.preventDefault();
        hamburger.classList.remove("is-active");
        mobileMenu.classList.remove("open");
        body.classList.remove("lock-scroll");
      });
    }

    // Close menu when clicking a menu item
    const menuItems = mobileMenu.getElementsByTagName("a");
    Array.from(menuItems).forEach(item => {
      item.addEventListener("click", function() {
        hamburger.classList.remove("is-active");
        mobileMenu.classList.remove("open");
        body.classList.remove("lock-scroll");
      });
    });
  }
}(); 