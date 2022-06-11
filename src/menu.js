function createMenuGrid() {
    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menu-grid');

    createMenuItems(menuGrid);
    return menuGrid;
}

function createMenuItems(menuGrid) {
    const foods = {
        'Chicken and Fries': ['$4.69', './imgs/fries.png'],
        'Hamburger': ['$3.49', './imgs/hamburger.png'],
        'Steak': ['$5.89', './imgs/steak.png'],
        'Ribs': ['$4.79', './imgs/ribs.png']
    };
    
    for (let food in foods) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const foodImg = document.createElement('img');
        const foodCost = document.createElement('h3');

        foodImg.src = foods[food][1];
        foodImg.alt = food;
        foodCost.classList.add('food-name');
        foodCost.innerHTML = `${food}: <span class="food-cost">${foods[food][0]}</span>`;

        menuItem.append(foodImg, foodCost);
        menuGrid.appendChild(menuItem);
    }
}

function loadMenu() {
    const contentBox = document.querySelector('.content');
    contentBox.textContent = '';
    contentBox.appendChild(createMenuGrid());
}

export default loadMenu;