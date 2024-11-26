function obtenerDatosYMostrar() {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const datos = this.responseText;

            // Dividimos el contenido del archivo en líneas
            const lineas = datos.split('\n');
            const jugadores = [
                { nombre: "Emily", ids: ["E"] },
                { nombre: "Juany", ids: ["J"] },
                { nombre: "Latuf", ids: ["N"] },
                { nombre: "Chevito", ids: ["C"] },
                { nombre: "Gaspe", ids: ["G"] },
                { nombre: "Scrava", ids: ["S"] },
                { nombre: "Landa", ids: ["L"] },
                { nombre: "Naki", ids: ["K"] }
            ];

            let lineaActual = 0;

            jugadores.forEach(jugador => {
                if (lineaActual < lineas.length) {
                    const nombreLinea = lineas[lineaActual++].trim(); // Línea del nombre del jugador

                    // Extraemos las siguientes 10 líneas de datos del jugador
                    const estadisticas = [];
                    for (let i = 0; i < 10; i++) {
                        if (lineaActual < lineas.length) {
                            estadisticas.push(lineas[lineaActual++].split(/\s+/));
                        }
                    }

                    // Asignamos los valores correspondientes a los elementos HTML
                    document.getElementById(`victorias${jugador.ids[0]}`).textContent = estadisticas[0][1];
                    document.getElementById(`winRate${jugador.ids[0]}`).textContent = `${estadisticas[1][2]}%`;
                    document.getElementById(`puntosTotales${jugador.ids[0]}`).textContent = estadisticas[2][2];
                    document.getElementById(`pointRate${jugador.ids[0]}`).textContent = estadisticas[3][2];
                    document.getElementById(`puntos2019${jugador.ids[0]}`).textContent = estadisticas[4][2];
                    document.getElementById(`puntos2020${jugador.ids[0]}`).textContent = estadisticas[5][2];
                    document.getElementById(`puntos2021${jugador.ids[0]}`).textContent = estadisticas[6][2];
                    document.getElementById(`puntos2022${jugador.ids[0]}`).textContent = estadisticas[7][2];
                    document.getElementById(`puntos2023${jugador.ids[0]}`).textContent = estadisticas[8][2];
                    document.getElementById(`puntos2024${jugador.ids[0]}`).textContent = estadisticas[9][2];
                }
            });
        }
    };

    xhttp.open('GET', 'stats.txt', true);
    xhttp.send();
}

// Llama a la función cuando la página esté cargada
window.onload = obtenerDatosYMostrar;
