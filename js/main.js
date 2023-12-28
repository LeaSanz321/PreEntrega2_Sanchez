let productosMg = [];

const contenedorMisMg = document.querySelector("#ul_likes");


const listaProductos = document.querySelector("#contenedorPadre");



function agregarMg(evt){
    if(evt.target.classList.contains('like')){
        const producto = evt.target.parentElement;
        

        mostrarProducto(producto);
    }
}

function mostrarProducto(item){
    const infoProducto = {
        imagen: item.querySelector("img").src,
        icono: item.querySelector("i").className
    }
    console.log(infoProducto)

    productosMg = [...productosMg, infoProducto];
        console.log(productosMg)

    agregarProducto();
}

function agregarProducto(){
    productosMg.forEach(producto => {
        const newLike = document.createElement('li');
        newLike.innerHTML = `
            <div class="contenedorImgGal col-sm-6 col-md-4" data-aos="flip-left">
                <img src="${producto.imagen}" alt="Imagen Campera moda Vintage, Oversize" class="w-100 h-100 object-fit-cover">
                <i class="like fa-solid fa-heart"></i>
            </div>
        `;
        contenedorMisMg.appendChild(newLike);
    })
}


listaProductos.addEventListener('click', agregarMg);