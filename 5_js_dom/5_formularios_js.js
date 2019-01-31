
function ponPrimeraMayus(texto){
    var primeraLetra = texto.charAt(0).toUpperCase;
    var resto = texto.substring(1).toLowerCase; //desde segunda hasta el final
  
    validarInput(inputNombre, nombre);
}
function validar() {
    var inputNombre = document.getElementById("nombre");
    var inputApe_1 = document.getElementById ("primer_apellido");
    var inputApe_2 = document.getElementById ("segundo_apellido");
    var nombre = inputNombre.value; //getAttribute("value");
    if (nombre == ""){
        inputNombre.style.borderColor = "red";
        
    } else { //Cuando nombre tenga algun valor (nombre !="")
        inputNombre.style.borderColor = "";
        
        inputNombre.value = ponPrimeraMayus(nombre);
    }
}
function validarInput (/*var inputTexto*/ inputTexto, texto){
    if (texto == ""){
        inputTexto.style.borderColor = "red";
        
    } else { //Cuando nombre tenga algun valor (nombre !="")
        inputTexto.style.borderColor = "";
        
        inputTexto.value = ponPrimeraMayus(nombre);
    }
}