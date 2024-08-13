const menus = document.querySelector("nav ul");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    menus.classList.toggle("display");
});

closeBtn.addEventListener("click", () => {
    menus.classList.remove("display");
});