// Obtén el div padre y los divs internos
const contenedor = document.getElementById("contenedor");
const colorDivs = document.querySelectorAll(".color-div");

// Función para cambiar el color del padre al hacer clic en un div interno
function cambiarColor(event) {
    const color = event.target.style.backgroundColor;
    contenedor.style.backgroundColor = color;
}

// Agrega el mismo evento de clic a todos los divs internos
colorDivs.forEach(function(div) {
    div.addEventListener("click", cambiarColor);
});