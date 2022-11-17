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



const productos = [deHombre,deMujer];


let carrito = [];



if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

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
            Toastify({
                text: "Su producto fue agregado exitosamente",
                duration: 2000,
                gracity:"top",
                position: "right",
            }).showToast();
            aniadirAlCarrito(producto.id)
        })
        
    })

}

const aniadirAlCarrito = (id) => {
    const chequeo = productos.find((producto) => producto.id === id);
    const chequeoEnCarrito = carrito.find((producto) => producto.id === id);
    if(chequeoEnCarrito){
        chequeoEnCarrito.cuanto++;
    }else{
        carrito.push(chequeo);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    calculoDelTotal()
}

productosVisibles ()

const contenedorCarrito = document.getElementById ("contenedorCarrito")
const verCarrito = document.getElementById ("chequearCarrito")
verCarrito.addEventListener("click", () => {
    let timerInterval
Swal.fire({
  title: 'Cargando su carrito!',
  html: 'Su carrito se mostrará en <b></b> millisegundos.',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
  
})
setTimeout(() => {
    mostrarCarrito()
}, 2000)

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
            Toastify({
                text: "Producto eliminado exitosamente !",
                gravity: "bottom",
                duration: 2000,
                position: "right",
            }).showToast();
            
            borrarDelCarrito(producto.id)

        })
    })
    calculoDelTotal()
}

const borrarDelCarrito = (id) => {
    const productoBorrar = carrito.find((producto) => producto.id === id );
    const indice = carrito.indexOf (productoBorrar);
    carrito.splice(indice, 1);
    mostrarCarrito()
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//
const eliminarCarritoCompleto = document.getElementById("eliminarCarrito");
eliminarCarritoCompleto.addEventListener("click", () => {
    Swal.fire ({
        title: "Su carrito fue eliminado exitosamente!",
        icon: "success"

    })
    eliminarCarritoCompletamente()
})
const eliminarCarritoCompletamente = () => {
    carrito = [];
    mostrarCarrito();
    localStorage.clear();
}
const total = document.getElementById("total")
const calculoDelTotal = () => {
    let compraTotal = 0;
    carrito.forEach((producto) => {
        compraTotal += producto.precio * producto.cuanto
    })
    total.innerHTML = `total: $${compraTotal}`
}
