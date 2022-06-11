import loadHome from "./home.js";
import loadMenu from "./menu.js";


function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const headerMenu = createHeaderMenu();
    const linkSection = createHeaderLinks();
    header.append(headerMenu, linkSection);

    return header;
}

function createHeaderMenu() {
    const headerMenu = document.createElement('div');
    headerMenu.classList.add('header-menu');

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'CUISINE';
    headerMenu.appendChild(restaurantName);

    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    hamburger.addEventListener('click', toggleHamburger);

    // Add the three bars to the hamburger
    for (let i = 0; i < 3; i++) {
        const bar = document.createElement('span');
        bar.classList.add('bar');
        hamburger.appendChild(bar);
    }

    headerMenu.appendChild(hamburger);
    return headerMenu;
}

function createHeaderLinks() {
    const linkSection = document.createElement('ul');
    linkSection.classList.add('links');

    const homeLink = document.createElement('li');
    homeLink.classList.add('link');
    homeLink.classList.add('selected');
    homeLink.textContent = 'Home';
    homeLink.addEventListener('click', () => {
        if (homeLink.classList.contains('selected')) return;
        setSelectedLink(homeLink);
        loadHome();
    });


    const menuLink = document.createElement('li');
    menuLink.classList.add('link');
    menuLink.textContent = 'Menu';
    menuLink.addEventListener('click', () => {
        if (menuLink.classList.contains('selected')) return;
        setSelectedLink(menuLink);
        loadMenu();
    });
    
    const contactLink = document.createElement('li');
    contactLink.classList.add('link');
    contactLink.textContent = 'Contact';
    contactLink.addEventListener('click', () => console.log('Contact Clicked'));

    linkSection.append(homeLink, menuLink, contactLink);
    return linkSection;

}

function setSelectedLink(selectedLink) {
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
        if (link.textContent !== selectedLink.textContent) {
            link.classList.remove('selected');
        }
    })
    selectedLink.classList.add('selected');
}

function toggleHamburger() {
    document.querySelector('.hamburger').classList.toggle('active');
    document.querySelector('.header').classList.toggle('active');
    document.querySelector('.links').classList.toggle('active');
}

function initializeSite() {
    const contentSection = document.querySelector('#content');

    const mainContent = document.createElement('main');
    mainContent.classList.add('content');

    contentSection.append(createHeader(), mainContent);
    loadHome();
}

export default initializeSite;