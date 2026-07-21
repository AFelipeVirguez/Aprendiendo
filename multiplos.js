/*CODEWARS
Si enumeramos todos los números naturales por debajo de 10 que son múltiplos de 3 o 5, obtenemos 3, 5, 6 y 9. La suma de estos múltiplos es 23.

Termina la solución de modo que devuelva la suma de todos los múltiplos de 3 o 5 por debajo del número pasado.

Además, si el número es negativo, devuelva 0.

Nota: Si un número es múltiplo de 3 y 5, solo lo cuéntales una vez.*/

function solution(number){
    let bag = [];
    let resultado = 0;
    let i = 0;
    if (number - 1 < 0){
        return 0;
    }else{
        for (let x = 0; x <= number - 1; x++){
            while (i % 5 == 0 || i % 3 == 0){
                if (i <= number - 1){
                    bag.push(i);
                    i = i + 1;
                }else{
                    break;
                }
            }
        i = i + 1;
        }
        for (let s = 0; s < bag.length; s++){
            resultado = resultado + bag[s];
        }
        return resultado; 
    }
}