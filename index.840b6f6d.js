!function(){var e;(()=>{const e="scroll-off",t=document.querySelector("body"),o=document.documentElement;function n(e){return o.style.getPropertyValue(e)}window.toggleScroll?console.warn("window.toggleScroll already defined"):window.toggleScroll=function(c){var a,r;c?(a="--scroll-top",r=window.pageYOffset,o.style.setProperty(a,r),t.classList.add(e)):(t.classList.remove(e),o.style.scrollBehavior="auto",window.scrollTo({top:n("--scroll-top")}),o.style.removeProperty("scroll-behavior"))}})(),"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active")}))})),o.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))}));new Swiper(".swiper",{direction:"horizontal",loop:!0,speed:2e3,easing:"ease",infinite:!0,autoplay:!0,autoplaySpeed:3e3,pauseOnFocus:!0,pauseOnHover:!0,pauseOnDotsHover:!0,swipe:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});(()=>{const e="mobile-menu--hidden",t=document.querySelector("[data-menu-open]"),o=document.querySelector("[data-menu-close]"),n=document.querySelector("[data-mobile-menu]"),c=document.querySelector("[data-menu-nav]");t.addEventListener("click",a),o.addEventListener("click",a);function a(){const o=!n.classList.toggle(e);t.setAttribute("aria-expanded",o),toggleScroll(o)}Array.from(c.children).forEach((e=>{e.addEventListener("click",a)})),window.matchMedia("(min-width: 1200px)").addEventListener("change",(o=>{o.matches&&!n.classList.contains(e)&&(n.classList.add(e),t.setAttribute("aria-expanded",!1),toggleScroll(false))}))})(),window.onscroll=()=>{const e=document.querySelector("[data-header]"),t=e.offsetHeight;window.pageYOffset>t?e.classList.add("header--shaded"):e.classList.remove("header--shaded")},(()=>{const e=function(){const e={init:function(e,t){const o=document.querySelector(e);try{new MutationObserver((function(e){e.forEach((function(e){t(e.target,e.attributeName,e.oldValue)}))})).observe(o,{attributes:!0,subtree:!0,attributeOldValue:!0})}catch(e){o.addEventListener("DOMAttrModified",(function(e){t(e.target,e.attrName,e.prevValue)}),!1)}}};return e}(),t=".js-overlay-modal",o=document.querySelector(t),n=document.querySelector(".header");e.init(t,(()=>{const e=o.classList.contains("active");toggleScroll(e),n.style.display=e?"none":"block"}))})()}();
//# sourceMappingURL=index.840b6f6d.js.map
