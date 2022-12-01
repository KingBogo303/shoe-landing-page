const menu = document.querySelector("#menu");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

window.onscroll = () => {
  navbar.classList.remove("open"), scrollY > 0;
  menu.classList.remove("bx-x");
};
