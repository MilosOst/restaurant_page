import loadHome from "./home.js";


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
    const linkNames = ['Home', 'Menu', 'Contact'];

    // Create Home, Menu, and Contact links
    for (let i = 0; i < 3; i++) {
        const link = document.createElement('li');
        link.classList.add('link');
        link.textContent = linkNames[i];
        linkSection.appendChild(link);
    }
    return linkSection;
}

function initializeSite() {
    const contentSection = document.querySelector('#content');

    const mainContent = document.createElement('main');
    mainContent.classList.add('content');

    contentSection.append(createHeader(), mainContent);
    loadHome();
}

export default initializeSite;