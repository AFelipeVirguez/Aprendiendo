/*El usuario ingresara un numero cualquiera. Se debe de comparar si es Mayor o igual al numero 200
En caso de que asi sea se saldra de la casilla, en caso de que no se debe de volver a mostrar 
pero con un nuevo texto*/

let ingrese = true;
let answer = "";

while (ingrese) {

    answer = prompt("Ingrese un número por favor");

    if (answer >= 200) {
        console.log("El número es mayor o igual a 200");
        ingrese = false;
    } else {
        console.log("El número no alcanza, intenta de nuevo");
    }

}