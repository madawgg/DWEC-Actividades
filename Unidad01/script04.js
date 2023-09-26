/*  
            EJERCICIO 4
    Escribir un programa que muestre en pantalla los números del 1 al 300 sustituyendo los números
    que terminen en 3 por la palabra “fizz”, los números que acaben en 5 por “buzz” y los números que
    acaben en 15 por la palabra “fizzbuzz”
*/

for(let i =1; i <= 300; i++){
    const ultimoDigito = i % 10 //Sacar el ultimo digito del numero.
    const ultimosDosDigitos = i % 100 //Sacar los 2 ultimos digitos del numero.
    let resultado = ''

    //sustituir, si corresponde, el/los digitos por el string correspondiente
    if(ultimoDigito === 3){
        resultado = 'Fizz'
    }else if(ultimosDosDigitos  === 15 ){
        resultado = 'FizzBuzz'
    }else if(ultimoDigito  === 5 ){
        resultado = 'Buzz'
    }else{
        resultado = i
    }
    console.log(resultado + ', ')
}