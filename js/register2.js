//Variables y constantes de login

const nombre = "pepito"
const contrasenia = "juarez123"
const email = "juanp123@gmail.com"
console.log("datos a rellenar :\n"+"nombre: "+nombre+"\ncontraseña: "+contrasenia+"\nemail: "+email)
let cambiarDatos = true
const anioActual = 2022
let mayor = mayorDeEdad(18)


const nombrePersonal = prompt ("Coloque el nombre que desea para su usuario")
const contraseniaPersonal = prompt ("Ingrese su contraseña")
const emailPersonal = prompt ("Ingrese su email")
const nombres = []
const emails = []
function aniadirDatos(){
 nombres.push (nombrePersonal)
 emails.push (emailPersonal)
 
}

function DatosUsuario () {
aniadirDatos()
verificarEdad()
if (validar(nombrePersonal,contraseniaPersonal,emailPersonal)){    

            if(captcha ()){
                
                alert ("Usted ah sido registrado con éxito")
                cambiarDatos = confirm("Desea cambiar sus datos ?")

                if (cambiarDatos){

                alert("vuelva a escribir sus datos, porfavor recargue la página")


            }

        


    }  
        
        
}else {

    alert ("no entraste")


    }

}
const mensajeDatos = nombres.concat(emails) 
const mensajeDatos2 = nombres.concat(emails)

// Validacion para el login en cuanto a las constantes
function validar(nombrePersonal,contraseniaPersonal,emailPersonal){

    if ((nombrePersonal === nombre && contraseniaPersonal === contrasenia) && (emailPersonal === email)){

        return true 

    }else {

        return false

    }

     

}
function mayorDeEdad(edad){

    return (num) => num > edad
    
} 
//no funciona aun esta funcion
function edadResta(){
    return anioActual - preguntaEdad
}

function verificarEdad(){

    let preguntaEdad = prompt("ingrese su año de nacimiento (Ej: 1998)")
    

    if (mayor(preguntaEdad)){
    alert("usted es mayor de edad puede ingresar")
    }else {
    alert("usted es menor de edad no puede ingresar")
    return false
    }

}



//Llamada a la funcion de login
DatosUsuario ();

function captcha (){ 
    
    let answerCaptcha = confirm ("Necesitamos confirmar que es humano\n"+"porfavor observe con atención el siguiente\n"+
    "ciclo de 3 numeros del captcha\n"+"para poder continuar")  
    if(answerCaptcha){
        for (let numeroCaptcha = 1 ; numeroCaptcha <= 3 ; numeroCaptcha++) {
            let captcha = numeroCaptcha*2;
            alert ("Ciclo de 3 numeros : "+captcha);

        }
        
    }else {
        alert ("lo siento no pudimos verificar que sea un humano")
        return false
    }

    let  requestCaptcha = confirm ("¿ Confirma que los anteriores numeros son pares ? \n"+ "aceptar: si\n"+"cancelar: no")
    if (requestCaptcha){
        return true
    }

    return false
      
}
//Objeto login
const login = {
    nombre : "juan",
    email : "juanp123@gmail.com",
    contrasenia : "juarez123",}
// Propiedad sumada al objeto
login.numeroDeCelular = "154334897"
// Propiedad modificada del objeto
login.nombre = "pepito"


//Funcion constructora de login (las propiedades del objeto toman el valor del parametro)
function login2(nombre2,email2,contrasenia2) {
    this.nombre2 = nombre2;
    this.email2 = email2;
    this.contrasenia2 = contrasenia2;
    //se puede sumar propiedades sin que esten definidas como parametros y siguen siendo validas en la funcion
    this.genero = "masculino";
}
//Pasando parametros a nuevas variables con la funcion constructora login
const login3 = new login2 ("pepe","programador123@gmail.com","123456789pepe")

// Array login que empieza de 0 hasta la cantidad de valores agregados
//Se puede hacer array con strings, valores numericos o valores booleanos, o todo junto
const register = ["pepe",53,"garcia"]
//Imprimiendo en consola la capacidad del arreglo
console.log(register.length)
// Push de un valor al array (al ultimo)
register.push(23)
// Unshift de un valor al array (al principio)
register.unshift("juanp@gmail.com")
//Aplicando pop para sacar el ultimo valor del array
register.pop()
//Aplicando shift para sacar el primer valor del array
register.shift()
//Aplicando Splice para para borrar todo lo que haya tomando el valor de comienzo hasta el fin
register.splice(0,1)
//El join funciona para separar en cadena de caracteres los parametros del array con el caracter que yo le aplique al mismo join
console.log (register.join ("+"))
//Aplicando Concat para unir o concatenar los arrays en un nuevo array
const datos = [2022,"alumno","activo"]
const datosDeRegistro = register.concat(datos)
//Aplicando Slice a un array, para crear una copia poniendo dos parametros, la copia se detiene un 
//numero antes del ultimo 
const datosNuevos = datosDeRegistro.slice (0,3)
//Aplicando IndexOf el cual me dice si la propiedad buscada esta en el array y en que posicion esta
console.log (datosDeRegistro.indexOf(2022)) //me devolveria un 2 ya que esta en esa posicion
console.log (datosDeRegistro.indexOf("pepe"))// me devolveria -1 ya que no existe en el array
//Aplicando Include (lo mismo que indexof pero me devuelve true o false dependiendo si existe el valor)
console.log (datosDeRegistro.includes(2022)) //me devolveria true
console.log (datosDeRegistro.includes("pepe"))//me devolveria false
//Aplicando Reverse a un array, cambiar el orden de sus valores
datosNuevos.reverse()