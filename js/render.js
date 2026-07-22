function createPriceHTML(item){

    if(item.prices.length === 1){

        return `
            <div class="price">
                ${formatPrice(item.prices[0].price)}
            </div>
        `;

    }

    return `
        <div class="price multi-price">
            
            ${item.prices.map(price => `

                <div class="price-option">
                
                    <p class="desc">${price.label}</p>

                    <p class="price-value">
                        ${formatPrice(price.price)}
                    </p>

                </div>

            `).join("")}

        </div>
    `;

}

function createCard(item) {

    return `
        <div
            class="card ${item.available ? "" : "unavailable"}"
            data-category="${item.category}"
            data-id="${item.id}"
        >

            <img
                src="${item.image || "./assets/images/placeholder.png"}"
                alt="${item.name}"
            >

            <div class="card-body">

                <h3>${item.name}</h3>

                <p class="desc">${item.description || ""}</p>

                ${createPriceHTML(item)}

            </div>

            ${!item.available ? `<div class="unavailable-overlay"><div class="unavailable-badge"><span class="dot"></span>ناموجود</div></div>` : ""}
            
        </div>
    `;
}

function renderMenu(items) {

    const menu = document.getElementById("menulist");

    menu.innerHTML = items
        .map(createCard)
        .join("");

}