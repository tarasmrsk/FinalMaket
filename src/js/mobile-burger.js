let openBurger = document.querySelector('.button--menu');
let closeBurger = document.querySelector('.button--back');
let mobileMenu = document.querySelector('.body__mobile-menu');
let backgroundWindow = document.querySelector('.background-window');
let page = document.querySelector('.page');
let body = document.querySelector('.body');



openBurger.addEventListener('click', function (){
  mobileMenu.classList.add('body__mobile-menu-open');  
  body.classList.add('modal-open');
  backgroundWindow.style.display = 'block';
});

closeBurger.addEventListener('click', function (){
  mobileMenu.classList.remove('body__mobile-menu-open');
  body.classList.remove('modal-open');
  backgroundWindow.style.display = 'none';
  page.style.display = 'block';

});

backgroundWindow.addEventListener('click', function(){
  mobileMenu.classList.remove('body__mobile-menu-open');
  body.classList.remove('modal-open');
  burgerActive.style.display = 'none';
  page.style.display = 'block';
});