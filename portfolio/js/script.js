/* Sticky navbar shadow */
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});

/* Reveal animation */
const sections = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  sections.forEach(section => {
    if (section.getBoundingClientRect().top < windowHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* Typing animation */
const text = "Beginner Web Developer";
let index = 0;
const typingEl = document.getElementById("typing");

function typeEffect() {
  if (index < text.length) {
    typingEl.textContent += text.charAt(index++);
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

/* Dark mode toggle */
const toggle = document.getElementById("darkToggle");
const body = document.body;

if (localStorage.getItem("darkMode") === "on") {
  body.classList.add("dark");
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem(
    "darkMode",
    body.classList.contains("dark") ? "on" : "off"
  );
});

/* Contact form (frontend only) */
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent! (Demo)");
  e.target.reset();
});
