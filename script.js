// alert("Hola mi primera web");

let nombre="Ronaldo";
const ciudad="Huacho";
var gusto="comer chaufita";


let contenidoTitulo="Hola Mundo"
let titulo=document.querySelector("#texto-sitio");
titulo.innerHTML =contenidoTitulo;
let textonuevo=titulo.innerText;

//FUNCIONA--------------------
function cambiarTexto(nombre,ciudad,gusto){
let contenido=`Me llamo ${nombre}, naci en ${ciudad} y vivo por un pasaje.
Me gusta el ${gusto} y salir a pasear los fines de semana.
Me encantaria aprender a programar para poder ayudar a todas las personas
y mostrar al mundo lo que puede hacer la tecnologias en estos tiempos.`;
return contenido;
}
function acercademi(){
    let datos=`Soy un desarrollador full stack`;
    return datos;
}
//--------------------------
let parrafo=document.querySelector(".texto-parrafo");
parrafo.innerHTML=cambiarTexto(nombre,ciudad,gusto)
let acerca=document.querySelector("#acerca-de-mi");
acerca.innerHTML=acercademi();

// FORMULARIO------------------
const form = document.getElementById("form");
nombre = document.getElementById("nombre");
parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    let formulario=e.target;
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});

// ------------------------------



