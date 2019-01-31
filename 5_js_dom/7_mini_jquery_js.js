/*1-Crear una funcion elemenPorId(id) que devuelva un elemento por su id
 1.1 Probar la función
  elemporId("div_form").style.backgroundColor = "red;
  2-Crear una función cambiaAtribPorId(id, atributo, valor) que modifique el atributo de un elemento buscado por su id
   2.1 probar la función
   Ej cambiaAtribPorId("div_form", "style", "background-color:red");
   3- Crear una funcion adjuntarElementoPorId(id, etiqueta) que genere un tipo de elemento tipo "etiqueta" y lo adjunte a un elemento encontrado por id
   3.3 Probar la función
   adjuntarElementoPorId("div_form", "input");
   <div id="div_form"></div> -> <div id="div_form"><INPUT/></div>
   
   4- Lo mismo que los 3 anteriores pero en vez de buscar por Id busque por clase (devuelve o busca un array de elementos a los que hacer lo que sea)*/

   function generarAntigua(){
       elemPorId("div_form").style.backgroundColor = "red";
   }
   function generar(){
       //elemePorId("div_form").style.backgroundColor
       cambiaAtribPorId("div_form", "style", "background-color:green");
       //adjuntarElementoPorId("div_form", "input");
   }
   function elemPorId(id){
       return document.getElementById(id);
   }
   function cambiaAtribPorId(id, atributo, valor){
       elemPorId(id).setAttribute(atributo, valor);
   }
   function adjuntarElementoPorId(id, etiqueta){
       var elem = elemPorId(id);
       var nuevoelem = document.createElement(etiqueta);
       elem.appendChild(nuevoelem);
       //elemPorId(id).appenChild(document.createElement(etiqueta));
   }