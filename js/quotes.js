const bookImgClosed = document.querySelector('.lifeQuotes-txt > img.closed')
const bookImgOpen = document.querySelector('.lifeQuotes-txt > img.open')
const quote = document.querySelector('.lifeQuotes-txt > h4');
const randomBtn = document.querySelector('.lifeQuotes-btn');
let todayQuote;

function showQuote(){
  todayQuote = quotes[Math.floor(Math.random()*quotes.length)];
  quote.innerHTML = todayQuote.quote;
  bookImgClosed.classList.add('hidden');
  bookImgOpen.classList.remove('hidden');
}

randomBtn.addEventListener("click", showQuote);
