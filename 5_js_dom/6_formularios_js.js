/*1. validar que el usuario introduzca un email y contraseña
1.1 Marcar en rojo los campos que no sean rellenados
2 Comprobar que sean iguales
2.1 Marcar en verde cuando sean iguales
2.2 Marcar en naranja cuando no
3 Cuando esté correcto indicar "registrado con exito" en el INPUT del mensaje y el fondo de table, en verde
3.1 Si hay algo mal, decir que está mal
*/

function validarInputById(id){
    var input = document.getElementById(id);
    var textoInput = imput.value;
    if (textoInput == ""){
        input.style.borderColor = "red";
    } else {
        input.style.borderColor
    }
}