// suma sin centro
// dado un array de números sumar todos los elementos a excepción del valor del centro.
// ejemplos
// [1, 2, 3, 4, 5] = 12    // se elimina el 3
// [1, 2, 3, 4, 5, 6] = 14   // se eliminan 3 y 4

// casos posibles -> [] , [1] , [1, 2] , [1,2,3,...,]

let arreglo = [1, 2, 3, 4, 5, 6];

let mitadArreglo = arreglo.length / 2
let middleIndex = Math.round(mitadArreglo) - 1

if(arreglo.length >= 3) {
    arreglo.length % 2 === 0 ?
    arreglo.splice(middleIndex, 2) :
    arreglo.splice(middleIndex, 1)

    console.log(arreglo);
} 

let suma = arreglo.reduce((acc, el) => acc + el, 0);

console.log(suma);