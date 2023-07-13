// cantidad de caras = 6 con 9 unidades cada uno
// frontal - ROJO         eje +x
// derecha - AZUL         eje +y
// izquierda - VERDE      eje -y
// trasera - NARANJA      eje -x
// abajo - AMARILLO       eje -z
// arriba - BLANCO        eje +z

// clases de piezas: 
//         centros -> 6 ( 1 color ) 
//         esquinas ->  8 ( 3 colores )
//         aristas  -> 12 ( 2 colores )
// total 26 piezas

// cada pieza debe tener un vector (x', y', z') que es relativo a un vector global (x) centrado en el cubo

// al rotar a 90° los ejes de la pieza cambian de direccion
/* var transitions = {
    'x': {'y': 'z', 'z': 'y'},
    'y': {'x': 'z', 'z': 'x'},
    'z': {'x': 'y', 'y': 'x'}
  } 
*/

// cada pieza tiene una posicion x, y, z y una orientación xa, ya, za.
// esquinas 8 piezas
const piezaFLU = [x, y, z, xa, ya, za]    // Front Left Up
const piezaFLD = [x, y, z, xa, ya, za]    // Front Left Down
const piezaFRU = [x, y, z, xa, ya, za]    // Front Right Up
const piezaFRD = [x, y, z, xa, ya, za]    // Front Right Down
const piezaBLU = [x, y, z, xa, ya, za]    // Back Left Up
const piezaBLD = [x, y, z, xa, ya, za]    // Back Left Down
const piezaBRU = [x, y, z, xa, ya, za]    // Back Right Up
const piezaBRD = [x, y, z, xa, ya, za]    // Back Right Down
// aristas
