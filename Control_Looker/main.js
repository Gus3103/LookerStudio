// Función principal para renderizar la visualización
function drawChart(data, config) {
    const div = document.createElement('div');
    div.innerHTML = "<h2>Word Cloud Coming Soon</h2>";
    document.body.appendChild(div);
}

dscc.subscribeToData(drawChart, { transform: dscc.transformData });
