(() => {
  var targetSelector = '.js-overlay-modal';
  //
  var observeObject = (function () {
    var _class = {
      init: function (selector, callback) {
        var element = document.querySelector(selector);

        try {
          var observer = new MutationObserver(function (mutations) {
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

  (function () {
    observeObject.init(targetSelector, function (targetNode, name, oldValue) {
      var overlay = document.querySelector(targetSelector);
      toggleScroll(overlay.classList.contains('active'));
    });
  })();
})();
