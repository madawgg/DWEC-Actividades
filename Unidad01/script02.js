                
                //Ejercicio 2: Buenos Días

const hora = 7

function saludo(hora){
   
    if( hora >= 7 && hora <= 12 ){
        console.log('Buenos dias')
    
    }else if( hora > 12 && hora <= 20 ){
        console.log('Buenas tardes')
    
    }else if( hora > 20 && hora <= 2 ){
        console.log('Buenas noches')
    
    }else{
        console.log('¿Que haces despierto a estas horas?')
    }
}

saludo(hora)