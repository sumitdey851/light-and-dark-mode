// Button Elements
const btnGetSource = document.getElementById('get-source');
const btnQuoteGenerator = document.getElementById('quote-generator');
const btnInfiniteScroll = document.getElementById('infinite-scroll');
const btnJokeTeller = document.getElementById('joke-teller');
const btnPip = document.getElementById('picture-in-picture');

// Button functions
function gotoRepos() {
    const url = 'https://github.com/sumitdey851?tab=repositories';
    window.open(url, '_blank');
}

function gotoQuoteGeneratorApp() {
    const url = 'https://sumitdey851.github.io/random-quote-generator/';
    window.open(url, '_blank');
}

function gotoInfiniteScrollApp() {
    const url = 'https://sumitdey851.github.io/infinite-scroll/';
    window.open(url, '_blank');
}

function gotoJokeTellerApp() {
    const url = 'https://sumitdey851.github.io/joke-teller/';
    window.open(url, '_blank');
}

function gotoPipApp() {
    const url = 'https://sumitdey851.github.io/picture-in-picture/';
    window.open(url, '_blank');
}

// Button behaviour
btnGetSource.addEventListener('click', gotoRepos);
btnQuoteGenerator.addEventListener('click', gotoQuoteGeneratorApp);
btnInfiniteScroll.addEventListener('click', gotoInfiniteScrollApp);
btnJokeTeller.addEventListener('click', gotoJokeTellerApp);
btnPip.addEventListener('click', gotoPipApp);