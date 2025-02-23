/*  Autor: John
 *  Descripcion: JavaScript amigo secreto ONE - G8
 */
// Lista encargada de agregar a los amigos.
let amigos = [];

/*
* Ingresar un nuevo amigo a la lista
* Validar que la entrada no este vacio
* Actualizar la lista de amigos
*/
function agregarAmigo() {
  let nuevoAmigo = document.getElementById("amigo").value; 
  if (nuevoAmigo.trim() !== "") {
    amigos.push(nuevoAmigo);

    // Limpiar la lista existente.
    document.getElementById("amigo").value = "";

    actualizarListaAmigos();
  } else {
    alert("[WARNING] - Debes ingresar un nombre valido");
  }
}

/*
* Actualizar lista de amigos y crear elementos <li> para cada amigo.
*/
function actualizarListaAmigos() {
   let listaAmigosElement = document.getElementById("listaAmigos");
    listaAmigosElement.innerHTML = "";
  
    for (let i = 0; i < amigos.length; i++) {
      let nuevoElemento = document.createElement("li");
      nuevoElemento.textContent = amigos[i];
      listaAmigosElement.appendChild(nuevoElemento);
    }
  }

/**
* Sortear y seleccionar de manera aleatoria uno de los nombres almacenados la lista de amigos.
* Validar que haya amigos disponibles previo a la realización del sorteo.
* Obtener el nombre sorteado.
* Mostrar el resultado.
*/
  function sortearAmigo() {
    let cantidadAmigos = amigos.length;

    if (cantidadAmigos === 0) {
      alert("[WARNING] - Por favor, inserte un nombre antes de sortear");
    } else {
      let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
      let resultadoHTML = document.querySelector("#resultado");
      resultadoHTML.innerHTML = `[INFO] - 🎉 El amigo sorteado es: ${amigos[indiceAmigo]} 🎉`;
    }
  }