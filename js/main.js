let productosMg = [];

const contenedorMisMg = document.querySelector("#ul_likes");

const listaProductos = document.querySelector("#contenedorPadre");


function agregarMg(evt){
    if(evt.target.classList.contains('like')){
        const producto = evt.target.parentElement;
        let urlImgProducto = producto.firstElementChild.src.split("/"),
            imgProducto = urlImgProducto[urlImgProducto.length - 1];
        
        mostrarProducto(producto);

        if(localStorage.getItem("lista-productos") != null){
            let auxLista = window.localStorage.getItem("lista-productos"),
                fLista = auxLista.concat(imgProducto + "=")

            localStorage.setItem("lista-productos",fLista)
        }else{
            localStorage.setItem("lista-productos",imgProducto +"=")
        }


        if(window.localStorage.getItem(urlImgProducto[urlImgProducto.length -1])!=""){
            window.localStorage.setItem(urlImgProducto[urlImgProducto.length - 1],producto.outerHTML)
        }else{
            console.log(window.localStorage.getItem(urlImgProducto[urlImgProducto.length -1]))
        }
    }
}

function mostrarProducto(item){
    const infoProducto = {
        imagen: item.querySelector("img").src,
        icono: item.querySelector("i").className
    }
    productosMg = [...productosMg, infoProducto];
    agregarProducto();
}

function agregarProducto(){
    productosMg.forEach(producto => {
        const newLike = document.createElement('li');
        newLike.innerHTML = `
            <div class="contenedorImgGal col-sm-6 col-md-4" data-aos="flip-left">
                <img src="${producto.imagen}" alt="Imagen Campera moda Vintage, Oversize" class="w-100 h-100 object-fit-cover">
                <i class="${producto.icono}"></i>
            </div>
        `;
    })
}


listaProductos.addEventListener('click', agregarMg);