// =====================Header responsive script==================
const navSlide = () => {
  const burger = document.querySelector(".menu");
  const nav = document.querySelector(".links");
  const navLinks = document.querySelectorAll(".links li");

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    // Burger Animation
    burger.classList.toggle("toggle");
  });
 
};



navSlide();

// =========================================
//============================Home changed Text====================
const changingText = document.querySelector(".changing-text");
const textOptions = ["Full stack developer", "front-end developer", "programmer"];
let currentIndex = 0;

function changeText() {
  changingText.textContent = textOptions[currentIndex];
  currentIndex = (currentIndex + 1) % textOptions.length;
}

setInterval(changeText, 3000); // Change text every 3 seconds

//==========================================================


 