const wrapper = document.getElementById("cardWrapper");
const cards = wrapper.querySelectorAll(".team-card");
let currentIndex = 0;

// Auto-scroll function (desktop only)
function autoScrollDesktop() {
    if(window.innerWidth > 1024) { // desktop screen
        currentIndex++;
        if(currentIndex >= cards.length) currentIndex = 0;
        wrapper.scrollTo({
            left: cards[currentIndex].offsetLeft - wrapper.offsetLeft,
            behavior: 'smooth'
        });
    }
}

// Scroll every 3 seconds
setInterval(autoScrollDesktop, 3000);





// -------------Accordian----------------


document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
      const parent = header.parentElement;

      document.querySelectorAll(".accordion").forEach(item => {
        item.classList.remove("active");
        item.querySelector("span").innerText = "+";
      });

      parent.classList.toggle("active");
      parent.querySelector("span").innerText = "-";
    });
  });