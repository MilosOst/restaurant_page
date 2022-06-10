import initializeSite from './base.js';


initializeSite();


const header = document.querySelector('.header');
const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.links');

hamburger.addEventListener('click', () => {
    header.classList.toggle('active');
    hamburger.classList.toggle('active');
    links.classList.toggle('active');
});


