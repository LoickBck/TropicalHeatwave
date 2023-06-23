document.addEventListener('DOMContentLoaded', function() {
  const menuHamburger = document.querySelector(".menu-hamburger");
  const navLinks = document.querySelector(".nav-links");
  const menuBtn = document.getElementById("menuBtn");
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  menuHamburger.addEventListener('click', () => {
    if (navLinks.classList.contains('mobile-menu')) {
      navLinks.classList.remove('mobile-menu');
      menuBtn.src = "photos/menu-btn.png";
    } else {
      navLinks.classList.add('mobile-menu');
      menuBtn.src = "photos/croix.png";
    }
  });

  // Fonction pour réinitialiser la position de la barre de navigation et fermer le menu hamburger
  function resetNavPosition() {
    var nav = document.querySelector('nav');
    nav.style.position = 'absolute';
    nav.style.top = '0';
    nav.style.left = '0';
    navLinks.classList.remove('mobile-menu');
    menuBtn.src = "photos/menu-btn.png";
  }

  // Fonction pour faire défiler jusqu'en haut de la page
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  // Écouteur d'événement pour le scroll
  window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Sélectionnez tous les liens de navigation
  var navLinksList = document.querySelectorAll('.nav-links a');
  // Ajoutez un gestionnaire d'événements à chaque lien de navigation
  navLinksList.forEach(function(navLink) {
    navLink.addEventListener('click', resetNavPosition);
  });

  // Ajoutez un gestionnaire d'événement au bouton de défilement vers le haut
  scrollToTopBtn.addEventListener('click', scrollToTop);
});
