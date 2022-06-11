function createContactBox() {
    const contactBox = document.createElement('div');
    contactBox.classList.add('contact-box');
    
    contactBox.append(createPhoneContact(), createAddressContact(), createImageBox());
    return contactBox;
}

function createPhoneContact() {
    const phoneInfo = document.createElement('div');
    phoneInfo.classList.add('phone-contact');

    const phoneImg = document.createElement('img');
    phoneImg.src = './imgs/phone.svg';
    phoneImg.alt = 'Phone Icon';

    const phoneNum = document.createElement('p');
    phoneNum.textContent = '418-555-0183';

    phoneInfo.append(phoneImg, phoneNum);
    return phoneInfo;
}

function createAddressContact() {
    const addressInfo = document.createElement('div');
    addressInfo.classList.add('location-contact');

    const locationImg = document.createElement('img');
    locationImg.src = './imgs/map-pin.svg';
    locationImg.alt = 'Location Icon';

    const address = document.createElement('p');
    address.textContent = '3234 Saint-Denis Street, QC';

    addressInfo.append(locationImg, address);
    return addressInfo;
}

function createImageBox() {
    const imageBox = document.createElement('div');
    imageBox.classList.add('map-image');

    const locationImg = document.createElement('img');
    locationImg.src = './imgs/map-location.png';
    locationImg.alt = 'Map Image';

    imageBox.appendChild(locationImg);
    return imageBox;
}

function loadContact() {
    const contentBox = document.querySelector('.content');
    contentBox.textContent = '';
    contentBox.append(createContactBox());
}

export default loadContact;