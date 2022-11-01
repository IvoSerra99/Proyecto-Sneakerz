class Zapatilla {
    constructor (id,nombre,precio,imagen){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.cuanto = 1;
    }
}
const deHombre = new Zapatilla (1,"Fila",15000,"../imgages/hombres-shop.jpg");
const deMujer = new Zapatilla (2,"So Sport",17000,"../images/mujer-shop.jpg");

//Array productos

const productos = [deHombre,deMujer];

//Array carrito
let carrito = [];

const almacenamientoProductos = document.getElementById("almacenamientoProductos");

const productosVisibles = () => {
    productos.forEach((zapatilla) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3","col-md-6","col-xs-12");
        card.innerHTML = `
            <div class="card">
                <img src="${zapatilla.imagen}" class="card-img-top" alt="${zapatilla.nombre}">
                <div>
                <h5>${zapatilla.nombre}</h5>
                <p>${zapatilla.precio}</p>
                <button class="btn btn-primary" id="boton ${zapatilla.id}"> Agregar al carrito </button>
                <div>
            </div>
        `
        almacenamientoProductos.appenChild(card);
    })

        
}