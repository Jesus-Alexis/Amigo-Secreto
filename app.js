// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listAmigos = document.querySelector(".name-list");
const resultado = document.getElementById("resultado");

let nombres = [];
const agregarAmigo = () => {
  let amigo = document.getElementById("amigo").value;
  /* Agregar una lista de amigos */
  let lista = document.createElement("LI");
  validarNombres(amigo, nombres);
  nombres.push(amigo);
  console.log(nombres);
  // Función para agregar los nombres a la lista
  if (amigo !== lista) {
    lista.innerHTML = amigo;
    lista = listAmigos.appendChild(lista);
    actualizarCaja();
  } else {
    borrarLista(lista);
  }
};

// Funcion para sortear amigos
const sortearAmigo = () => {
  let nombreAmigos = Math.round(Math.random() * nombres.length) - 1;
  if (nombres[nombreAmigos] === undefined) {
    return sortearAmigo();
    // Borra lista
  } else {
    let amigoSecreto = document.createElement("LI");
    amigoSecreto.innerHTML = nombres[nombreAmigos];
    resultado.appendChild(amigoSecreto);
  }
};

// Validación de Nombres
const validarNombres = (ami, nom) => {
  if (ami === "") {
    alert("Escribe un nombre");
    nom.pop();
  } else if (nom.includes(ami) || nom.includes(nom[0] - 1)) {
    alert("No puedes repetir nombres");
    nom.pop(nom[1] - 1);
  }
};

// Funcion para limpiar la caja
const actualizarCaja = () => {
  document.querySelector("#amigo").value = "";
};
