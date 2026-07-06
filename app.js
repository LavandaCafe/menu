const tabs = document.querySelectorAll(`.tab`)
const cards = document.querySelectorAll(`.card`)
const searchInput = document.getElementById(`searchinput`)
const scrollBtn = document.getElementById(`scrollTop`)

tabs.forEach(tab => {
    
    tab.addEventListener(`click`, () => {
        
        tabs.forEach(t => t.classList.remove(`active`));
        tab.classList.add(`active`);

        tab.scrollIntoView({
            behavior: `smooth`,
            inline: `center`,
            block: `nearest`
        })
    
        const category = tab.dataset.category

        cards.forEach(card => {
            
            const match = category === `all` || card.dataset.category === category;

            card.style.display = match ? `` : `none`
        })

    })
})

searchInput.addEventListener(`input`, (e) => {
    
    const value = e.target.value.toLowerCase();

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(value) ? `block` : `none`;
    })
})

window.addEventListener(`scroll`, () => {
    if(window.scrollY > 300) {
        scrollBtn.style.display = `block`;
    } else {
        scrollBtn.style.display = `none`;
    }
})

scrollBtn.addEventListener(`click`, () => {
    window.scrollTo({ top: 0, behavior: `smooth`})
})

