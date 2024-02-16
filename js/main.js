const btn_like = document.querySelectorAll('.btn_like');

let favorites = [];

const favInLocalStorage = () => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

const loadFavFromLocalStorage = () => {
    const favStored = localStorage.getItem('favorites');

    if(favStored){
        favorites = JSON.parse(favStored);
    }
}

btn_like.forEach(button => {
    button.addEventListener('click', e => {
       console.log(1);
    })
})