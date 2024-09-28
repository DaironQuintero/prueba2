var divs = ["p0", "p1", "p2","p3"];
var visibleDivId = null;
function divVisibility(divId) {
  if(visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}

function nextDiv() {
  var index = divs.indexOf(visibleDivId);
  if(index < divs.length - 1) {
    index++;
    visibleDivId = divs[index];
  }
  hideNonVisibleDivs();
}

function prevDiv() {
  var index = divs.indexOf(visibleDivId);
  if(index > 0) {
    index--;
    visibleDivId = divs[index];
  }
  hideNonVisibleDivs();
}

//Arreglo que contiene las respuestas correctas
let correctas = [(2,4),(1,3),(1,3),(1,2)];

//Arreglo donde se guardan las respuestas del usuario

let opcion_elegida = [];

let cantidad_correctas = 0;

//funcion para guardar el num de pregunta  y el input elegido de esa pregunta
function respuesta(num_pregunta, seleccionada){
    //guardo la respuesta elegida
    opcion_elegida[num_pregunta] = seleccionada.value;

    //creo el id para seleccionar  el section correspondiente
    id = "p" + num_pregunta;
    labels = document.getElementById(id).childNodes;
    labels [3].style.backgroundColor = "white"; 
    labels [5].style.backgroundColor = "white"; 
    labels [7].style.backgroundColor = "white";
    labels [9].style.backgroundColor = "white";

    //codigo para cambiar el fondo a blanco despues de elegir la respuesta
    //color al label selecionado
    seleccionada.parentNode.style.backgroundColor = "cadetblue"
    
}

//funcion para saber cuales estuvieron bien
function corregir(){
    cantidad_correctas = 0;
    for(i=0 ; i < correctas.length; i++){
        if(correctas[i] == opcion_elegida[i]){
            cantidad_correctas++;
        }
    }
    document.getElementById("resultado").innerHTML = cantidad_correctas;
}