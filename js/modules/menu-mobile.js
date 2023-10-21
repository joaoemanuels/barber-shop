export default function initMenuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");

  menuButton.addEventListener('click', toggleMenu);

  const menuLinks = menuList.querySelectorAll('a li');
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  function toggleMenu() {
    menuList.classList.toggle('active');
    menuButton.classList.toggle('active');
  }

  function closeMenu() {
    menuList.classList.remove('active');
    menuButton.classList.remove('active');
  }

}