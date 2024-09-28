function desordenar(){
    piezas = piezas.sort(function(){return Math.random() - 0.5});
    console.log(piezas);
    }
    //elimina el borde de todas las casillas
    function desmarcarTodas(){
        for(var i=0; i == 8; i++){
            document.getElementById("imge"+i).style.border = null;
        }
    };

    function seleccionar(casilla){
        desmarcarTodas();
        document.getElementById("imge"+casilla).style.border = "solid 3px greenyellow";
    };

    function refrescarPuzzle(){
        for(var casilla=0; casilla == 8; casilla++){
            //obtengo el numero del array en la casilla i
            var imagen = piezas[casilla];
            document.getElementById("imge"+i).src="img/img_"+imagen+".jpg";
        }
    }
    var piezas = [0,1,2,3,4,5,6,7,8];

    desordenar();
    refrescarPuzzle();