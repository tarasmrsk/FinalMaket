!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15),n(16),n(17),n(18),n(19),n(20),n(21),n(22);console.log("Works!")},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){window.addEventListener("DOMContentLoaded",(function(){var e=function(e,t,n){var o;e=window.matchMedia(e);var i=function(){return e.matches?void(o=new Swiper(t,n)):void(void 0!==o&&o.destroy(!0,!0))};e.addEventListener("change",i),i()};[{selector:".slider-1",options:{slidesPerView:"auto",loop:!0,pagination:{el:".swiper-pagination"}}},{selector:".slider-2",options:{slidesPerView:"auto",loop:!0,pagination:{el:".swiper-pagination"}}},{selector:".slider-3",options:{slidesPerView:"auto",loop:!0,pagination:{el:".swiper-pagination"}}}].forEach((function(t){e("(max-width: 768px)",t.selector,t.options)}))}))},function(e,t){var n=document.querySelector(".slider-1"),o=document.querySelector(".slider-2"),i=document.querySelector(".buttonBrands"),c=document.querySelector(".buttonEquipment");i.onclick=function(){n.classList.toggle("click-mode"),i.classList.toggle("close-button"),"Показать все"==i.textContent?i.textContent="Скрыть":i.textContent="Показать все"},c.onclick=function(){o.classList.toggle("click-mode"),c.classList.toggle("close-button"),"Показать все"==c.textContent?c.textContent="Скрыть":c.textContent="Показать все"}},function(e,t){var n=document.querySelector(".button--menu"),o=document.querySelector(".button--back"),i=document.querySelector(".body__mobile-menu"),c=document.querySelector(".background-window"),l=document.querySelector(".page"),r=document.querySelector(".body");n.addEventListener("click",(function(){i.classList.add("body__mobile-menu-open"),r.classList.add("modal-open"),c.style.display="block"})),o.addEventListener("click",(function(){i.classList.remove("body__mobile-menu-open"),r.classList.remove("modal-open"),c.style.display="none",l.style.display="block"})),c.addEventListener("click",(function(){i.classList.remove("body__mobile-menu-open"),r.classList.remove("modal-open"),burgerActive.style.display="none",l.style.display="block"}))},function(e,t){for(var n=document.querySelectorAll(".button--chat"),o=document.querySelectorAll(".button--call "),i=document.querySelectorAll(".button__close--window"),c=document.querySelector(".background-window"),l=document.querySelector(".body__mobile-menu"),r=document.querySelector(".page"),s=document.querySelector(".feedback"),u=document.querySelector(".callback"),a=document.querySelector(".body"),d=0;d<n.length;d++)n[d].addEventListener("click",(function(){s.classList.add("window-open"),c.style.display="block",l.classList.remove("body__mobile-menu-open"),a.classList.add("modal-open")}));for(var f=0;f<o.length;f++)o[f].addEventListener("click",(function(){u.classList.add("window-open"),c.style.display="block",l.classList.remove("body__mobile-menu-open"),a.classList.add("modal-open")}));for(var m=0;m<o.length;m++)i[m].addEventListener("click",(function(){s.classList.remove("window-open"),u.classList.remove("window-open"),c.style.display="none",r.style.display="block",a.classList.remove("modal-open")}));c.addEventListener("click",(function(){s.classList.remove("window-open"),u.classList.remove("window-open"),c.style.display="none",r.style.display="block",a.classList.remove("modal-open")}))},function(e,t){var n=document.querySelectorAll(".link__menu"),o=document.querySelectorAll(".nav__link");n.forEach((function(e){e.addEventListener("click",(function(){n.forEach((function(e){e.classList.remove("link__menu--active")})),e.classList.add("link__menu--active")}))})),o.forEach((function(e){e.addEventListener("click",(function(){o.forEach((function(e){e.classList.remove("nav__link--active")})),e.classList.add("nav__link--active")}))})),n[0].classList.add("link__menu--active"),o[0].classList.add("nav__link--active")},function(e,t){var n=document.querySelector(".article__text"),o=document.querySelector(".buttonRead");function i(){window.innerWidth>768&&(n.classList.remove("article__text--all"),o.style.display="block")}o.onclick=function(){n.classList.toggle("article__text--all"),o.style.display="none"},window.addEventListener("resize",i),i()}]);
//# sourceMappingURL=bundle.js.map