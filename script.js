const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const quoteForm = document.querySelector(".quote-form");
quoteForm?.addEventListener("submit", (event) => {
  if (quoteForm.action.includes("YOUR_FORM_ID")) {
    event.preventDefault();
    alert("The website is ready, but the quote form still needs your free Formspree form ID. Follow the README instructions before publishing.");
  }
});
