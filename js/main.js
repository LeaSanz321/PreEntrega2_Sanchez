let productosMg = [];

const contenedorMisMg = document.querySelector("#contenedorMisMg");

const listaProductos = document.querySelector("#contenedorPadre");



function agregarMg(evt){
    if(evt.target.classList.contains('like')){
        const producto = evt.target.parentElement;

        mostrarProducto(producto);
    }
}

function mostrarProducto(item){
    const fotoProducto = item;
        console.log(fotoProducto);

    productosMg = [...productosMg, fotoProducto];
        console.log(productosMg)

    agregarProducto();
}

function agregarProducto(){
    productosMg.forEach(producto => {
        contenedorMisMg.innerHTML = `
        `;
    })
}

listaProductos.addEventListener('click', agregarMg);