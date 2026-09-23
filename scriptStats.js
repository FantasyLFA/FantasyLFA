document.addEventListener("DOMContentLoaded", () => {
    // 1. Llamamos al archivo txt
    fetch('stats.txt')
        .then(response => {
            if (!response.ok) throw new Error("No se pudo cargar el archivo");
            return response.text();
        })
        .then(data => procesarEstadisticas(data))
        .catch(error => console.error('Error al cargar stats.txt:', error));
});

function procesarEstadisticas(data) {
    // 2. Convertir el texto en un diccionario organizado
    const lineas = data.split('\n');
    const jugadores = {};
    let jugadorActual = "";

    lineas.forEach(linea => {
        // Limpiamos saltos de línea extra
        linea = linea.replace('\r', '');
        if (linea.trim() === '') return;

        // Separar por tabulaciones (como vienen las columnas en tu archivo txt)
        const partes = linea.split('\t');

        // Si solo hay una columna o la segunda está vacía, es el nombre del jugador
        if (partes.length === 1 || partes[1].trim() === '') {
            jugadorActual = partes[0].trim().toLowerCase();
            jugadores[jugadorActual] = {};
        } else {
            // Es un dato estadístico
            const clave = partes[0].trim();
            const valor = partes[1].trim();
            if (jugadorActual) {
                jugadores[jugadorActual][clave] = valor;
            }
        }
    });

    // 3. Diccionario que conecta el nombre de la estadística en el txt con tu clase CSS del HTML
    const mapeoClases = {
        'Victorias': 'statsVic',
        'Win Rate': 'statsWR',
        'Puntos totales': 'statsPT',
        'Point rate': 'statsPR',
        'Puntos 2019': 'stats19',
        'Puntos 2020': 'stats20',
        'Puntos 2021': 'stats21',
        'Puntos 2022': 'stats22',
        'Puntos 2023': 'stats23',
        'Puntos 2024': 'stats24',
        'Puntos 2025': 'stats25',
        'Puntos 2026': 'stats26' 
    };

    // 4. Volcar los datos en el DOM (HTML)
    const figuras = document.querySelectorAll('.EstadisticasF');

    figuras.forEach(figura => {
        const idJugador = figura.getAttribute('data-jugador');

        if (idJugador && jugadores[idJugador]) {
            const estadisticas = jugadores[idJugador];

            // Recorremos las métricas del jugador
            for (const [claveTxt, valorTxt] of Object.entries(estadisticas)) {
                const nombreClaseCSS = mapeoClases[claveTxt];
                
                if (nombreClaseCSS) {
                    let parrafo = figura.querySelector(`.${nombreClaseCSS}`);

                    // Si la estadística existe en el txt pero no en el HTML (Ej: Puntos 2026), la creamos al vuelo
                    if (!parrafo) {
                        parrafo = document.createElement('p');
                        parrafo.className = `statsTexto ${nombreClaseCSS}`;
                        figura.appendChild(parrafo);
                    }

                    // Formateamos para asegurarnos de que el Win Rate tenga su símbolo de porcentaje
                    let textoFinal = `${claveTxt}: ${valorTxt}`;
                    if (claveTxt === 'Win Rate' && !textoFinal.includes('%')) {
                        textoFinal += '%';
                    }

                    // Actualizamos el contenido
                    parrafo.textContent = textoFinal;
                }
            }
        }
    });
}