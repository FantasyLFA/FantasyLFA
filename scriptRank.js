function obtenerPalabrasSegundoYTercerRenglon() {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    var orden = new Array(8);
    var valores = new Array(8);
    var bufforden;
    var buffvalores;
    if (this.readyState == 4 && this.status == 200) {
      const datos = this.responseText;

      // Aquí puedes procesar los datos si es necesario antes de obtener las palabras del segundo y tercer renglón
      const lineas = datos.split('\n');

      // Verificamos que haya al menos tres renglones antes de obtener las palabras
      if (lineas.length >= 5) {
        const priReglon = lineas[0].split(/\s+/);
        const segReglon = lineas[1].split(/\s+/);
        const terReglon = lineas[2].split(/\s+/);
        const cuaReglon = lineas[3].split(/\s+/);
        const cinReglon = lineas[4].split(/\s+/);
        const sexReglon = lineas[5].split(/\s+/);
        const sieReglon = lineas[6].split(/\s+/);
        const ochReglon = lineas[7].split(/\s+/);

        valores[0] = priReglon[1];
        valores[1] = segReglon[1];
        valores[2] = terReglon[1];
        valores[3] = cuaReglon[1];
        valores[4] = cinReglon[1];
        valores[5] = sexReglon[1];
        valores[6] = sieReglon[1];
        valores[7] = ochReglon[1];

        orden[0] = priReglon[0];
        orden[1] = segReglon[0];
        orden[2] = terReglon[0];
        orden[3] = cuaReglon[0];
        orden[4] = cinReglon[0];
        orden[5] = sexReglon[0];
        orden[6] = sieReglon[0];
        orden[7] = ochReglon[0];

        for(var i=0;i<7;i++)
        {
          if(valores[i]<valores[i+1])
          {
            buffvalores=valores[i];
            valores[i]=valores[i+1];
            valores[i+1]=buffvalores;
            bufforden=orden[i];
            orden[i]=orden[i+1];
            orden[i+1]=bufforden;
            i=-1;
          }
        }
        document.getElementById('nombre1').textContent = `${orden[0]}`;
        document.getElementById('puntos1').textContent = `${valores[0]}`;
        document.getElementById('nombre2').textContent = `${orden[1]}`;
        document.getElementById('puntos2').textContent = `${valores[1]}`;
        document.getElementById('nombre3').textContent = `${orden[2]}`;
        document.getElementById('puntos3').textContent = `${valores[2]}`;
        document.getElementById('nombre4').textContent = `${orden[3]}`;
        document.getElementById('puntos4').textContent = `${valores[3]}`;
        document.getElementById('nombre5').textContent = `${orden[4]}`;
        document.getElementById('puntos5').textContent = `${valores[4]}`;
        document.getElementById('nombre6').textContent = `${orden[5]}`;
        document.getElementById('puntos6').textContent = `${valores[5]}`;
        document.getElementById('nombre7').textContent = `${orden[6]}`;
        document.getElementById('puntos7').textContent = `${valores[6]}`;
        document.getElementById('nombre8').textContent = `${orden[7]}`;
        document.getElementById('puntos8').textContent = `${valores[7]}`;
      }
    }
  };

  xhttp.open('GET', 'ranking.txt', true);
  xhttp.send();
}

// Llamamos a la función para obtener las palabras cuando la página esté cargada
window.onload = obtenerPalabrasSegundoYTercerRenglon;