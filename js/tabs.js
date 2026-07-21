function initializeTabs() {

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            tabs.forEach(t => t.classList.remove("active"));

            tab.classList.add("active");

            currentCategory = tab.dataset.category;

            updateMenu();

            tab.scrollIntoView({

                behavior: "smooth",
                inline: "center",
                block: "nearest"

            });

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    });

}