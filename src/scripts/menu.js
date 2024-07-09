console.log("menu.js loaded");
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("expanded");
});

// Set active class on nav when the page is active

const nav = document.querySelector(".nav-links");
const navLinks = nav.querySelectorAll("a");
const currentURL = window.location.href;
navLinks.forEach((link) => {
  if (link.href === currentURL) {
    link.classList.add("active");
    link
      .closest("aside")
      .parentElement.querySelector(".drop-icon")
      .classList.add("active");
  }
});
