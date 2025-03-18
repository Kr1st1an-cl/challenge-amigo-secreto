/* 
Challenge Amigo Secreto - por Alura Latam
Alumno: Cristian Velasquez Rios (cristian.velasquez.rios@gmail.com)
*/

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = []; 

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let NombreAmigo = inputAmigo.value.trim(); //Elimina espacios al inicio y al final 
    
    //Si no hay amigos ingresados
    if(!NombreAmigo) {
        alert("Debes ingresar un nombre de amigo");
        return;
    }
    
    //Valida si el nombre de amigo ya fue ingresado, para evitar duplicados
    if (amigo.includes(NombreAmigo)) {
        alert("Ya ingresaste ese nombre de amigo. Deben ser nombres diferentes");
        inputAmigo.value = "";
        inputAmigo.focus();
        return;
    }
    
    amigo.push(NombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos();

    console.log(amigo);
}

function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

// Valida que se haya ingresado al menos un amigo y se agrega un mensaje adicional 
// para indicar que a continuación se listan los amigos ingresados    
    if (amigo.length > 0) {
        let mensaje = document.createElement("li");
        mensaje.textContent = "Amigos ingresados para el sorteo:";
        mensaje.style.fontWeight = "bold";
        listaAmigos.appendChild(mensaje);
        listaAmigos.appendChild(document.createElement("br")); //agrega una línea en blanco para separación
    }


    for(let i=0; i < amigo.length ; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo(){
    if(amigo.length === 0){
        alert("No hay amigos para sortear");
        return;
    }

    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;
    
    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
    
}