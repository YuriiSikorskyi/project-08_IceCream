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
  const headerBtnBuyNow = document.querySelector('.header__btn');
  const modals = Array.from(document.getElementsByClassName('modal'));

  // const isHidden = el => {
  //   const styles = window.getComputedStyle(el);
  //   return (
  //     styles.display === 'none' ||
  //     styles.visibility === 'hidden' ||
  //     styles.opacity === '0'
  //   );
  // };

  observeObject.init(targetSelector, () => {
    const modalIsOpen = overlay.classList.contains(targetState);
    const headerIsShaded = header.classList.contains('header--shaded');
    //
    // toggle Buy now anim
    //
    headerBtnBuyNow.style.animation = modalIsOpen ? 'unset' : null;
    //
    // body scroll lock
    //
    toggleScroll(modalIsOpen);
    header.style.display = headerIsShaded && modalIsOpen ? 'none' : null;
    //
    // fix top for modal
    //
    if (modalIsOpen) {
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
