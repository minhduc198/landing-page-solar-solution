class Menu {
  constructor() {
    const header = document.querySelector(".header");
    this.body = document.querySelector("body");
    this.header = header;
    this.hamburgerMenu = header.querySelector(".hamburger-menu");
    this.menuList = header.querySelector(".menu-list");
  }

  openMenu() {
    this.hamburgerMenu.addEventListener("click", () => {
      this.hamburgerMenu.classList.toggle("hamburger-active");
      this.menuList.classList.toggle("menu-list-active");
      this.header.classList.toggle("header-active");
    });
  }

  openSubMenu({ menuItem, subMenu, menuActiveClass }) {
    let myTimeout = null;
    let clientWidth = document.documentElement.clientWidth;
    const btnBacks = document.querySelectorAll(".btn-back");

    if (clientWidth > 576) {
      menuItem.addEventListener("click", () => {
        subMenu.classList.add(menuActiveClass);
      });

      menuItem.addEventListener("mouseover", () => {
        subMenu.classList.add(menuActiveClass);
      });

      menuItem.addEventListener("mouseleave", () => {
        myTimeout = setTimeout(() => {
          subMenu.classList.remove(menuActiveClass);
        }, 300);
      });

      subMenu.addEventListener("mouseover", () => {
        subMenu.classList.add(menuActiveClass);
        clearTimeout(myTimeout);
      });

      subMenu.addEventListener("mouseleave", () => {
        subMenu.classList.remove(menuActiveClass);
      });
    }

    if (clientWidth <= 576) {
      const listIconOpen = document.querySelectorAll(".open-submenu-icon");

      const listIconClose = document.querySelectorAll(".close-submenu-icon");
      const itemContents = document.querySelectorAll(".content ul");

      menuItem.addEventListener("click", () => {
        subMenu.classList.add(menuActiveClass);

        this.hamburgerMenu.addEventListener("click", () => {
          subMenu.classList.remove(menuActiveClass);
        });
      });

      btnBacks.forEach((btnBack) => {
        btnBack.addEventListener("click", () => {
          subMenu.classList.remove(menuActiveClass);
        });
      });

      listIconOpen.forEach((item, index) => {
        item.addEventListener("click", () => {
          itemContents[index].classList.add("ul-active");
          listIconClose[index].style.display = "block";
          item.style.display = "none";
        });
      });

      listIconClose.forEach((item, index) => {
        item.addEventListener("click", () => {
          itemContents[index].classList.remove("ul-active");
          listIconOpen[index].style.display = "block";
          item.style.display = "none";
        });
      });
    }
  }

  handleOpenSubMenu() {
    const menuItems = this.menuList.querySelectorAll(".menu-item");

    menuItems.forEach((menuItem) => {
      const id = menuItem.dataset.id;

      if (id) {
        const menuActiveClass = `${id}-submenu-active`;
        const subMenu = document.querySelector(`.${id}-submenu`);
        this.openSubMenu({ menuItem, subMenu, menuActiveClass });
      }
    });
  }
}

const menu = new Menu();
export default menu;
