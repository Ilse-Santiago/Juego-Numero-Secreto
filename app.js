// FIRELEZ Motivation
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let max = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if(numeroSecreto===numeroUsuario){
        asignarTextoElemento('p',`FELICIDADES!🎉 Acertaste el número en ${intentos} ${(intentos == 1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");

    }else if(numeroSecreto>numeroUsuario){
        asignarTextoElemento('p',"El número secreto es mayor");
    }else if(numeroSecreto<numeroUsuario){
        asignarTextoElemento('p',"El número secreto es menor");
    }else {
        asignarTextoElemento('p',"El dato introducido es incorrecto");
    }
    intentos ++;
    limpiarCaja()
    return;
}

function limpiarCaja (){
    document.querySelector("#valorUsuario").value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*max)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);

    if(listaNumeroSorteado.length == max){
        asignarTextoElemento('p','Has adivinado todos los números posibles')
        }else if(listaNumeroSorteado.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
    }  
}

function condicionesIniciales() {
    asignarTextoElemento('h1',"Juego del número secreto");
    asignarTextoElemento('p',"Ingresa un número del 1 al 10");
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
        
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    condicionesIniciales();
    //Generar nuevo número secreto
    //Reiniciar el mensaje 
    //Reiniciar los intentos
    //Desactivar el boton Nuevo Juego
    document.querySelector("#reiniciar").setAttribute("disabled",true);
    
}

condicionesIniciales();
