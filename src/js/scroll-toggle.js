(() => {
  const scrollOffSelector = 'scroll-off';
  const body = document.querySelector('body');
  const root = document.documentElement;

  if (!window.toggleScroll) {
    window.toggleScroll = function (disable) {
      if (disable) {
        // save scroll offsetY
        root.style.setProperty('--scroll-top', window.pageYOffset);
        body.classList.add(scrollOffSelector);
      } else {
        body.classList.remove(scrollOffSelector);

        // prevent scrolling
        root.style.scrollBehavior = 'auto';
        // restore scroll offsetY
        window.scrollTo({ top: root.style.getPropertyValue('--scroll-top') });
        root.style.removeProperty('scroll-behavior');
      }
    };
  } else {
    console.warn('window.toggleScroll already defined');
  }
})();
