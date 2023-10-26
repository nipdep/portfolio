
window.addEventListener('load', themeChange);
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme)
document.documentElement.setAttribute('data-theme', currentTheme);

function themeChange() {
let button = document.querySelector('.theme-toggle');

button.addEventListener('click', function (e) {
    let currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
    transition();
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    } else {
    transition();
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    }
});

let transition = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
    document.documentElement.classList.remove('transition');
    }, 1000);
}
}
