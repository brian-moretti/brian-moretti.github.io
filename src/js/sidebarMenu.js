//! CREARE SIDEBAR CON JS

const btnMenu = document.getElementById("showMenu");
const menu = document.querySelector("menu");

function hamburger() {
  btnMenu.classList.toggle("open");
  menu.classList.toggle("responsive");
}

btnMenu.addEventListener("click", hamburger);

let links = document.querySelectorAll("nav a");

for (let link of links) {
  link.addEventListener("click", () => {
    menu.classList.remove("responsive");
    btnMenu.classList.remove("open");
  });
}

export { menu };
