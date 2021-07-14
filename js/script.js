// Get elements from DOM
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const coder = document.getElementById('coder');
const designer = document.getElementById('designer');
const reader = document.getElementById('reader');
const cook = document.getElementById('cook');
const gamer = document.getElementById('gamer');
const music = document.getElementById('music');
const travel = document.getElementById('travel');
const textBox = document.getElementById('description');

// Dark or Light Images
function imageMode(color) {
    coder.src = `img/coder_${color}.svg`;
    designer.src = `img/ui_design_${color}.svg`;
    reader.src = `img/reading_${color}.svg`;
    cook.src = `img/cooking_${color}.svg`;
    gamer.src = `img/gaming_${color}.svg`;
    music.src = `img/music_${color}.svg`;
    travel.src = `img/travel_${color}.svg`;
}

// Dark Mode Styles
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
}

// Light Mode Styles
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    }
}