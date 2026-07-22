const tabs = document.querySelectorAll(".tab");
const searchInput = document.getElementById("searchinput");

let currentCategory = "all";
let currentSearch = "";

function updateMenu() {

    const filteredItems = menuItems.filter(item => {

        const categoryMatch =
            currentCategory === "all" ||
            item.category === currentCategory;

        const searchMatch =
            item.name
                .toLowerCase()
                .includes(currentSearch);

        return categoryMatch && searchMatch;

    });

    renderMenu(filteredItems);

    initializeImages();

}

updateMenu();

initializeTabs();

initializeSearch();

initializeScrollButton();