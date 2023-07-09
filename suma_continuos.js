// #Suma continuos
/* Dado un array sumar los 2 valores más altos continuos
[2, 3, 6, 8, 1] = 14 (el 6 y 8)
[1, 2, 1, 6, 2] = 8 (el 6 y 2) */

let arr = [1, 2, 1, 6, 2];

const maxSumaContinuos = (arr) => {
    return Math.max(...arr.slice(1).map((x, i) => x + arr[i]))
}

console.log(maxSumaContinuos(arr));

// Explicación
/* let newArr = arr.slice(1);
console.log(newArr);
let newArr2 = newArr.map((x, i) => {
    console.log(x, i);
    return x + arr[i];
})
console.log(newArr2);
console.log(Math.max(...newArr2)); */