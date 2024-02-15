let productosMg = [];

const contenedorMisMg = document.querySelector("#ul_likes"); //pagina Likes

const listaProductos = document.querySelector("#contenedorPadre");



function agregarMg(evt){

    if(evt.target.classList.contains('like')){
        let icono = evt.target; //icono like
        icono.classList.toggle('fa-regular');
        icono.classList.toggle('fa-solid');

        const producto = evt.target.parentElement; //div del producto
        let urlImgProducto = producto.firstElementChild.src.split("/"), //fragmentos src de la img
            imgProducto = urlImgProducto[urlImgProducto.length - 1];  //último fragmento src de la img
        
        if (icono.classList.contains('fa-solid')){
            Toastify({
                text:'↪ Se ha agregado a favoritos',
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                gravity: "bottom",
                position: "right",
                style: {
                    background: "#0f0f0f80",
                    color: "#ffffffe1",
                  }
        
            }).showToast();
        
            

            if(localStorage.getItem("lista-productos") != null){ //si lista-productos existe:
                let auxLista = window.localStorage.getItem("lista-productos"), //auxLista almacena sus valores 
                    fLista = auxLista.concat(imgProducto + "=")                //y fLista concatena el nuevo valor src de la img
    
                localStorage.setItem("lista-productos",fLista);  //Si existía lista-productos, se agrega un nuevo valor.
                
            }else{
                localStorage.setItem("lista-productos",imgProducto +"=") //si  no, se crea lista-productos con el valor agregado.
            }

            if(window.localStorage.key(urlImgProducto[urlImgProducto.length -1])){ 
                window.localStorage.setItem(urlImgProducto[urlImgProducto.length - 1],producto.outerHTML)
            }

            mostrarProducto(producto);
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


function agregarMarcas(){
    const cajaUno = document.querySelector('.cajaUno');
    const cajaDos = document.querySelector('.cajaDos');
    
    //FETCH UNO
    fetch("../json/data1.json")
        .then((prom)=>{
            return prom.json();
        })
        .then((datos)=>{
            datos.forEach((data)=>{
                cajaUno.innerHTML += `
                <div class="${data.clas}"></div>
                `;
            });
        })
        

    //FETCH DOS
    fetch("../json/data2.json")
    .then((prom)=>{
        return prom.json();
    })
    .then((datos)=>{
        datos.forEach((data)=>{
            cajaDos.innerHTML += `
            <div class="${data.clas}"></div>
            `;
        })
    })
    

}

window.addEventListener('DOMContentLoaded', agregarMarcas);
listaProductos.addEventListener('click', agregarMg);