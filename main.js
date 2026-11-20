const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', e => {

    if (window.scrollY === 0) {
        navbar.classList.add('blue');
    } else {
        navbar.classList.remove('blue');
    }

});