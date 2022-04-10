const hamburguer = document.querySelector('.hamburger');
const menu = document.querySelector('.nav_links_container');

hamburguer.addEventListener('click', function openMenu() {
  this.classList.toggle('is-active');
  menu.classList.toggle('show');
});

menu.addEventListener('click', function closeMenu() {
  this.classList.toggle('show');
  hamburguer.classList.toggle('is-active');
});