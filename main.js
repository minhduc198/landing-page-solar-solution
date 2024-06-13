const header = document.querySelector(".header");
const headerMenu = header.querySelector(".menu-header");
const menuIcon = header.querySelector(".hamburger-menu");

menuIcon.addEventListener("click", () => {
  headerMenu.classList.toggle("active");
});
