            
/*
            Ejercicio 3. Dia de la Semana
    preparar un programa que, dado un dia y un mes (de 2021) calcule que dia de la semana es.
    No se puede utilizar ninguna funcion de manejo de fechas de JS.
*/

const dia = 10
const mes = 1

const dias = [ 'lunes', 'martes', 'miercoles', 'jueves','viernes', 'sabado', 'domingo']
const diasMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function calcularDia(dia, mes){

    // Calcular el número de días transcurridos desde el 1 de enero
    let diasTranscurridos = dia 
    for (let i = 0; i < mes; i++) {
        diasTranscurridos += diasMes[i]
    }

    // Calcular el día de la semana 
    let diaSemana = dias[(diasTranscurridos) % 7]; 

    return diaSemana
}

let resultado = calcularDia(dia, mes);
console.log(resultado)

