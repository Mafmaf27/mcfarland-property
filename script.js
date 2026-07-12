
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const comparison = document.querySelector("[data-comparison]");
if (comparison) {
  const range = comparison.querySelector(".comparison-range");
  const before = comparison.querySelector("[data-before]");
  const handle = comparison.querySelector("[data-handle]");

  const updateComparison = () => {
    const value = range.value;
    before.style.width = `${value}%`;
    handle.style.left = `${value}%`;
  };

  range.addEventListener("input", updateComparison);
  updateComparison();
}

const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach(item => observer.observe(item));

const quoteForm = document.querySelector(".quote-form");
quoteForm?.addEventListener("submit", event => {
  if (quoteForm.action.includes("YOUR_FORM_ID")) {
    event.preventDefault();
    alert("The quote form still needs your Formspree form ID. Follow the README instructions before accepting enquiries.");
  }
});
