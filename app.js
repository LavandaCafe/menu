const tabs = document.querySelectorAll(`.tab`)
const cards = document.querySelectorAll(`.card`)
const searchInput = document.getElementById(`searchinput`)
const scrollBtn = document.getElementById(`scrollTop`)

tabs.forEach(tab => {
    
    tab.addEventListener(`click`, () => {
        
        tabs.forEach(t => t.classList.remove(`active`));
        tab.classList.add(`active`);
        const category = tab.dataset.category
        
        cards.forEach(card => {
            
            const match = category === `all` || card.dataset.category === category;
            
            card.style.display = match ? `` : `none`
        })
        
        
        tab.scrollIntoView({
            behavior: `smooth`,
            inline: `center`,
            block: `nearest`
        })
            
        window.scrollTo({
            top: 0,
            behavior:`smooth`
        })

    })
})

searchInput.addEventListener(`input`, (e) => {
    
    const value = e.target.value.toLowerCase();

    cards.forEach(card => {
        const name = card.querySelector(`h3`).textContent.toLowerCase();
        
        if(name.includes(value)){
            card.classList.remove(`hidden`);
        }else{
            card.classList.add(`hidden`);
        }

        card.style.display = name.includes(value) ? `` : `none`;
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

document.querySelectorAll(`.card img`).forEach(img => {
    if(!img.getAttribute(`src`)){
        img.src = `assets/images/placeholder.png`
    }

    img.onerror = function () {
        this.src = `assets/images/placeholder.png`;
    }
})
