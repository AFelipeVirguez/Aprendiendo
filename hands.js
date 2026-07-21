/*Letras de la izquierda
qwert
asdfg
zxcvb
Letras de la derecha
yuiop
hjkl
nm
Tarea
Escribe una función que recibe una sola palabra minúscula ( sin espacios ), y devolve:
NONE si la palabra está vacía
LEFT si la palabra puede escribirse solo con la mano izquierda
RIGHT si la palabra puede escribirse solo con la mano derecha
BOTH si la palabra requiere ambas manos
La palabra se codificará como una versión iterable, dando lugar a cadenas de letras individuales.*/

function whichHand (word){
    let left = ["q","w","e","r","t","a","s","d","f","g","z","x","c","v","b"];
    let right = ["y","u","i","o","p","h","j","k","l","n","m"];
    let res1 = "";
    let res2 = "";
    for (let i = 0; i < left.length; i++){
        if (word.includes(left[i])){
            res1 = "LEFT";
        }
    }
    for (let o = 0; o < right.length; o++){
        if (word.includes(right[o])){
            res2 = "_RIGHT";
        }
    }
    let operacion = res1 + res2
    if(operacion == "LEFT"){
        return "LEFT";
    }else if (operacion == "_RIGHT"){
        return "RIGHT";
    }else if (operacion == "LEFT_RIGHT"){
        return "BOTH";
    }else if (operacion == ""){
        return "NONE";
    }
}
