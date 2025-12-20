
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".close");

  hamburger.addEventListener("click", () => {
    mobileMenu.style.right = "0";
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.style.right = "-100%";
  });
