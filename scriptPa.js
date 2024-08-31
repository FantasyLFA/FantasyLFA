function obtenerPalabrasSegundoYTercerRenglon() {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const datos = this.responseText;

      // Aquí puedes procesar los datos si es necesario antes de obtener las palabras del segundo y tercer renglón
      const lineas = datos.split('\n');

      // Verificamos que haya al menos tres renglones antes de obtener las palabras
      if (lineas.length >= 50) {
        //Emily
            const segundoRenglon = lineas[1];
            const tercerRenglon = lineas[2];
            const cuartoRenglon = lineas[3];
            const quintoRenglon = lineas[4];
            const sextoRenglon = lineas[5];
            const septimoRenglon = lineas[6];
            const octavoRenglon = lineas[7];

            // Dividimos los renglones en palabras utilizando una expresión regular que separa las palabras por espacios en blanco
            const palabrasSegundoRenglon = segundoRenglon.split(/\s+/);
            const palabrasTercerRenglon = tercerRenglon.split(/\s+/);
            const palabrasCuartoRenglon = cuartoRenglon.split(/\s+/);
            const palabrasQuintoRenglon = quintoRenglon.split(/\s+/);
            const palabrasSextoRenglon = sextoRenglon.split(/\s+/);
            const palabrasSeptimoRenglon = septimoRenglon.split(/\s+/);
            const palabrasOctavoRenglon = octavoRenglon.split(/\s+/);

            // Obtenemos la segunda palabra del segundo renglón y la tercera palabra del tercer renglón
            const segundaPalabra = palabrasSegundoRenglon[1]+" "+palabrasSegundoRenglon[2];
            const tercerPalabra = palabrasTercerRenglon[1]+" "+palabrasTercerRenglon[2];
            const cuartaPalabra = palabrasCuartoRenglon[1]+" "+palabrasCuartoRenglon[2];
            const quintaPalabra = palabrasQuintoRenglon[1]+" "+palabrasQuintoRenglon[2];
            const sextaPalabra = palabrasSextoRenglon[1]+" "+palabrasSextoRenglon[2];
            const septimaPalabra = palabrasSeptimoRenglon[1]+" "+palabrasSeptimoRenglon[2];
            const octavaPalabra = palabrasOctavoRenglon[1]+" "+palabrasOctavoRenglon[2];

            // Mostramos las palabras en el contenedor "datosContainer"
            document.getElementById('EG').textContent = `${segundaPalabra}`;
            // En caso de que no haya suficientes renglones, mostramos un mensaje de error
            document.getElementById('ES').textContent = `${tercerPalabra}`;
            document.getElementById('EN').textContent = `${cuartaPalabra}`;
            document.getElementById('EL').textContent = `${quintaPalabra}`;
            document.getElementById('EC').textContent = `${sextaPalabra}`;
            document.getElementById('EK').textContent = `${septimaPalabra}`;
            document.getElementById('EJ').textContent = `${octavaPalabra}`;
      //Gaspe
      const onceRenglon = lineas[11];
      const doceRenglon = lineas[12];
      const treceRenglon = lineas[13];
      const catorceRenglon = lineas[14];
      const quinceRenglon = lineas[15];
      const diseisRenglon = lineas[16];
      const disieteRenglon = lineas[17];

      // Dividimos los renglones en palabras utilizando una expresión regular que separa las palabras por espacios en blanco
      const palabras11Renglon = onceRenglon.split(/\s+/);
      const palabras12Renglon = doceRenglon.split(/\s+/);
      const palabras13Renglon = treceRenglon.split(/\s+/);
      const palabras14Renglon = catorceRenglon.split(/\s+/);
      const palabras15Renglon = quinceRenglon.split(/\s+/);
      const palabras16Renglon = diseisRenglon.split(/\s+/);
      const palabras17Renglon = disieteRenglon.split(/\s+/);

      // Obtenemos la segunda palabra del segundo renglón y la tercera palabra del tercer renglón
      const oncePalabra = palabras11Renglon[1]+" "+palabras11Renglon[2];
      const docePalabra = palabras12Renglon[1]+" "+palabras12Renglon[2];
      const trecePalabra = palabras13Renglon[1]+" "+palabras13Renglon[2];
      const catorcePalabra = palabras14Renglon[1]+" "+palabras14Renglon[2];
      const quincePalabra = palabras15Renglon[1]+" "+palabras15Renglon[2];
      const diseisPalabra = palabras16Renglon[1]+" "+palabras16Renglon[2];
      const disietePalabra = palabras17Renglon[1]+" "+palabras17Renglon[2];

      // Mostramos las palabras en el contenedor "datosContainer"
      document.getElementById('GE').textContent = `${oncePalabra}`;
      // En caso de que no haya suficientes renglones, mostramos un mensaje de error
      document.getElementById('GS').textContent = `${docePalabra}`;
      document.getElementById('GN').textContent = `${trecePalabra}`;
      document.getElementById('GL').textContent = `${catorcePalabra}`;
      document.getElementById('GC').textContent = `${quincePalabra}`;
      document.getElementById('GK').textContent = `${diseisPalabra}`;
      document.getElementById('GJ').textContent = `${disietePalabra}`;
      
      
  //Latuf
      const veunoRenglon = lineas[21];
      const vedosRenglon = lineas[22];
      const vetresRenglon = lineas[23];
      const vecuatroRenglon = lineas[24];
      const vecincoRenglon = lineas[25];
      const veseisRenglon = lineas[26];
      const vesieteRenglon = lineas[27];
      const veochoRenglon = lineas[28];

      // Dividimos los renglones en palabras utilizando una expresión regular que separa las palabras por espacios en blanco
      const palabras21Renglon = veunoRenglon.split(/\s+/);
      const palabras22Renglon = vedosRenglon.split(/\s+/);
      const palabras23Renglon = vetresRenglon.split(/\s+/);
      const palabras24Renglon = vecuatroRenglon.split(/\s+/);
      const palabras25Renglon = vecincoRenglon.split(/\s+/);
      const palabras26Renglon = veseisRenglon.split(/\s+/);
      const palabras27Renglon = vesieteRenglon.split(/\s+/);
      const palabras28Renglon = veochoRenglon.split(/\s+/);

      // Obtenemos la segunda palabra del segundo renglón y la tercera palabra del tercer renglón
      const veunoPalabra = palabras21Renglon[1]+" "+palabras21Renglon[2];
      const vedosPalabra = palabras22Renglon[1]+" "+palabras22Renglon[2];
      const vetresPalabra = palabras23Renglon[1]+" "+palabras23Renglon[2];
      const vecuatroPalabra = palabras24Renglon[1]+" "+palabras24Renglon[2];
      const vecincoPalabra = palabras25Renglon[1]+" "+palabras25Renglon[2];
      const veseisPalabra = palabras26Renglon[1]+" "+palabras26Renglon[2];
      const vesietePalabra = palabras27Renglon[1]+" "+palabras27Renglon[2];
      const veochoPalabra = palabras28Renglon[1]+" "+palabras28Renglon[2];

      // Mostramos las palabras en el contenedor "datosContainer"
      document.getElementById('SE').textContent = `${veunoPalabra}`;
      // En caso de que no haya suficientes renglones, mostramos un mensaje de error
      document.getElementById('SG').textContent = `${vedosPalabra}`;
      document.getElementById('SN').textContent = `${vetresPalabra}`;
      document.getElementById('SL').textContent = `${vecuatroPalabra}`;
      document.getElementById('SC').textContent = `${vecincoPalabra}`;
      document.getElementById('SK').textContent = `${veseisPalabra}`;
      document.getElementById('SJ').textContent = `${vesietePalabra}`;
  //LANDA
    const treunoRenglon = lineas[31];
    const tredosRenglon = lineas[32];
    const tretresRenglon = lineas[33];
    const trecuatroRenglon = lineas[34];
    const trecincoRenglon = lineas[35];
    const treseisRenglon = lineas[36];
    const tresieteRenglon = lineas[37];
    const treochoRenglon = lineas[38];

    // Dividimos los renglones en palabras utilizando una expresión regular que separa las palabras por espacios en blanco
    const palabras31Renglon = treunoRenglon.split(/\s+/);
    const palabras32Renglon = tredosRenglon.split(/\s+/);
    const palabras33Renglon = tretresRenglon.split(/\s+/);
    const palabras34Renglon = trecuatroRenglon.split(/\s+/);
    const palabras35Renglon = trecincoRenglon.split(/\s+/);
    const palabras36Renglon = treseisRenglon.split(/\s+/);
    const palabras37Renglon = tresieteRenglon.split(/\s+/);
    const palabras38Renglon = treochoRenglon.split(/\s+/);

    // Obtenemos la segunda palabra del segundo renglón y la tercera palabra del tercer renglón
    const treunoPalabra = palabras31Renglon[1]+" "+palabras31Renglon[2];
    const tredosPalabra = palabras32Renglon[1]+" "+palabras32Renglon[2];
    const tretresPalabra = palabras33Renglon[1]+" "+palabras33Renglon[2];
    const trecuatroPalabra = palabras34Renglon[1]+" "+palabras34Renglon[2];
    const trecincoPalabra = palabras35Renglon[1]+" "+palabras35Renglon[2];
    const treseisPalabra = palabras36Renglon[1]+" "+palabras36Renglon[2];
    const tresietePalabra = palabras37Renglon[1]+" "+palabras37Renglon[2];
    const treochoPalabra = palabras38Renglon[1]+" "+palabras38Renglon[2];

    // Mostramos las palabras en el contenedor "datosContainer"
    document.getElementById('NE').textContent = `${treunoPalabra}`;
    // En caso de que no haya suficientes renglones, mostramos un mensaje de error
    document.getElementById('NG').textContent = `${tredosPalabra}`;
    document.getElementById('NS').textContent = `${tretresPalabra}`;
    document.getElementById('NL').textContent = `${trecuatroPalabra}`;
    document.getElementById('NC').textContent = `${trecincoPalabra}`;
    document.getElementById('NK').textContent = `${treseisPalabra}`;
    document.getElementById('NJ').textContent = `${tresietePalabra}`;
    
    //latuf
        const cuaunoRenglon = lineas[41];
        const cuadosRenglon = lineas[42];
        const cuatresRenglon = lineas[43];
        const cuacuatroRenglon = lineas[44];
        const cuacincoRenglon = lineas[45];
        const cuaseisRenglon = lineas[46];
        const cuasieteRenglon = lineas[47];
        const cuaochoRenglon = lineas[48];

        // Dividimos los renglones en palabras utilizando una expresión regular que separa las palabras por espacios en blanco
        const palabras41Renglon = cuaunoRenglon.split(/\s+/);
        const palabras42Renglon = cuadosRenglon.split(/\s+/);
        const palabras43Renglon = cuatresRenglon.split(/\s+/);
        const palabras44Renglon = cuacuatroRenglon.split(/\s+/);
        const palabras45Renglon = cuacincoRenglon.split(/\s+/);
        const palabras46Renglon = cuaseisRenglon.split(/\s+/);
        const palabras47Renglon = cuasieteRenglon.split(/\s+/);
        const palabras48Renglon = cuaochoRenglon.split(/\s+/);

        // Obtenemos la segunda palabra del segundo renglón y la tercera palabra del tercer renglón
        const cuaunoPalabra = palabras41Renglon[1]+" "+palabras41Renglon[2];
        const cuadosPalabra = palabras42Renglon[1]+" "+palabras42Renglon[2];
        const cuatresPalabra = palabras43Renglon[1]+" "+palabras43Renglon[2];
        const cuacuatroPalabra = palabras44Renglon[1]+" "+palabras44Renglon[2];
        const cuacincoPalabra = palabras45Renglon[1]+" "+palabras45Renglon[2];
        const cuaseisPalabra = palabras46Renglon[1]+" "+palabras46Renglon[2];
        const cuasietePalabra = palabras47Renglon[1]+" "+palabras47Renglon[2];
        const cuaochoPalabra = palabras48Renglon[1]+" "+palabras48Renglon[2];

        // Mostramos las palabras en el contenedor "datosContainer"
        document.getElementById('LE').textContent = `${cuaunoPalabra}`;
        // En caso de que no haya suficientes renglones, mostramos un mensaje de error
        document.getElementById('LG').textContent = `${cuadosPalabra}`;
        document.getElementById('LS').textContent = `${cuatresPalabra}`;
        document.getElementById('LN').textContent = `${cuacuatroPalabra}`;
        document.getElementById('LC').textContent = `${cuacincoPalabra}`;
        document.getElementById('LK').textContent = `${cuaseisPalabra}`;
        document.getElementById('LJ').textContent = `${cuasietePalabra}`;

        //Chevito
        const cinunoRenglon = lineas[51];
        const cindosRenglon = lineas[52];
        const cintresRenglon = lineas[53];
        const cincuatroRenglon = lineas[54];
        const cincincoRenglon = lineas[55];
        const cinseisRenglon = lineas[56];
        const cinsieteRenglon = lineas[57];
        const cinochoRenglon = lineas[58];

        // Dividimos los renglones en palabras utilizando una expresión regular que separa las palabras por espacios en blanco
        const palabras51Renglon = cinunoRenglon.split(/\s+/);
        const palabras52Renglon = cindosRenglon.split(/\s+/);
        const palabras53Renglon = cintresRenglon.split(/\s+/);
        const palabras54Renglon = cincuatroRenglon.split(/\s+/);
        const palabras55Renglon = cincincoRenglon.split(/\s+/);
        const palabras56Renglon = cinseisRenglon.split(/\s+/);
        const palabras57Renglon = cinsieteRenglon.split(/\s+/);
        const palabras58Renglon = cinochoRenglon.split(/\s+/);

        // Obtenemos la segunda palabra del segundo renglón y la tercera palabra del tercer renglón
        const cinunoPalabra = palabras51Renglon[1]+" "+palabras51Renglon[2];
        const cindosPalabra = palabras52Renglon[1]+" "+palabras52Renglon[2];
        const cintresPalabra = palabras53Renglon[1]+" "+palabras53Renglon[2];
        const cincuatroPalabra = palabras54Renglon[1]+" "+palabras54Renglon[2];
        const cincincoPalabra = palabras55Renglon[1]+" "+palabras55Renglon[2];
        const cinseisPalabra = palabras56Renglon[1]+" "+palabras56Renglon[2];
        const cinsietePalabra = palabras57Renglon[1]+" "+palabras57Renglon[2];

        // Mostramos las palabras en el contenedor "datosContainer"
        document.getElementById('CE').textContent = `${cinunoPalabra}`;
        // En caso de que no haya suficientes renglones, mostramos un mensaje de error
        document.getElementById('CG').textContent = `${cindosPalabra}`;
        document.getElementById('CS').textContent = `${cintresPalabra}`;
        document.getElementById('CN').textContent = `${cincuatroPalabra}`;
        document.getElementById('CL').textContent = `${cincincoPalabra}`;
        document.getElementById('CK').textContent = `${cinseisPalabra}`;
        document.getElementById('CJ').textContent = `${cinsietePalabra}`;
    //NAKI
      const seiunoRenglon = lineas[61];
      const seidosRenglon = lineas[62];
      const seitresRenglon = lineas[63];
      const seicuatroRenglon = lineas[64];
      const seicincoRenglon = lineas[65];
      const seiseisRenglon = lineas[66];
      const seisieteRenglon = lineas[67];

      // Dividimos los renglones en palabras utilizando una expresión regular que separa las palabras por espacios en blanco
      const palabras61Renglon = seiunoRenglon.split(/\s+/);
      const palabras62Renglon = seidosRenglon.split(/\s+/);
      const palabras63Renglon = seitresRenglon.split(/\s+/);
      const palabras64Renglon = seicuatroRenglon.split(/\s+/);
      const palabras65Renglon = seicincoRenglon.split(/\s+/);
      const palabras66Renglon = seiseisRenglon.split(/\s+/);
      const palabras67Renglon = seisieteRenglon.split(/\s+/);

      // Obtenemos la segunda palabra del segundo renglón y la tercera palabra del tercer renglón
      const seiunoPalabra = palabras61Renglon[1]+" "+palabras61Renglon[2];
      const seidosPalabra = palabras62Renglon[1]+" "+palabras62Renglon[2];
      const seitresPalabra = palabras63Renglon[1]+" "+palabras63Renglon[2];
      const seicuatroPalabra = palabras64Renglon[1]+" "+palabras64Renglon[2];
      const seicincoPalabra = palabras65Renglon[1]+" "+palabras65Renglon[2];
      const seiseisPalabra = palabras66Renglon[1]+" "+palabras66Renglon[2];
      const seisietePalabra = palabras67Renglon[1]+" "+palabras67Renglon[2];

      // Mostramos las palabras en el contenedor "datosContainer"
      document.getElementById('KE').textContent = `${seiunoPalabra}`;
      // En caso de que no haya suficientes renglones, mostramos un mensaje de error
      document.getElementById('KG').textContent = `${seidosPalabra}`;
      document.getElementById('KS').textContent = `${seitresPalabra}`;
      document.getElementById('KN').textContent = `${seicuatroPalabra}`;
      document.getElementById('KL').textContent = `${seicincoPalabra}`;
      document.getElementById('KC').textContent = `${seiseisPalabra}`;
      document.getElementById('KJ').textContent = `${seisietePalabra}`;
    
    //JUANY
        const sieunoRenglon = lineas[71];
        const siedosRenglon = lineas[72];
        const sietresRenglon = lineas[73];
        const siecuatroRenglon = lineas[74];
        const siecincoRenglon = lineas[75];
        const sieseisRenglon = lineas[76];
        const siesieteRenglon = lineas[77];

        // Dividimos los renglones en palabras utilizando una expresión regular que separa las palabras por espacios en blanco
        const palabras71Renglon = sieunoRenglon.split(/\s+/);
        const palabras72Renglon = siedosRenglon.split(/\s+/);
        const palabras73Renglon = sietresRenglon.split(/\s+/);
        const palabras74Renglon = siecuatroRenglon.split(/\s+/);
        const palabras75Renglon = siecincoRenglon.split(/\s+/);
        const palabras76Renglon = sieseisRenglon.split(/\s+/);
        const palabras77Renglon = siesieteRenglon.split(/\s+/);

        // Obtenemos la segunda palabra del segundo renglón y la tercera palabra del tercer renglón
        const sieunoPalabra = palabras71Renglon[1]+" "+palabras71Renglon[2];
        const siedosPalabra = palabras72Renglon[1]+" "+palabras72Renglon[2];
        const sietresPalabra = palabras73Renglon[1]+" "+palabras73Renglon[2];
        const siecuatroPalabra = palabras74Renglon[1]+" "+palabras74Renglon[2];
        const siecincoPalabra = palabras75Renglon[1]+" "+palabras75Renglon[2];
        const sieseisPalabra = palabras76Renglon[1]+" "+palabras76Renglon[2];
        const siesietePalabra = palabras77Renglon[1]+" "+palabras77Renglon[2];

        // Mostramos las palabras en el contenedor "datosContainer"
        document.getElementById('JE').textContent = `${sieunoPalabra}`;
        // En caso de que no haya suficientes renglones, mostramos un mensaje de error
        document.getElementById('JG').textContent = `${siedosPalabra}`;
        document.getElementById('JS').textContent = `${sietresPalabra}`;
        document.getElementById('JN').textContent = `${siecuatroPalabra}`;
        document.getElementById('JL').textContent = `${siecincoPalabra}`;
        document.getElementById('JC').textContent = `${sieseisPalabra}`;
        document.getElementById('JK').textContent = `${siesietePalabra}`;
        
      }
    }
  };

  xhttp.open('GET', 'paternidades.txt', true);
  xhttp.send();
}

// Llamamos a la función para obtener las palabras cuando la página esté cargada
window.onload = obtenerPalabrasSegundoYTercerRenglon;