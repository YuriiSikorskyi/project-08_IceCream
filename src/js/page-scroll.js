(() => {
  const backtop = document.querySelector('[data-backtop]');

  // header
  const header = document.querySelector('[data-header]');
  const headerYOffset = header.offsetHeight;

  // hero
  const hero = document.querySelector('#hero');
  const heroYOffset = hero.offsetHeight;

  // products
  const prods = document.querySelector('#products');
  const prodsYOffset = products.offsetHeight;

  window.onscroll = () => {
    const pageYOffset = window.pageYOffset;

    // shade header on scroll
    if (pageYOffset > headerYOffset) {
      header.classList.add('header--shaded');
    } else {
      header.classList.remove('header--shaded');
    }

    // show backtop on scroll
    backtop.style.display =
      pageYOffset > heroYOffset + prodsYOffset / 2 ? null : 'none';
  };
})();
