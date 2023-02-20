const body = document.querySelector("body");
const buttonMenu = document.getElementById("button-menu");
const nav = document.getElementById("nav");
const listLinks = document.querySelector(".list-links");
const links = document.querySelectorAll(".link");

buttonMenu.addEventListener("click", () => {
  body.classList.toggle("body--hidden");
  buttonMenu.children[0].classList.toggle("img-close");
  nav.classList.toggle("nav--open");
  listLinks.classList.toggle("list-links--open");
  links.forEach((li) => {
    li.classList.toggle("link--open");
  });
  links[0].classList.replace("link--open", "link--button-close");
});
