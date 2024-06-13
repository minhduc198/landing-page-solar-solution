class Menu {
  constructor() {
    const header = document.querySelector(".header");
    this.body = document.querySelector("body");
    this.header = header;
    this.hamburgerMenu = header.querySelector(".hamburger-menu");
    this.menuList = header.querySelector(".menu-list");
    this.menuOverlay = header.querySelector(".menu-overlay");
  }

  openMenu() {
    this.hamburgerMenu.addEventListener("click", () => {
      this.hamburgerMenu.classList.toggle("hamburger-active");
      this.menuList.classList.toggle("menu-list-active");
      this.menuOverlay.classList.toggle("menu-overlay-active");
      this.body.classList.toggle("body-fixed");
    });
  }

  closeMenu() {
    this.menuOverlay.addEventListener("click", () => {
      this.menuList.classList.remove("menu-list-active");
      this.hamburgerMenu.classList.remove("hamburger-active");
      this.menuOverlay.classList.remove("menu-overlay-active");
      this.body.classList.remove("body-fixed");
    });
  }
}

const menu = new Menu();
export default menu;
