document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia al botón de búsqueda
    const searchButton = document.getElementById('searchButton');

    // Declaración de un array
    let jsonData = [];

    // Agregar un event listener al botón de búsqueda
    searchButton.addEventListener('click', () => {
        buscarProducto();
    });
});

function buscarProducto() {
    // Obtener referencia al input de búsqueda y al div de resultados
    const inputValor = document.getElementById('searchInput').value.toLowerCase();
    const resultadosDiv = document.getElementById('results');

    // Limpiar resultados anteriores
    resultadosDiv.innerHTML = '';

    // Declaración de una constante
    const archivo = "./data.xlsx"; // Nombre del archivo xlsx
    const lector = new FileReader();

    lector.onload = function(e) {
        const datos = new Uint8Array(e.target.result);
        const workbook = XLSX.read(datos, { type: 'array' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        jsonData = XLSX.utils.sheet_to_json(firstSheet);

        const resultados = jsonData.filter(function(item) {
            return item.COD.toLowerCase().includes(inputValor) || item.Descripcion.toLowerCase().includes(inputValor);
        });

        if (resultados.length > 0) {
            resultados.forEach(function(item) {
                const productoHTML = '<div class="producto">' +
                                       '<h3>' + item.Descripcion + '</h3>' +
                                       '<p><strong>Código:</strong> ' + item.COD + '</p>' +
                                       '<p><strong>EAN:</strong> ' + item.EAN + '</p>' +
                                       '<p><strong>Segmento:</strong> ' + item.Segmento + '</p>' +
                                       '<p><strong>Sugerido:</strong> ' + item.Sugerido + '</p>' +
                                       '<p><strong>Gondol:</strong> ' + item.Gondol + '</p>' +
                                       '<p><strong>Tiendas Activas:</strong> ' + item['Tiendas Activas'] + '</p>' +
                                       '<p><strong>Facturación en Bultos 2024:</strong> ' + item['Facturacion en Bultos 2024'] + '</p>' +
                                   '</div>';
                resultadosDiv.innerHTML += productoHTML;
            });
        } else {
            // Mostrar mensaje si no hay resultados
            resultadosDiv.innerHTML = '<p>La búsqueda no arroja resultados</p>';
        }
    };

    lector.readAsArrayBuffer(archivo);
}
