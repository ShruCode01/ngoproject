document.addEventListener("click", function (e) {

  const mobileMenu = document.querySelector(".mobile-menu");
  const dropdowns = document.querySelectorAll(".mobile-dropdown");

  // OPEN MENU
  if (e.target.closest(".hamburger")) {
    mobileMenu.classList.add("active");
  }

  // CLOSE MENU + RESET DROPDOWNS
  if (e.target.closest(".close-menu")) {
    mobileMenu.classList.remove("active");
    dropdowns.forEach(d => d.classList.remove("active"));
  }

  // TOGGLE DROPDOWN ONLY ON ARROW
  if (e.target.classList.contains("toggle-arrow")) {
    e.target.closest(".mobile-dropdown").classList.toggle("active");
  }

});
