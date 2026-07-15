const tabs = document.querySelectorAll(`.tab`);

const searchInput = document.getElementById(`searchinput`);

const scrollBtn = document.getElementById(`scrollTop`);

let currentCategory = `all`;

let currentSearch = ``;

let filteredItems = [...menuItems];

function updateMenu(){

    const filteredItems = menuItems.filter(item => {

        const categoryMatch = currentCategory === `all` || item.category === currentCategory;

        const searchMatch = item.name.toLowerCase().includes(currentSearch);

        return categoryMatch && searchMatch;

    });

    renderMenu(filteredItems);

    initializeImages();

}

updateMenu();

intitalizeTabs();

intitalizeSearch();

intitializeScrollBtn();