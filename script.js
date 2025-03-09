// Variables
let faqs = document.querySelectorAll(".jsFaqPara");
let expandFaqs = document.querySelectorAll(".fa-plus");
let filterBtns = document.querySelectorAll(".jsFilterBtn");

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
