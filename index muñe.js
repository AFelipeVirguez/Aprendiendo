/*MUÑE CURSO #2 (y ultimo)
El usuario ingresara un numero cualquiera. Se debe de comparar si es Mayor o igual al numero 200
En caso de que asi sea se saldra de la casilla, en caso de que no se debe de volver a mostrar 
pero con un nuevo texto*/

let ingrese = true 
let ingreset = true 
let answer = "";
while (ingrese){
  if (ingreset){
    answer =prompt ("Ingrese un numero porfavor");
    ingreset = false 
  }
  if (answer >= 200){
    console.log("el numero es mayor o igual a 200");
    break;
  }else{
    answer = prompt ("pone otro")
  }
}