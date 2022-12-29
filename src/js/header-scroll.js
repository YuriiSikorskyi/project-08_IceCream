(() => {
  window.onscroll = () => {
    const header = document.querySelector('[data-header]');
    const headerYOffset = header.offsetHeight;
    const pageYOffset = window.pageYOffset;

    // shade header on scroll
    if (pageYOffset > headerYOffset) {
      header.classList.add('header--shaded');
    } else {
      header.classList.remove('header--shaded');
    }
  };
})();
