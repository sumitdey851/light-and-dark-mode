// Get elements from DOM
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const coder = document.getElementById('coder');
const designer = document.getElementById('designer');
const reader = document.getElementById('reader');
const cook = document.getElementById('cook');
const gamer = document.getElementById('gamer');
const music = document.getElementById('music');
const travel = document.getElementById('travel');
const toggleIcon = document.getElementById('toggle-icon');
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

// Toggle Dark or Light Mode Styles
function toggleDarkLightMode(isDark) {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? imageMode('dark') : imageMode('light');
}

// Switch Theme Dynamically
function switchTheme(event) {
    event.target.checked ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light');
    event.target.checked ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
    event.target.checked ? toggleDarkLightMode(true) : toggleDarkLightMode(false);
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    }
}