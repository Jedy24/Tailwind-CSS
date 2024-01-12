//Navbar Fixed Function
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNavbar = header.offsetTop;

    if (window.pageYOffset > fixedNavbar) {
        header.classList.add('navbar-fixed');
    } else{
        header.classList.remove('navbar-fixed');
    }
}

const horizon = document.querySelector('#horizon');
const menu = document.querySelector('#nav-menu');

horizon.addEventListener('click', function(){
    horizon.classList.toggle('horizon-active');
    menu.classList.toggle('hidden');
});

window.addEventListener('click', function (e) {
    if (e.target != horizon && e.target != menu) {
        horizon.classList.remove('horizon-active');
        menu.classList.add('hidden');
    }
});

const darkButton = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkButton.addEventListener('click', function(){
    if (darkButton.checked) {
        html.classList.add('dark');
    } else{
        html.classList.remove('dark');
    }
});