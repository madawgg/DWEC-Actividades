// Obtén todos los encabezados h1-h6
const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        
// Función para generar el índice con sangría
function generarIndice() {
    let indice = '';
    let nivelAnterior = 0;

    headings.forEach(function(heading) {
        const nivel = parseInt(heading.tagName.charAt(1));

        if (nivel > nivelAnterior) {
            // Incrementa la sangría
            indice += ' '.repeat((nivel - nivelAnterior) * 4);
        } else if (nivel < nivelAnterior) {
            // Reduzca la sangría
            indice = indice.slice(0, -4 * (nivelAnterior - nivel));
        }

        // Agrega el texto del encabezado al índice
        indice += heading.textContent + '\n';

        nivelAnterior = nivel;
    });

    // Coloca el índice en una etiqueta <pre>
    const pre = document.createElement('pre');
    pre.textContent = indice;

    // Agrega el índice al cuerpo del documento
    document.body.appendChild(pre);
}

// Llama a la función para generar el índice
document.write('<br> <br>')
generarIndice();