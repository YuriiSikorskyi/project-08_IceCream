(() => {
  const observeObject = (function () {
    const _class = {
      init: function (selector, callback) {
        const element = document.querySelector(selector);

        try {
          const observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
              callback(
                mutation.target,
                mutation.attributeName,
                mutation.oldValue
              );
            });
          });

          observer.observe(element, {
            attributes: true,
            subtree: true,
            attributeOldValue: true,
          });
        } catch (z) {
          element.addEventListener(
            'DOMAttrModified',
            function (e) {
              callback(e.target, e.attrName, e.prevValue);
            },
            false
          );
        }
      },
    };

    return _class;
  })();

  const targetSelector = '.js-overlay-modal';
  const targetState = 'active';

  const overlay = document.querySelector(targetSelector);
  const header = document.querySelector('.header');

  observeObject.init(targetSelector, () => {
    const modalIsOpen = overlay.classList.contains(targetState);
    const headerIsShaded = header.classList.contains('header--shaded');

    toggleScroll(modalIsOpen);
    header.style.display = headerIsShaded && modalIsOpen ? 'none' : null;
  });
})();
