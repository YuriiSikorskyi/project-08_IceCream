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

  const backdrop = document.querySelector('.js-overlay-modal');
  const header = document.querySelector('.header');
  const headerBtnBuy = document.querySelector('.header__btn');
  const modals = Array.from(document.getElementsByClassName('modal'));
  const menuMobile = document.querySelector('[data-mobile-menu]');

  observeObject.init('.js-overlay-modal', () => {
    const mobileIsOpenned = !menuMobile.classList.contains(
      'mobile-menu--hidden'
    );
    const modalIsOpenned =
      backdrop.classList.contains('active') || mobileIsOpenned;
    const headerIsShaded = header.classList.contains('header--shaded');

    // toggle Buy now anim
    headerBtnBuy.style.animation = modalIsOpenned ? 'unset' : null;

    // lock body scroll and hide header
    toggleScroll(modalIsOpenned);
    header.style.display = headerIsShaded && modalIsOpenned ? 'none' : null;

    // fix top for active modal
    if (modalIsOpenned) {
      const viewportHeight = document.documentElement.clientHeight;

      modals.forEach(modal => {
        modal.style.top = null;
        modal.style.transform = null;

        // .modal.active found
        if (modal.classList.contains('active')) {
          const modalPos = modal.getBoundingClientRect();

          if (viewportHeight <= modalPos.height) {
            modal.style.top = 0;
            modal.style.transform = 'translate(-50%, 0)';
          }
        }
      });
    }
  });
})();
