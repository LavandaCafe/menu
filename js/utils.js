function formatPrice(number){

    return Number(number)
        .toLocaleString("fa-IR")
        .replace(/٬/g,"");

}