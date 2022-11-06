class Zapatilla {
    constructor (id,nombre,precio,imagen){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.cuanto = 1;
    }
}
const deHombre = new Zapatilla (1,"Fila",15.000,"../images/hombres-shop.jpg");
const deMujer = new Zapatilla (2,"So Sport",17.000,"../images/mujer-shop.jpg");

//Array productos

const productos = [deHombre,deMujer];

//Array carrito
let carrito = [];

const almacenamientoProductos = document.getElementById("almacenamientoProductos");

const productosVisibles = () => {
    productos.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3","col-md-6","col-xs-12");
        card.innerHTML = `
            <div class="card">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div>
                <h5 class= "text-center">${producto.nombre}</h5>
                <p class= "text-center">${producto.precio}</p>
                <button class="btn btn-primary " id="boton ${producto.id}"> Agregar al carrito </button>
                <div>
            </div>
        `
        almacenamientoProductos.appendChild(card);

        const productoSumado = document.getElementById(`boton ${producto.id}`)
        productoSumado.addEventListener("click", () =>{
            aniadirAlCarrito(productos.id)
        })
        
    })

}

const aniadirAlCarrito = (id) => {
    const chequeo = productos.find((producto) => producto.id === id);
    const chequeoEnCarrito = carrito.find((producto) => producto.id === id);
    if(chequeoEnCarrito){
        chequeoEnCarrito.cuanto++;
    }else{
        carrito.push(chequeo)
    }
}
productosVisibles ()

const contenedorCarrito = document.getElementById ("contenedorCarrito")
const verCarrito = document.getElementById ("chequearCarrito")
verCarrito.addEventListener("click", () => {
    mostrarCarrito()
})
const mostrarCarrito = () => {
    contenedorCarrito.innerHTML="";
    carrito.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3","col-md-6","col-xs-12");
        card.innerHTML = `
            <div class="card">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div>
                <h5 class= "text-center">${producto.nombre}</h5>
                <p class= "text-center">${producto.precio}</p>
                <p class= "text-center">${producto.cuanto}</p>
                <button class="btn btn-primary " id="eliminar${producto.id}"> Borrar producto </button>
                <div>
            </div>
        `
        contenedorCarrito.appendChild(card);
        const productoRestado = document.getElementById(`eliminar${producto.id}`)
        productoRestado.addEventListener("click", () =>{
            borrarDelCarrito(producto.id)

        })
    })
}

const borrarDelCarrito = (id) => {

}