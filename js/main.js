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

/* const showFavsList = () => {
    ulLikes.innerHTML = '';

    favorites.forEach(product => {
        const favoriteCardLi = document.createElement('li');

        const favoriteCardDiv = document.createElement('div');
        favoriteCardDiv.classList.add('contenedorImgGal col-sm-6 col-md-4');
        favoriteCardLi.appendChild(favoriteCardDiv);

        const imgFavProduct = document.createElement('img');
        imgFavProduct.classList.add('w-100 h-100 object-fit-cover');
        imgFavProduct.setAttribute(src, product.src);
        favoriteCardLi.appendChild(imgFavProduct);


        ulLikes.appendChild(favoriteCardLi);
    })
} */



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

    /* showFavsList(); */
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