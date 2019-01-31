
//cogemos todos los divs con clase circulo
var arrayDiv = document.getElementsByClassName("circulo");
//Los recorremos para pausarlos por js
//arrayDiv[0].style.webkitAnimationPlayState="paused";
for (var i = 0; i < arrayDiv.length; i++){
    arrayDiv[i].style.webkitAnimationPlayState = "paused";
}
//cogemos el DIV padre, con la clase "marco"
var divMarco = document.getElementsByClassName("marco") [0];
//le añadimos un INPUT type="button" value ="pero animate"
var boton = divMarco.appendChild (document.createElement("input"));
boton.setAttribute("type", "button");
boton.setAttribute("value", "¡Pero animate!");
//Creamos una funcion para animar de nuevo los circulos
function cuandoSePulsaElBoton() {
    for (var i = 0; i < arrayDiv.length; i++){ //length hacer referencia a la longitud del array o lista de divs con circulo
        arrayDiv[i].style.webkitAnimationPlayState = "running"; //initial
    }
}
//hacemos que cuando se pulse el boton, se pausen los circulos
//<INPUT type="button" value="pero animate" onclick="cuandoSePulsaElBoton();"/>
//cuandoSePulsaElBoton();
boton.setAttribute("onclick", "cuandoSePulsaElBoton();") ;
//boton2
var boton2 = divMarco.appendChild (document.createElement("input"));
boton2.setAttribute("type", "button");
boton2.setAttribute("value", "Desanimar");
function desanime () {
    for (var i = 0; i < arrayDiv.length; i++){
        arrayDiv[i].style.webkitAnimationPlayState = "paused";
    }
}
boton2.setAttribute("onclick", "desanime();");
//todo en un solo boton
var boton3 = divMarco.appendChild (document.createElement("input"));
boton3.setAttribute("type", "button");
boton3.setAttribute("value", "on / off");
function clickclack () {
    var i = 0;
    if(arrayDiv[i].style.webkitAnimationPlayState = "running"){
        arrayDiv[i].style.webkitAnimationPlayState = "paused";
    }
    else if(arrayDiv[i].style.webkitAnimationPlayState = "paused"){
        arrayDiv[i].style.webkitAnimationPlayState = "running" ;
    }
}
boton3.setAttribute("onclick", "clickclack();");

