function createHero() {
    const hero = document.createElement('div');
    hero.classList.add('hero');

    const messageOne = document.createElement('h1');
    messageOne.textContent = 'Come and try our exquisite cuisine!';
    const messageTwo = document.createElement('h3');
    messageTwo.textContent = 'Delicious and affordable!';

    const orderBtn = document.createElement('button');
    orderBtn.classList.add('btn');
    orderBtn.setAttribute('id', 'order-btn');
    orderBtn.textContent = 'Order Now';

    hero.append(messageOne, messageTwo, orderBtn);
    return hero;
}

function createInfoSection() {
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');
    infoDiv.append(createLocationBox(), createHoursBox());

    return infoDiv;
}

function createLocationBox() {
    const locationBox = document.createElement('div');
    locationBox.classList.add('location');

    const locationImg = document.createElement('img');
    locationImg.src = './imgs/map-pin.svg';
    locationImg.alt = 'Location Icon';
    const address = document.createElement('p');
    address.textContent = '3234 Saint-Denis Street, QC';

    locationBox.append(locationImg, address);
    return locationBox;
}

function createHoursBox() {
    const hoursBox = document.createElement('div');
    hoursBox.classList.add('hours');

    const clockImg = document.createElement('img');
    clockImg.src = './imgs/clock.svg';
    clockImg.alt = 'Clock Icon';
    const hoursText = document.createElement('p');
    hoursText.innerHTML = '<span>Mon-Fri: </span>8am-9pm<br><span>Sat-Sun: </span>8am-11pm';

    hoursBox.append(clockImg, hoursText);
    return hoursBox;
}

function loadHome() {
    const heroSection = createHero();
    const infoSection = createInfoSection();

    const contentBox = document.querySelector('.content');
    contentBox.textContent = '';
    contentBox.append(heroSection, infoSection);
}


export default loadHome;