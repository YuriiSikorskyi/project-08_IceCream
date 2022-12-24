(() => {
  window.onscroll = () => {
    // const classMenuHidden = 'mobile-menu--hidden';
    // const menuMobile = document.querySelector('[data-mobile-menu]');
    const header = document.querySelector('[data-header]');
    const headerOffsetTrigger = header.offsetHeight;
    const pageOffset = window.pageYOffset;
    //
    if (pageOffset > headerOffsetTrigger) {
      header.classList.add('header--shaded');
    } else {
      header.classList.remove('header--shaded');
    }
  };
})();
