document.addEventListener('DOMContentLoaded', function() {
  const menuHamburger = document.querySelector(".menu-hamburger");
  const navLinks = document.querySelector(".nav-links");
  const menuBtn = document.getElementById("menuBtn");

  menuHamburger.addEventListener('click', () => {
    if (navLinks.classList.contains('mobile-menu')) {
      navLinks.classList.remove('mobile-menu');
      menuBtn.src = "photos/menu-btn.png";
    } else {
      navLinks.classList.add('mobile-menu');
      menuBtn.src = "photos/croix.png";
    }
  });
});
