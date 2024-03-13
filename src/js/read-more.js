const articleText = document.querySelector('.article__text');
const readMoreBtn = document.querySelector('.buttonRead');

readMoreBtn.onclick = function () {
  articleText.classList.toggle('article__text--all'); 
  readMoreBtn.style.display = 'none';
}

function handleResize() {
  if (window.innerWidth > 768) {
    articleText.classList.remove('article__text--all');
    readMoreBtn.style.display = 'block';
  } 
}

window.addEventListener('resize', handleResize);

handleResize();