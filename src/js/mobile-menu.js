(() => {
  const scrollOn = () => toggleScroll(false);

  const menuHiddenSelector = 'mobile-menu--hidden';
  const menu = document.querySelector('[data-mobile-menu]');
  const menuNav = document.querySelector('[data-menu-nav]');
  const menuBtnOpen = document.querySelector('[data-menu-open]');
  const menuBtnClode = document.querySelector('[data-menu-close]');

  // set event listeners
  menuBtnOpen.addEventListener('click', toggleMenu);
  menuBtnClode.addEventListener('click', toggleMenu);

  // close menu on item click
  const menuItems = Array.from(menuNav.children);
  menuItems.forEach(itm => {
    itm.addEventListener('click', toggleMenu);
  });

  // hide menu on desktop(1200px and wider)
  window.matchMedia(`(min-width: 1200px)`).addEventListener('change', e => {
    // toggle scroll for mobile menu only
    if (e.matches && !menu.classList.contains(menuHiddenSelector)) {
      menu.classList.add(menuHiddenSelector);
      menuBtnOpen.setAttribute('aria-expanded', false);
      scrollOn();
    }
  });

  // mobile menu toggler
  function toggleMenu() {
    const isOpenned = !menu.classList.toggle(menuHiddenSelector);
    menuBtnOpen.setAttribute('aria-expanded', isOpenned);
    toggleScroll(isOpenned);
  }
})();
