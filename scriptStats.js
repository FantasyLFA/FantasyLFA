function obtenerPalabrasSegundoYTercerRenglon() {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          const datos = this.responseText;
          const lineas = datos.split('\n');

          if (lineas.length >= 50) {
              // Emily
              const segundoRenglon = lineas[1];
              const tercerRenglon = lineas[2];
              const cuartoRenglon = lineas[3];
              const quintoRenglon = lineas[4];
              const sextoRenglon = lineas[5];
              const septimoRenglon = lineas[6];
              const octavoRenglon = lineas[7];
              const novenoRenglon = lineas[8];
              const decimoRenglon = lineas[9];
              const undecimoRenglon = lineas[10];

              document.getElementById('victoriasE').textContent = segundoRenglon.split(/\s+/)[1];
              document.getElementById('winRateE').textContent = tercerRenglon.split(/\s+/)[2] + '%';
              document.getElementById('puntosTotalesE').textContent = cuartoRenglon.split(/\s+/)[2];
              document.getElementById('pointRateE').textContent = quintoRenglon.split(/\s+/)[2];
              document.getElementById('puntos2019E').textContent = sextoRenglon.split(/\s+/)[2];
              document.getElementById('puntos2020E').textContent = septimoRenglon.split(/\s+/)[2];
              document.getElementById('puntos2021E').textContent = octavoRenglon.split(/\s+/)[2];
              document.getElementById('puntos2022E').textContent = novenoRenglon.split(/\s+/)[2];
              document.getElementById('puntos2023E').textContent = decimoRenglon.split(/\s+/)[2];
              document.getElementById('puntos2024E').textContent = undecimoRenglon.split(/\s+/)[2];

              // Juany
              const onceRenglon = lineas[12];
              const doceRenglon = lineas[13];
              const treceRenglon = lineas[14];
              const catorceRenglon = lineas[15];
              const quinceRenglon = lineas[16];
              const dieciseisRenglon = lineas[17];
              const diecisieteRenglon = lineas[18];
              const dieciochoRenglon = lineas[19];
              const diecinueveRenglon = lineas[20];
              const veinteRenglon = lineas[21];

              document.getElementById('victoriasJ').textContent = onceRenglon.split(/\s+/)[1];
              document.getElementById('winRateJ').textContent = doceRenglon.split(/\s+/)[2] + '%';
              document.getElementById('puntosTotalesJ').textContent = treceRenglon.split(/\s+/)[2];
              document.getElementById('pointRateJ').textContent = catorceRenglon.split(/\s+/)[2];
              document.getElementById('puntos2019J').textContent = quinceRenglon.split(/\s+/)[2];
              document.getElementById('puntos2020J').textContent = dieciseisRenglon.split(/\s+/)[2];
              document.getElementById('puntos2021J').textContent = diecisieteRenglon.split(/\s+/)[2];
              document.getElementById('puntos2022J').textContent = dieciochoRenglon.split(/\s+/)[2];
              document.getElementById('puntos2023J').textContent = diecinueveRenglon.split(/\s+/)[2];
              document.getElementById('puntos2024J').textContent = veinteRenglon.split(/\s+/)[2];

              // Latuf
              const veintidosRenglon = lineas[23];
              const veintitresRenglon = lineas[24];
              const veinticuatroRenglon = lineas[25];
              const veinticincoRenglon = lineas[26];
              const veintiseisRenglon = lineas[27];
              const veintisieteRenglon = lineas[28];
              const veintiochoRenglon = lineas[29];
              const veintinueveRenglon = lineas[30];
              const treintaRenglon = lineas[31];
              const treintaunoRenglon = lineas[32];

              document.getElementById('victoriasN').textContent = veintidosRenglon.split(/\s+/)[1];
              document.getElementById('winRateN').textContent = veintitresRenglon.split(/\s+/)[2] + '%';
              document.getElementById('puntosTotalesN').textContent = veinticuatroRenglon.split(/\s+/)[2];
              document.getElementById('pointRateN').textContent = veinticincoRenglon.split(/\s+/)[2];
              document.getElementById('puntos2019N').textContent = veintiseisRenglon.split(/\s+/)[2];
              document.getElementById('puntos2020N').textContent = veintisieteRenglon.split(/\s+/)[2];
              document.getElementById('puntos2021N').textContent = veintiochoRenglon.split(/\s+/)[2];
              document.getElementById('puntos2022N').textContent = veintinueveRenglon.split(/\s+/)[2];
              document.getElementById('puntos2023N').textContent = treintaRenglon.split(/\s+/)[2];
              document.getElementById('puntos2024N').textContent = treintaunoRenglon.split(/\s+/)[2];

              const treintaidosRenglon = lineas[34];
              const treintaitresRenglon = lineas[35];
              const treintacuatroRenglon = lineas[36];
              const treintacincoRenglon = lineas[37];
              const treintaseisRenglon = lineas[38];
              const treintasieteRenglon = lineas[39];
              const treintaiochoRenglon = lineas[40];
              const treintainueveRenglon = lineas[41];
              const cuarentaRenglon = lineas[42];
              const cuarentaunoRenglon = lineas[43];

              document.getElementById('victoriasC').textContent = treintaidosRenglon.split(/\s+/)[1];
              document.getElementById('winRateC').textContent = treintaitresRenglon.split(/\s+/)[2] + '%';
              document.getElementById('puntosTotalesC').textContent = treintacuatroRenglon.split(/\s+/)[2];
              document.getElementById('pointRateC').textContent = treintacincoRenglon.split(/\s+/)[2];
              document.getElementById('puntos2019C').textContent = treintaseisRenglon.split(/\s+/)[2];
              document.getElementById('puntos2020C').textContent = treintasieteRenglon.split(/\s+/)[2];
              document.getElementById('puntos2021C').textContent = treintaiochoRenglon.split(/\s+/)[2];
              document.getElementById('puntos2022C').textContent = treintainueveRenglon.split(/\s+/)[2];
              document.getElementById('puntos2023C').textContent = cuarentaRenglon.split(/\s+/)[2];
              document.getElementById('puntos2024C').textContent = cuarentaunoRenglon.split(/\s+/)[2];
            
                            // Gaspe
                            const cuarentadosRenglon = lineas[44];
                            const cuarentatresRenglon = lineas[45];
                            const cuarentacuatroRenglon = lineas[46];
                            const cuarentacincoRenglon = lineas[47];
                            const cuarentaseisRenglon = lineas[48];
                            const cuarentasieteRenglon = lineas[49];
                            const cuarentaochoRenglon = lineas[50];
                            const cuarentanueveRenglon = lineas[51];
                            const cincuentaRenglon = lineas[52];
                            const cincuentaunoRenglon = lineas[53];
            
                            document.getElementById('victoriasG').textContent = cuarentadosRenglon.split(/\s+/)[1];
                            document.getElementById('winRateG').textContent = cuarentatresRenglon.split(/\s+/)[2] + '%';
                            document.getElementById('puntosTotalesG').textContent = cuarentacuatroRenglon.split(/\s+/)[2];
                            document.getElementById('pointRateG').textContent = cuarentacincoRenglon.split(/\s+/)[2];
                            document.getElementById('puntos2019G').textContent = cuarentaseisRenglon.split(/\s+/)[2];
                            document.getElementById('puntos2020G').textContent = cuarentasieteRenglon.split(/\s+/)[2];
                            document.getElementById('puntos2021G').textContent = cuarentaochoRenglon.split(/\s+/)[2];
                            document.getElementById('puntos2022G').textContent = cuarentanueveRenglon.split(/\s+/)[2];
                            document.getElementById('puntos2023G').textContent = cincuentaRenglon.split(/\s+/)[2];
                            document.getElementById('puntos2024G').textContent = cincuentaunoRenglon.split(/\s+/)[2];
            
                            // Scrava
                            const cincuentadosRenglon = lineas[55];
                            const cincuentatresRenglon = lineas[56];
                            const cincuentacuatroRenglon = lineas[57];
                            const cincuentacincoRenglon = lineas[58];
                            const cincuentaseisRenglon = lineas[59];
                            const cincuentasieteRenglon = lineas[60];
                            const cincuentaiochoRenglon = lineas[61];
                            const cincuentainueveRenglon = lineas[62];
                            const sesentaRenglon = lineas[63];
                            const sesentaunoRenglon = lineas[64];
            
                            document.getElementById('victoriasS').textContent = cincuentadosRenglon.split(/\s+/)[1];
                            document.getElementById('winRateS').textContent = cincuentatresRenglon.split(/\s+/)[2] + '%';
                            document.getElementById('puntosTotalesS').textContent = cincuentacuatroRenglon.split(/\s+/)[2];
                            document.getElementById('pointRateS').textContent = cincuentacincoRenglon.split(/\s+/)[2];
                            document.getElementById('puntos2019S').textContent = cincuentaseisRenglon.split(/\s+/)[2];
                            document.getElementById('puntos2020S').textContent = cincuentasieteRenglon.split(/\s+/)[2];
                            document.getElementById('puntos2021S').textContent = cincuentaiochoRenglon.split(/\s+/)[2];
                            document.getElementById('puntos2022S').textContent = cincuentainueveRenglon.split(/\s+/)[2];
                            document.getElementById('puntos2023S').textContent = sesentaRenglon.split(/\s+/)[2];
                            document.getElementById('puntos2024S').textContent = sesentaunoRenglon.split(/\s+/)[2];
            
                            // Landa
                            const sesentadosRenglon = lineas[66];
                            const sesentatresRenglon = lineas[67];
                            const sesentacuatroRenglon = lineas[68];
                            const sesentacincoRenglon = lineas[69];
                            const sesentaseisRenglon = lineas[70];
                            const sesentasieteRenglon = lineas[71];
                            const sesentaiochoRenglon = lineas[72];
                            const sesentainueveRenglon = lineas[73];
                            const setentaRenglon = lineas[74];
                            const setentaunoRenglon = lineas[75];
            
                            document.getElementById('victoriasL').textContent = sesentadosRenglon.split(/\s+/)[1];
                            document.getElementById('winRateL').textContent = sesentatresRenglon.split(/\s+/)[2] + '%';
                            document.getElementById('puntosTotalesL').textContent = sesentacuatroRenglon.split(/\s+/)[2];
                            document.getElementById('pointRateL').textContent = sesentacincoRenglon.split(/\s+/)[2];
                            document.getElementById('puntos2019L').textContent = sesentaseisRenglon.split(/\s+/)[2];
                            document.getElementById('puntos2020L').textContent = sesentasieteRenglon.split(/\s+/)[2];
                            document.getElementById('puntos2021L').textContent = sesentaiochoRenglon.split(/\s+/)[2];
                            document.getElementById('puntos2022L').textContent = sesentainueveRenglon.split(/\s+/)[2];
                            document.getElementById('puntos2023L').textContent = setentaRenglon.split(/\s+/)[2];
                            document.getElementById('puntos2024L').textContent = setentaunoRenglon.split(/\s+/)[2];
            
                            // Naki
                            const setentadosRenglon = lineas[77];
                            const setentatresRenglon = lineas[78];
                            const setentacuatroRenglon = lineas[79];
                            const setentacincoRenglon = lineas[80];
                            const setentaseisRenglon = lineas[81];
                            const setentasieteRenglon = lineas[82];
                            const setentaiochoRenglon = lineas[83];
                            const setentainueveRenglon = lineas[84];
                            const ochentaRenglon = lineas[85];
                            const ochentaunoRenglon = lineas[86];
            
                            document.getElementById('victoriasK').textContent = setentadosRenglon.split(/\s+/)[1];
                            document.getElementById('winRateK').textContent = setentatresRenglon.split(/\s+/)[2] + '%';
                            document.getElementById('puntosTotalesK').textContent = setentacuatroRenglon.split(/\s+/)[2];
                            document.getElementById('pointRateK').textContent = setentacincoRenglon.split(/\s+/)[2];
                            document.getElementById('puntos2019K').textContent = setentaseisRenglon.split(/\s+/)[2];
                            document.getElementById('puntos2020K').textContent = setentasieteRenglon.split(/\s+/)[2];
                            document.getElementById('puntos2021K').textContent = setentaiochoRenglon.split(/\s+/)[2];
                            document.getElementById('puntos2022K').textContent = setentainueveRenglon.split(/\s+/)[2];
                            document.getElementById('puntos2023K').textContent = ochentaRenglon.split(/\s+/)[2];
                            document.getElementById('puntos2024K').textContent = ochentaunoRenglon.split(/\s+/)[2];
            
        }
      }
    };

    xhttp.open('GET', 'stats.txt', true);
    xhttp.send();
  }

  // Llamamos a la función para obtener las palabras cuando la página esté cargada
  window.onload = obtenerPalabrasSegundoYTercerRenglon;
