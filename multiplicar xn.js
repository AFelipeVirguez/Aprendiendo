/*CODEWARS
Crea una función con dos argumentos que devuelva un arreglo de los primeros múltiplos de . nx

Supongamos que tanto el número dado como el número de veces a contar serán números positivos mayores que . 0

Devuelve los resultados como un array o lista (dependiendo del idioma ).*/

function countBy(x, n) {
    let z = [];
    let result = 0;
    for (let i = 1; i <= n; i++){
        result = x * i;
        z.push (result);
    }
    return z;
}