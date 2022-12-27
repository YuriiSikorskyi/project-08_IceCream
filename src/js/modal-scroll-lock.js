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
  const headerBtnBuyNow = document.querySelector('.header__btn');
  const modals = Array.from(document.getElementsByClassName('modal'));
  const menuMobile = document.querySelector('[data-mobile-menu]');

  observeObject.init('.js-overlay-modal', () => {
    const mobileIsOpenned = !menuMobile.classList.contains(
      'mobile-menu--hidden'
    );
    const modalIsOpenned =
      backdrop.classList.contains('active') || mobileIsOpenned;
    const headerIsShaded = header.classList.contains('header--shaded');
    //
    // toggle Buy now anim
    //
    headerBtnBuyNow.style.animation = modalIsOpenned ? 'unset' : null;
    //
    // body scroll lock
    //
    toggleScroll(modalIsOpenned);
    header.style.display = headerIsShaded && modalIsOpenned ? 'none' : null;
    //
    // fix top for modal
    //
    if (modalIsOpenned) {
      const viewportHeight = document.documentElement.clientHeight;

      let pos, modalHeight;
      modals.forEach(modal => {
        //
        modal.style.top = null;
        modal.style.transform = null;
        //
        // .modal.active found
        if (modal.classList.contains('active')) {
          pos = modal.getBoundingClientRect();
          modalHeight = pos.height;

          if (viewportHeight <= modalHeight) {
            modal.style.top = 0;
            modal.style.transform = 'translate(-50%, 0)';
          }
        }
      });
    }
  });
})();

// const isHidden = el => {
//   const styles = window.getComputedStyle(el);
//   return (
//     styles.display === 'none' ||
//     styles.visibility === 'hidden' ||
//     styles.opacity === '0'
//   );
// };
