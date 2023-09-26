
/*
Prepara un programa que construya una matriz de 20 numeros aleatorios entre 0 y 10.
Una vez construida dicha matriz, el progrmaa debe calcular cual es la moda.
Para obtener un número aleatorio entre 0 y 10 puedes utilizar el siguiente código:
Math.floor(Math.random() * 10);

*/

var matriz = []

function llenarMatriz(matriz) {

    for (let i = 0; i < 20; i++) {

        let numeroAleatorio = Math.floor(Math.random() * 10)
        matriz.push(numeroAleatorio)

    }
    return matriz
}

function ordenarMatriz(matriz) {
    let matrizOrdenada = matriz.sort()

    return matrizOrdenada
}

function buscarModa(matriz) {
    const contador = new Map();
    let maxFrecuencia = 0;

    for (let i = 0; i < matriz.length; i++) {
        const elemento = matriz[i];
        const frecuencia = (contador.get(elemento) || 0) + 1;
        contador.set(elemento, frecuencia);
        if (frecuencia > maxFrecuencia) {
            maxFrecuencia = frecuencia;
        }
    }

    const valoresMasRepetidos = [];

    for (const [elemento, frecuencia] of contador) {
        if (frecuencia === maxFrecuencia) {
            valoresMasRepetidos.push(elemento);
        }
    }

    return valoresMasRepetidos;

}
console.log('matriz generada')
console.log(llenarMatriz(matriz))
console.log('matriz ordenada')
console.log(ordenarMatriz(matriz))
console.log('valor/es moda: ' + buscarModa(matriz))