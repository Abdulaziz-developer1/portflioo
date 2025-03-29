///navbar
function toggleMenu() {
    document.getElementById("nav-list").classList.toggle("show");
}

/////dark mode
const all = document.getElementById('all');
const switcher = document.getElementById('switcher');

switcher.addEventListener('click', function(){
    all.classList.toggle('all-dark');
    switcher.classList.toggle('switcher-dark');
});
/////////footer
const yearElement = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;