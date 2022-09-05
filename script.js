const miBoton = document.querySelector("#miBoton");
const parrafo = document.querySelector("#parrafito");
miBoton.addEventListener("click", insertarTexto);
function insertarTexto() {
    parrafo.innerHTML = "Hola hola hola hola";
}
