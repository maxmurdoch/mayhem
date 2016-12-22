import { Slideout } from 'slideout';

const slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 200,
    'tolerance': 70
});

document.getElementById('nav-toggle').addEventListener('click', function() {
    slideout.toggle();
    document.querySelector('.hamburger').classList.toggle('is-active');
});
