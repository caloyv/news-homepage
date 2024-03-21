const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const gray = document.querySelector(".bg-gray");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  gray.classList.add("active");
  document.body.style.overflowY = "hidden"
});

closeBtn.addEventListener("click", () => {
  removeEffects();
});

gray.addEventListener("click", () => {
  removeEffects();
});

function removeEffects() {
  mobileMenu.classList.remove("active");
  gray.classList.remove("active");
  document.body.style.overflowY = "auto"
}
