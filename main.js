const menuEmail = document.querySelector('.navbar-email');
const deskTopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', togleDeskTopMenu);

function togleDeskTopMenu() {
  deskTopMenu.classList.toggle('inactive');
}