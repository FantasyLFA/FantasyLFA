function obtenerPalabrasSegundoYTercerRenglon() {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const datos = this.responseText;
            const lineas = datos.split('\n');

            console.log('Datos leídos:', lineas); // Verificamos que estamos leyendo bien los datos

            if (lineas.length >= 99) { // Aseguramos que hay suficientes líneas

                // Función para procesar a cada jugador usando un offset específico
                function procesarJugador(offset, idSuffix) {
                    console.log(`Procesando jugador ${idSuffix}, Offset: ${offset}`);
                    console.log('Datos del jugador:', lineas.slice(offset, offset + 11)); // Mostramos las líneas que estamos procesando

                    document.getElementById(`victorias${idSuffix}`).textContent = lineas[offset + 1].split(/\s+/)[1];
                    document.getElementById(`winRate${idSuffix}`).textContent = lineas[offset + 2].split(/\s+/)[2] + '%';
                    document.getElementById(`puntosTotales${idSuffix}`).textContent = lineas[offset + 3].split(/\s+/)[2];
                    document.getElementById(`pointRate${idSuffix}`).textContent = lineas[offset + 4].split(/\s+/)[2];
                    document.getElementById(`puntos2019${idSuffix}`).textContent = lineas[offset + 5].split(/\s+/)[2];
                    document.getElementById(`puntos2020${idSuffix}`).textContent = lineas[offset + 6].split(/\s+/)[2];
                    document.getElementById(`puntos2021${idSuffix}`).textContent = lineas[offset + 7].split(/\s+/)[2];
                    document.getElementById(`puntos2022${idSuffix}`).textContent = lineas[offset + 8].split(/\s+/)[2];
                    document.getElementById(`puntos2023${idSuffix}`).textContent = lineas[offset + 9].split(/\s+/)[2];
                    document.getElementById(`puntos2024${idSuffix}`).textContent = lineas[offset + 10].split(/\s+/)[2];
                }

                // Procesar jugadores con sus offsets específicos
                procesarJugador(0, "E");  // Emilio
                procesarJugador(12, "J"); // Juany
                procesarJugador(23, "N"); // Latuf
                procesarJugador(34, "C"); // Chevito
                procesarJugador(44, "G"); // Gaspe
                procesarJugador(55, "S"); // Scrava
                procesarJugador(66, "L"); // Landa
                procesarJugador(77, "K"); // Naki
            }
        }
    };

    xhttp.open('GET', 'stats.txt', true);
    xhttp.send();
}

// Llamamos a la función cuando la página esté cargada
window.onload = obtenerPalabrasSegundoYTercerRenglon;
