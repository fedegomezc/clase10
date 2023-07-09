/* Escribe un script que comience con una variable llamada hasta y cree un array con los primeros números de la secuencia de Fibonacci. La secuencia de Fibonacci siempre comienza con los números 0 y 1, y cada número subsiguiente se calcula sumando los dos números anteriores.

Ejemplos:

hasta = 3 resultado [0, 1, 1] /* suma 0 + 1 para obtener la última posición */
/* hasta = 4 resultado [0, 1, 1, 2] /* suma 1 + 1 para obtener la última posición */
/* hasta = 5 resultado [0, 1, 1, 2, 3]  *//* repite lógica anterior */
/* hasta = 6 resultado [0, 1, 1, 2, 3, 5]
hasta = 7 resultado [0, 1, 1, 2, 3, 5, 8] * */

const fibonacci= (hasta) => {
    const fibo = [0, 1];

    for (let i = 2; i < hasta; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2]
    }
    return fibo;
}

console.log(fibonacci(7));
