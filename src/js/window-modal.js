let btnChat = document.querySelectorAll('.button--chat');
let btnCall = document.querySelectorAll('.button--call ');
let btnClose = document.querySelectorAll('.button__close--window');
let btnBackground = document.querySelector('.background-window');
let openMobile = document.querySelector('.body__mobile-menu');
let openBody= document.querySelector('.page');
let openFeedback= document.querySelector('.feedback');
let openCallback= document.querySelector('.callback');

let body = document.querySelector('.body');

for (let i = 0; i < btnChat.length; i++){
btnChat[i].addEventListener('click', function (){
  openFeedback.classList.add('window-open'); 
  btnBackground.style.display = 'block';
  openMobile.classList.remove('body__mobile-menu-open'); 
  
  body.classList.add('modal-open');

})  
}

for (let i = 0; i < btnCall.length; i++){
btnCall[i].addEventListener('click', function (){
  openCallback.classList.add('window-open'); 
  btnBackground.style.display = 'block';
  openMobile.classList.remove('body__mobile-menu-open');  

  body.classList.add('modal-open');

})  
}

for (let i = 0; i < btnCall.length; i++){
  btnClose[i].addEventListener('click', function (){
    openFeedback.classList.remove('window-open');
    openCallback.classList.remove('window-open');
    btnBackground.style.display = 'none';
    openBody.style.display = 'block';

    body.classList.remove('modal-open');

  })  
}

btnBackground.addEventListener('click', function (){
  openFeedback.classList.remove('window-open');
  openCallback.classList.remove('window-open');
  btnBackground.style.display = 'none';
  openBody.style.display = 'block';

  body.classList.remove('modal-open');
  
});