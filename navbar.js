document.addEventListener("DOMContentLoaded", function () {

  fetch("navbar.html")
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      document.getElementById("navbar").innerHTML = html;

      // Hamburger logic (AFTER navbar loads)
      const hamburger = document.querySelector(".hamburger");
      const mobileMenu = document.querySelector(".mobile-menu");
      const closeBtn = document.querySelector(".close");

      if (hamburger && mobileMenu && closeBtn) {
        hamburger.addEventListener("click", function () {
          mobileMenu.style.right = "0";
        });

        closeBtn.addEventListener("click", function () {
          mobileMenu.style.right = "-100%";
        });
      }
    })
    .catch(function (error) {
      console.error("Navbar not loaded:", error);
    });

});
