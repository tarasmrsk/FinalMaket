let btnRead = document.querySelector('.buttonRead');
let openRead= document.querySelector('.article__text');

btnRead.onclick = function () {
  openRead.classList.toggle('article__text--all'); 
}