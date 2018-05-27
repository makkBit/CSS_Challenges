let body = document.querySelector('body');
let menu = document.querySelector('.menu-icon');

function handleClick(e) {
    body.classList.toggle('active');
    menu.classList.remove('no-animate'); 
}

menu.addEventListener('click', handleClick);