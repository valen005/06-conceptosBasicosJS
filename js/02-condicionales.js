/*
if(condicion logica) {
    todo el codigo que quiero realizar si la condicion es verdadera
}
*/

// solicite la edad al user e indique si debe votar
// 16 hasta menores de 18 y mayores de 70 optativo
//18 a 70 obligatorio
let edad = parseInt(prompt('Ingrese su edad'));

if(edad >= 18){
    document.write('Debe votar');
}
else{
    document.write('No debe votar');
}