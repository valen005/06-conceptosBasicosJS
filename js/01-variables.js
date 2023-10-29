// COMENTARIO DE UNA UNICA LINEA NO SE PUEDE SALTAR DE LINEA

/* COMENTARIO DE 
MULTIPLES 
LINEAS
*/

// DECLARAR UNA VARIABLE (var, let, const)
//LET caja que va a cambiar sus datos a lo largo de la vida del programa
//CONST es constante se le asigna un valor y queda con ese dato
let anioActual = 2023;
const universe =
  "https://universe.rollingcodeschool.com/live/videos/64b5c54578c18f053461e481";

//MOSTRAR MENSAJES
console.log(anioActual);
console.log("anioActual");
console.log("año actual: " + anioActual);
console.log(universe);

//modificar el contenido de una variable
anioActual = 2024;
console.log(anioActual);

document.write("<p class='parrafoDestacado'>prueba de document.write</p>");

//ventanas emergentes
alert('Hola Mundo');

//solicitar a un usuario un nombre y mostrar un saludo
let nombreUsuario = prompt('Ingrese su nombre');
console.log(nombreUsuario);
document.write('<p>Bienvenido ' + nombreUsuario + '</p>')
