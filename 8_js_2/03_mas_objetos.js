var listaPersonas = new Array();

function addPersona(){
    var nuevaPersona = new Object();
    nuevaPersona.nombre = jQuery("#inputNombre").val();//# en todos y en el nuevo
    nuevaPersona.edad = document.getElementById("inputEdad").value;
    nuevaPersona.edad = parseInt(nuevaPersona.edad);
    nuevaPersona.email = document.getElementById("imputEmail").value;

    listaPersonas[listaPersonas.length] = nuevaPersona;
    
    listarPersonas();
}
function listarPersonas(){
    
    $("divListado").html("<h2>Lista de personas</h2>");
    
    for (var i = 0; i < listaPersonas.length; i++)
    {
        var persona = listaPersonas [ i ];
        $("divListado").html(
            $("divListado").html() + 
        "<p> Nombre: " //+= añadir,sumar un valor a una variable
        + persona.nombre + ". Edad: "
        + persona.edad + "  email: &lt"
        + persona.email + "&gt </p>");       
    }
}