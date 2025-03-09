// Variables
let faqs = document.querySelectorAll(".jsFaqPara");
let expandFaqs = document.querySelectorAll(".fa-plus");

// Toggles FAQ answer visibility, x icon and after pseudo color on plus icon click
expandFaqs.forEach((expander) => {
  expander.addEventListener("click", () => {
    expander.previousElementSibling.classList.toggle("question-active");
    expander.parentElement.classList.toggle("question-active-after");
    expander.classList.toggle("fa-plus");
    expander.classList.toggle("fa-x");
  });
});
