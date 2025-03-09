// Variables
let faqs = document.querySelectorAll(".jsFaqPara")
let expandFaqs = document.querySelectorAll(".fa-plus")

expandFaqs.forEach((expander) => {
  expander.addEventListener("click", () => {
    expander.previousElementSibling.classList.toggle("question-active")
  })
})