import "$styles/index.css";
import "$styles/syntax-highlighting.css";

// Import all JavaScript & CSS files from src/_components
import components from "$components/**/*.{js,jsx,js.rb,css}";

console.info("Bridgetown is loaded!");

// Nav bar - toggle nav bar burger
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});

// Bulma Carousel: https://bulma-carousel.onrender.com/
// Initialize all carousels

bulmaCarousel.attach("#slider", {
  slidesToScroll: 1,
  slidesToShow: 1,
  autoplay: true,
  loop: true,
  autoplaySpeed: 4000,
  duration: 1000,
  pagination: false,
  infinite: true,
});
