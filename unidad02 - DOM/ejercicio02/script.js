
const parrafos = document.querySelectorAll('p');

//funcion para manejar el click simple

function singleClick(parrafos){
    parrafos.style.display = 'none';
}

//Funcion para manejar el doble click

function doubleClick(parrafos){
    parrafos.remove();
}

//Funcion para agregar manejadores de eventos de clic a cada elemento <p>
function manejarEventos(parrafos){
parrafos.forEach(parrafos =>{
    let clickCount = 0;
    parrafos.addEventListener('click', () => {
        clickCount++;
        setTimeout(() => {
            if(clickCount ===1){
                singleClick(parrafos);
            }
            clickCount = 0;
        },250);
    });

    parrafos.addEventListener('dblclick', ()=>{
        doubleClick(parrafos);
    });
});
};


//Manejador de eventos al boton reaparecer
function eventoBoton(){
const reaparecer = document.getElementById('reaparecer');
reaparecer.addEventListener('click', ()=>{
    parrafos.forEach(parrafos =>{
        if(parrafos.style.display === 'none'){
            parrafos.style.display = 'block';
        }
    });
});
};

manejarEventos(parrafos);
eventoBoton();