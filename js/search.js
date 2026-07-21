function initializeSearch() {

    searchInput.addEventListener("input", e => {

        currentSearch =
            e.target.value
                .trim()
                .toLowerCase();

        updateMenu();

    });

}