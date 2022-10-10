const nombre = "pepito"
const contrasenia = "juarez123"
const email = "juanp123@gmail.com"
let cambiarDatos = true

function DatosUsuario () {


let nombrePersonal = prompt ("Coloque el nombre que desea para su usuario")
let contraseniaPersonal = prompt ("Ingrese su contraseña")
let emailPersonal = prompt ("Ingrese su email")


if (validar(nombrePersonal,contraseniaPersonal,emailPersonal)){

            let answerCaptcha = confirm ("Necesitamos confirmar que es humano\n"+"porfavor observe con atención el siguiente\n"+"ciclo de 3 numeros del captcha\n"+"para poder continuar")    
         
            if(answerCaptcha){
            for (let numeroCaptcha = 1 ; numeroCaptcha <= 3 ; numeroCaptcha++) {
                let captcha = numeroCaptcha*2;
                alert ("Ciclo de 3 numeros : "+captcha);

            }
            let  requestCaptcha = confirm ("¿ Confirma que los anteriores numeros son pares ? \n"+ "aceptar: si\n"+"cancelar: no")
    
            if (requestCaptcha){

                alert ("Usted ah sido registrado con éxito")
                cambiarDatos = confirm("Desea cambiar sus datos ?")

                if (cambiarDatos){

                alert("vuelva a escribir sus datos, porfavor recargue la página")


            }

        }


    }  
        
        
}else {

    alert ("no entraste")


    }

}

function validar(nombrePersonal,contraseniaPersonal,emailPersonal){

    if ((nombrePersonal === nombre && contraseniaPersonal === contrasenia) && (emailPersonal === email)){

        return true 

    }else {

        return false

    }

     

}
DatosUsuario ();
