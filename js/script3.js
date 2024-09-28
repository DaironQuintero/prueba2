//arreglo que contiene el orden correcto de las palabras
let orden_correcto = ["dientes", "cabellos","amor",
"escalera","viejo","detalles"]

//palabras desordenadas para mostrar en opciones
let palabras_juego = ["amor","detalles","dientes",
"viejo","escalera","cabellos"]

//contenerdor de opciones
let contenedorOpciones = document.getElementById("opciones");
//boton comprobar
let comprobar = document.getElementById("comprobar");
//texto donde se muestra el resultado
let txtResultado = document.getElementById("resultado");

//arreglo que contiene el orden de las palabras y va eligiendo

let posDisponible = ["","","","","",""];
//funcion que agrega las opciones

function agregarOpciones(){
    palabras_juego.forEach(element =>{
        let div = document.createElement("div");
        div.className = "palabra";
        div.innerHTML = element;
        div.setAttribute("onclick","completar(this)");
        contenedorOpciones.appendChild(div);
    });
}
agregarOpciones();
//agrego el metodo remove onclick a cada elemento span

function agregarEliminarAspan(){
    var spans = document.getElementsByTagName("span");
    for(let i=0; i<spans.length; i++){
        spans[i].setAttribute("onclick","remove(this)");
    }
};
agregarEliminarAspan();

//funcion que pone el texto de las opciones elegidas en el span
function completar(palabra){
    let posLibre = posDisponible.indexOf("");
    document.getElementById(posLibre).innerHTML = palabra.innerHTML;
    posDisponible[posLibre] = palabra.innerHTML;
    contenedorOpciones.removeChild(palabra);
}
//funicon que elimina una palabra del texto y la regresa
function remove(palabra){
    //comprabamos que haya texto
    if(palabra.innerHTML != ""){
        let div = document.createElement("div");
        div.className = "palabra";
        div.innerHTML = palabra.innerHTML;
        div.setAttribute("onclick","completar(this)");
        contenedorOpciones.appendChild(div);

        //eliminamos el texto del span
        palabra.innerHTML = "";
        posDisponible[palabra.id] = "";

        document.getElementById(palabra.id).style.background = 
        "#ccc";

        //limpiamos el texto resultado
        txtResultado.innerHTML = "";
    }
}

//funcion que comprueba si esta correcto
comprobar.onclick = function(){
    //compruebo si hay palabras disponibles
    let posLibre = posDisponible.indexOf("");
    let totalAciertos = 0;

    if(posLibre == -1){
        for(i=0; i <orden_correcto.length;i++ ){
            if(orden_correcto[i] == posDisponible[i]){
                document.getElementById(i).style.background = "#c0ff23";
                totalAciertos++;
            }else{
                document.getElementById(i).style.background = "#fb4b4b";
            }
        }
        if(totalAciertos == orden_correcto.length){
            txtResultado.innerHTML = "Muy bien obtuviste: " + totalAciertos + " de " +totalAciertos ;
            
        }else{
            txtResultado.innerHTML = "Ups algo salio mal";

        }
    }else{
        alert("Completa las palabras");
    }
}

 function reloadPage() {
     location.reload(); // Esta función recargará la página actual
}
