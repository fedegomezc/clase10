// cantidad de caras = 6 con 9 unidades cada uno
// frontal - ROJO
// derecha - AZUL
// izquierda - VERDE
// trasera - NARANJA
// abajo - AMARILLO
// arriba - BLANCO

// clases de piezas: 
//         centros -> 6 ( 1 color ) 
//         esquinas ->  8 ( 3 colores )
//         aristas  -> 12 ( 2 colores )
// total 26 piezas

const colores = {
    frontal: 'ROJO',
    derecha: 'AZUL',
    izquierda: 'VERDE',
    trasera: 'NARANJA',
    abajo: 'AMARILLO',
    arriba: 'BLANCO'
};

const cubo = [];

for (let i = 0; i < 6; i++) {
    cubo[i] = [];
    for (let j = 0; j < 3; j++) {
        cubo[i][j] = [];
        for (let k = 0; k < 3; k++) {
            // Obtener el nombre de la cara correspondiente al índice i
            const cara = Object.keys(colores)[i];
            
            // Asignar el color correspondiente a la cara
            cubo[i][j][k] = colores[cara];
        }
    }
}

console.log(cubo);