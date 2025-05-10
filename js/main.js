const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav ul li a");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle-burger");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("nav-active");
    burger.classList.remove("toggle-burger");
  });
});

window.onbeforeunload = ()  => {
  for ( const form of document.getElementsByTagName("form") ) {
    form.reset();
  }
}

const burgerBtn = document.getElementById('burger-btn');
const navbarMenu = document.getElementById('example-navbar-danger');

burgerBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('hidden');
});

