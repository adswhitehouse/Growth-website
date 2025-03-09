// Variables
let faqs = document.querySelectorAll(".jsFaqPara");
let expandFaqs = document.querySelectorAll(".fa-plus");
let filterBtns = document.querySelectorAll(".jsFilterBtn");
let menuBtn = document.querySelector(".jsMenuBtn");
let headerUl = document.querySelector(".jsHeaderUl");
let header = document.querySelector("header");
let heroImg = document.querySelector(".jsHeroImg");

// Toggles FAQ answer visibility, x icon and after pseudo color on plus icon click
expandFaqs.forEach((expander) => {
  expander.addEventListener("click", () => {
    expander.previousElementSibling.classList.toggle("question-active");
    expander.parentElement.classList.toggle("question-active-after");
    expander.classList.toggle("fa-plus");
    expander.classList.toggle("fa-x");
  });
});

// When an FAQ button is clicked the active state is applied and removed from all other buttons
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((btn) => {
      btn.classList.remove("filter-btn-active");
    });
    btn.classList.add("filter-btn-active");
  });
});

// Toggles nav visibility on menu button click
menuBtn.addEventListener("click", () => {
  headerUl.classList.toggle("show-nav");
});

// If browser is resized while small screen nav is open the nav resets to default large screen styling
window.addEventListener("resize", () => {
  if (window.innerWidth > 820 && headerUl.classList.contains("show-nav")) {
    headerUl.classList.remove("show-nav");
  }
});

// If webpage is clicked while nav is open the nav closes
document.addEventListener("click", (e) => {
  if (!header.contains(e.target) && headerUl.classList.contains("show-nav")) {
    headerUl.classList.remove("show-nav");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 820) {
    heroImg.src = "images/hero-bg-mobile.png.png";
  } else {
    heroImg.src = "images/hero-bg.png";
  }
});
