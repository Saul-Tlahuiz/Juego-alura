let numeroSecreto = 0;
let intentos = 0;
//crearemos una lista que va a ir almacenando los numeros sorteados con el fin de que no se repitan
let   numerosSorteados = [];
//comenzaremos a hacer cambios en el tamaño de la lista para evitar tener problemas de recursividad con la funcion que 
//creamos 
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

console.log(intentos);

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos === 1) ? "vez"  : "veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        } else{
            asignarTextoElemento('p','EL número secreto es mayor');
        }
        intentos++;
        limpiarCaja(); // aqui invocamos la funcion limpiar caja de abajo
    }
    return;
}

//Recordar que para colocar las template strings es necesario poner las comas `` de esta forma, de lo contrario
//no se leera la template string de manera correcta.

function limpiarCaja (){
    document.querySelector("#valorUsuario"). value = "" ;// estamos usando el id
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

        if(numerosSorteados == numeroMaximo){
            asignarTextoElemento('p','Ya se sortearon todos los numeros posibles')
        }else{
        //si el numero que le pasemos ya esta en la lista o si no le pediremos que haga diferentes cosas al programa
        if (numerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
            } else{
                numerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
        }
}

//crearemos una funcion nueva tambien para encapsular ambos mensajes que habiamos asignado previamente

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


//agregamos las funcionalidades del nuevo boton
function reiniciarJuego(){
    //primero limpiamos la caja 
    limpiarCaja();
    //indicamos con un mensaje el intervalo de numeros
    //generamos el numero aleatorio
    condicionesIniciales();
    numeroSecreto = generarNumeroSecreto();
    //reiniciar el numero de intentos
    intentos = 1;
    //deshabilitar el numero de intentos
    document.querySelector('#reiniciar').setAttribute('disabled','true'); 
}

condicionesIniciales();
