const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuCloseBtn = document.querySelector(".mobile-nav-close");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("is-active");
    mobileMenuBtn.setAttribute("aria-expanded", "true")
});

mobileMenuCloseBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("is-active");
    mobileMenuBtn.setAttribute("aria-expanded", "false")
});