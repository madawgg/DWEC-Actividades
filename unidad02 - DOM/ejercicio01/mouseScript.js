
//funcion para actualizar la posicion del raton en el elemento HTML
function actualizarPosicion(event){
    const mouseX = event.clientX
    const mouseY = event.clientY
    const posicionHTML = document.getElementById('mouse-position')
    posicionHTML.textContent = `Posicion del raton: (${mouseX}, ${mouseY})`
}

//Agregar un evento para rastrear el movimiento del raton
document.addEventListener('mousemove', actualizarPosicion)