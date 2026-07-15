function initializeImages(){

    document.querySelectorAll(`.card img`).forEach(img => {

        if(!img.src){

            img.src = `./assets/images/placeholder.png`

        }

        img.onerror = function(){
            
            this.src = `./assets/images/placeholder.png`

        }

    })

}