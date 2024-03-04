document.addEventListener('DOMContentLoaded', function() {
    var searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', buscarProducto);
});

function buscarProducto() {
    var inputValor = document.getElementById('searchInput').value.toLowerCase();
    var resultadosDiv = document.getElementById('results');

    resultadosDiv.innerHTML = ''; // Limpiar resultados anteriores

    // Leer el archivo xlsx
    var archivo = "./data.xlsx"; // Nombre del archivo xlsx
    var lector = new FileReader();

    lector.onload = function(e) {
        var datos = new Uint8Array(e.target.result);
        var workbook = XLSX.read(datos, { type: 'array' });
        var firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        var jsonData = XLSX.utils.sheet_to_json(firstSheet);

        var resultados = jsonData.filter(function(item) {
            return item.COD.toLowerCase().includes(inputValor) || item.Descripcion.toLowerCase().includes(inputValor);
        });

        if (resultados.length > 0) {
            resultados.forEach(function(item) {
                var productoHTML = '<div class="producto">' +
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
            resultadosDiv.innerHTML = '<p>La búsqueda no arroja resultados</p>';
        }
    };

    lector.readAsArrayBuffer(archivo);
}
