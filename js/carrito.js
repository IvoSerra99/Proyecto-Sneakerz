class Zapatilla {
    constructor (id,nombre,precio,imagen){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.cuanto = 1;
    }
}
const deHombre = new Zapatilla (1,"Fila",15000,"../images/hombres-shop.jpg");
const deMujer = new Zapatilla (2,"So Sport",17000,"../images/mujer-shop.jpg");

//Array productos

const productos = [deHombre,deMujer];

//Array carrito
let carrito = [];

const almacenamientoProductos = document.getElementById("almacenamientoProductos");

const productosVisibles = () => {
    productos.forEach((zapatillas) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3","col-md-6","col-xs-12");
        card.innerHTML = `
            <div class="card">
                <img src="${zapatillas.imagen}" class="card-img-top" alt="${zapatillas.nombre}">
                <div>
                <h5 class= "text-center">${zapatillas.nombre}</h5>
                <p class= "text-center">${zapatillas.precio}</p>
                <button class="btn btn-primary " id="boton ${zapatillas.id}"> Agregar al carrito </button>
                <div>
            </div>
        `
        almacenamientoProductos.appendChild(card);

        const productoSumado = document.getElementById(`boton ${zapatillas.id}`)
        productoSumado.addEventListener("click", () =>{
            aniadirAlCarrito(productos.id)
        })
    })

}
const aniadirAlCarrito = (id) => {
    const chequeo = productos.find((productos) => productos.id === id);
    const chequeoEnCarrito = carrito.find((productos) => productos.id === id);
    if(chequeoEnCarrito){
        chequeoEnCarrito.cuanto++;
    }else{
        carrito.push(chequeo)
    }
}
productosVisibles ()

const contenedorCarrito = document.getElementById ("contenedorCarrito")
const verCarrito = document.getElementById ("chequearCarrito")
verCarrito.addEventListener("click", () => (
    mostrarCarrito()
))
const mostrarCarrito = () => {
    contenedorCarrito.innerHTML="";
    productos.forEach((zapatillas) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3","col-md-6","col-xs-12");
        card.innerHTML = `
            <div class="card">
                <img src="${zapatillas.imagen}" class="card-img-top" alt="${zapatillas.nombre}">
                <div>
                <h5 class= "text-center">${zapatillas.nombre}</h5>
                <p class= "text-center">${zapatillas.precio}</p>
                <button class="btn btn-primary " id="eliminar${zapatillas.id}"> Borrar producto </button>
                <div>
            </div>
        `
        contenedorCarrito.appendChild(card);
        const productoRestado = document.getElementById(`eliminar${zapatillas.id}`)
        productoRestado.addEventListener("click", () =>{
            borrarDelCarrito(productos.id)
        })
    })
}