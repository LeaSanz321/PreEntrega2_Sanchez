let productosMg = [];

const contenedorMisMg = document.querySelector("#ul_likes"); //pagina Likes

const listaProductos = document.querySelector("#contenedorPadre");


function agregarMg(evt){

    if(evt.target.classList.contains('like')){
        

        const producto = evt.target.parentElement; //div del producto
        let icono = evt.target; //icono like
        let urlImgProducto = producto.firstElementChild.src.split("/"), //fragmentos src de la img
            imgProducto = urlImgProducto[urlImgProducto.length - 1];  //último fragmento src de la img
        
        icono.classList.toggle('fa-regular');
        icono.classList.toggle('fa-solid');
        mostrarProducto(producto);

        if(localStorage.getItem("lista-productos") != null){ //si lista-productos existe:
            let auxLista = window.localStorage.getItem("lista-productos"), //auxLista almacena sus valores 
                fLista = auxLista.concat(imgProducto + "=")                //y fLista concatena el nuevo valor src de la img

            localStorage.setItem("lista-productos",fLista);  //Si existía lista-productos, se agrega un nuevo valor.
        }else{
            localStorage.setItem("lista-productos",imgProducto +"=") //si  no, se crea lista-productos con el valor agregado.
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
    console.log(productosMg);
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
        .catch((err)=>{console.log("Ah ocurrido un error: ", err)});

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
    .catch((err)=>{console.log("Ah ocurrido un error: ", err)})

}

window.addEventListener('DOMContentLoaded', agregarMarcas);
listaProductos.addEventListener('click', agregarMg);