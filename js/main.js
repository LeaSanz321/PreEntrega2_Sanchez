const btn_like = document.querySelectorAll('.btn_like');
const card_product = document.querySelectorAll('.contenedorImgGal');
const misMgContainer = document.querySelector('#contenedorMisMg');
const ulLikes = document.querySelector('#ul_likes');

let favorites = [];

const favInLocalStorage = () => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

const loadFavFromLocalStorage = () => {
    const favStored = localStorage.getItem('favorites');

    if(favStored){
        favorites = JSON.parse(favStored);
    }
    showHTML();
}

const toggleFavs = (product) => {
    const index = favorites.findIndex(
        element => element.id === product.id
    );

    if(index > -1){
        favorites.splice(index, 1);
        favInLocalStorage();
    }else{
        favorites.push(product);
        favInLocalStorage();
    }
}

const showHTML = () => {
    card_product.forEach(product => {
        const contentCard = product.dataset.productoId;
        const isFavorite = favorites.some(favorite => favorite.id === contentCard);

        const favoriteButton = product.querySelector('.btn_like');
        const favoriteBtnActive = product.querySelector('#add_like');
        const favoriteBtnRegular = product.querySelector('#regular_like');

        favoriteBtnActive.classList.toggle('active', isFavorite);
        favoriteBtnRegular.classList.toggle('active', isFavorite);
        favoriteButton.classList.toggle('favorite-active', isFavorite);
    })
}


btn_like.forEach(button => {
    button.addEventListener('click', e => {
       const card = e.target.closest('.contenedorImgGal');
       rutaImg = card.querySelector('img').src.split('/');

       const product = {
        id: card.dataset.productoId,
        src: rutaImg[rutaImg.length -1],
       }

       toggleFavs(product);
       showHTML();
    })
})

loadFavFromLocalStorage();