"use strict";
// VARAIBLES MIENTRAS CONDUCE
// Variables para la localizacion en el mapa
let numParadas = 0;
let distanciaRecorrido = 0;
let timeParada = 0;
let kmXParada = 0;
// Fin variables de ubicacion
let stop_timeout = 0;
let var_recorrido_recorrer = 0;
// let var_tiempo_faltante = 0;
// Variables para las paradas
let cantidad_Paradas_listas = 0;
let km_parada_lista = 0;
let time_en_parada = 0;
// Comprobante para las paradas
let comprobante_tiempo_en_parada = 0;
let comprobante_parada = false;
let comprobante_frenado = false;
// Fin

// Variables para calcular la velocidad, y la distacia recorrida
let velocidadAcelerando = 0;
let distanciaRecorrida_velocidad = 0;
let timeViaje_Tesla = 0;
// Fin de las variables para calcular

// FIN VARIABLES MIENTRAS CONDUCE
// Variables utilizadas

let cajaCambios = null;
let freno_Mano = false;
let clutch = false;
let freno = false;
let acelerador = false;

// Variables de comprobacion
let variableEncendido = false;
let variableArranque = false;

// Variables direccionales
let luzEstacionarias = false;
let varDireccionalDerecha = false;
let varDireccionalIzquierda = false;
// Fin variables

// Funciones mientras conduce

function cal_velocidadCrucero() {
  console.log(
    "Esta es la velocidad:",
    velocidadAcelerando,
    "Este es la caja de cambio:",
    cajaCambios
  );
  cal_distanciaRecorrida();
  cal_tiempoViaje();

  if (
    velocidadAcelerando < 30 &&
    cajaCambios === 1 &&
    comprobante_parada === false &&
    comprobante_frenado === false
  ) {
    document.getElementById(
      "tablero-control-velocidad-actual"
    ).innerHTML = `Velocidad: ${(velocidadAcelerando += 2)} KM/H`;
    stop_timeout = setTimeout(cal_velocidadCrucero, 1000);
  } else if (velocidadAcelerando >= 30 && cajaCambios === 1) {
    console.log("Se ejecuto el else if para la marcha 1.");
    document.getElementById("tablero-control").innerHTML =
      "Cambie a la siguiente marcha 2.";
  }

  if (
    velocidadAcelerando >= 30 &&
    velocidadAcelerando < 60 &&
    cajaCambios === 2 &&
    comprobante_parada === false &&
    comprobante_frenado === false
  ) {
    document.getElementById(
      "tablero-control-velocidad-actual"
    ).innerHTML = `Velocidad: ${(velocidadAcelerando += 2)} KM/H`;
    setTimeout(cal_velocidadCrucero, 1000);
  } else if (
    velocidadAcelerando > 30 &&
    velocidadAcelerando === 60 &&
    cajaCambios === 2
  ) {
    document.getElementById("tablero-control").innerHTML =
      "Cambie a la siguiente marcha 3.";
  }

  if (
    velocidadAcelerando >= 60 &&
    velocidadAcelerando < 86 &&
    cajaCambios === 3 &&
    comprobante_parada === false &&
    comprobante_frenado === false
  ) {
    document.getElementById(
      "tablero-control-velocidad-actual"
    ).innerHTML = `Velocidad: ${(velocidadAcelerando += 2)} KM/H`;
    setTimeout(cal_velocidadCrucero, 1000);
  } else if (
    velocidadAcelerando > 60 &&
    velocidadAcelerando === 86 &&
    cajaCambios === 3
  ) {
    document.getElementById("tablero-control").innerHTML =
      "Cambie a la siguiente marcha 4.";
  }

  if (
    velocidadAcelerando >= 86 &&
    velocidadAcelerando < 110 &&
    cajaCambios === 4 &&
    comprobante_parada === false &&
    comprobante_frenado === false
  ) {
    document.getElementById(
      "tablero-control-velocidad-actual"
    ).innerHTML = `Velocidad: ${(velocidadAcelerando += 2)} KM/H`;
    setTimeout(cal_velocidadCrucero, 1000);
  } else if (
    velocidadAcelerando > 86 &&
    velocidadAcelerando === 110 &&
    cajaCambios === 4
  ) {
    document.getElementById("tablero-control").innerHTML =
      "Hallegado al limite.";
  }
}

function cal_frenadoVelocidad() {
  console.log("Se esta ejecutando la funcion de frenado.");
  console.log();
  if (freno === true && comprobante_frenado === false && cajaCambios === 1) {
    console.log("Se ejecuto el if del cal_frenadoVelocidad");

    console.log("Quite el freno de pie.");

    document.getElementById(
      "tablero-control-velocidad-actual"
    ).innerHTML = `Velocidad: ${(velocidadAcelerando = 0)} KM/H`;
    document.getElementById(
      "tablero-control"
    ).innerHTML = `Se encuentra frenado.`;
    console.log("comprobante_frenado:", comprobante_frenado);
    return (comprobante_frenado = true);
  } else if (comprobante_frenado === true) {
    return (comprobante_frenado = false);
  }
}

function cal_tiempoViaje() {
  timeViaje_Tesla = Math.floor(Math.sqrt(var_recorrido_recorrer));
  // var_tiempo_faltante = timeViaje_Tesla;
  // console.log(var_tiempo_faltante);
  if (timeViaje_Tesla > 0) {
    // console.log(var_tiempo_faltante);
    // var_tiempo_faltante = var_tiempo_faltante - timeViaje_Tesla;
    document.getElementById(
      "tablero-control-tiempo-transcurrido"
    ).innerHTML = `Tiempo: ${timeViaje_Tesla} Min`;
    console.log("Este es el tiempo del viaje:", timeViaje_Tesla);
    // console.log('Esta es la varaible var_tiempo_faltante:', var_tiempo_faltante);
  }

  /*
  timeViaje_Tesla = Math.floor(Math.sqrt(distanciaRecorrido));
  document.getElementById(
    "tablero-control-tiempo-transcurrido"
  ).innerHTML = `Tiempo: ${timeViaje_Tesla} Min`;
  console.log('Este es el tiempo del viaje:',timeViaje_Tesla);


    else if(timeViaje_Tesla === 0){
    document.getElementById("div-stop-fin-trayecto").style.display =
        "block";
  }

*/
}

function time_action_Parada() {
  console.log(timeParada);
  console.log(time_en_parada);

  if (time_en_parada === 0 && comprobante_tiempo_en_parada === 0) {
    time_en_parada = timeParada;
    comprobante_tiempo_en_parada = 1;
    console.log(
      "Se ejecuto el if con el comprobante:",
      comprobante_tiempo_en_parada,
      time_en_parada
    );
  }

  if (time_en_parada > 0) {
    document.getElementById("div-stop-fin-trayecto-id").style.display = "block";
    clearTimeout(stop_timeout);
    comprobante_parada = true;
    let interval = setInterval(function () {
      if (
        time_en_parada > 0 &&
        document.getElementById("div-stop-fin-trayecto-id").style.display ==
          "block"
      ) {
        document.getElementById(
          "p-stop-parada-tiempo"
        ).innerHTML = `Tiempo:${(time_en_parada -= 1)}`;
      } else {
        console.log("Esto es dentro del else:", time_en_parada);
        document.getElementById(
          "p-stop-parada-tiempo"
        ).innerHTML = `Tiempo:${time_en_parada}`;
        document.getElementById("div-stop-fin-trayecto-id").style.display =
          "none";
        comprobante_parada = false;
        console.log("Parada terminada.");

        time_en_parada = timeParada;
        clearInterval(interval);
      }
    }, 1500);
    console.log("timeParada en el condicional:", time_en_parada);

    // setTimeout(time_action_Parada(),800);
  }
}

function cal_distanciaRecorrida() {
  var_recorrido_recorrer = distanciaRecorrido;
  // km_parada_lista = kmXParada;
  console.log("Km_parada_lista antes del ciclo:", km_parada_lista);
  console.log("kmXParada fuera de ciclo:", kmXParada);

  // distanciaRecorrida_velocidad = distanciaRecorrido;
  if (distanciaRecorrida_velocidad < distanciaRecorrido) {
    var_recorrido_recorrer =
      var_recorrido_recorrer - distanciaRecorrida_velocidad;
    distanciaRecorrida_velocidad =
      distanciaRecorrida_velocidad + velocidadAcelerando;

    if (km_parada_lista === 0) {
      km_parada_lista = kmXParada;
      console.log("km_parada_lista era 0 ahora es:", kmXParada);
    }

    // Esta parte es para crear las paradas
    console.log(numParadas, timeParada, kmXParada);

    if (
      distanciaRecorrida_velocidad >= km_parada_lista &&
      cantidad_Paradas_listas < numParadas
    ) {
      cantidad_Paradas_listas++;
      console.log("Se ejecuto la parada:", cantidad_Paradas_listas);

      km_parada_lista = km_parada_lista + kmXParada;
      console.log("kmXParada en ciclo:", kmXParada);
      console.log("km_parada_lista en ciclo: ", km_parada_lista);

      time_action_Parada();

      if (distanciaRecorrida_velocidad > distanciaRecorrido) {
        distanciaRecorrida_velocidad = distanciaRecorrido;
        document.getElementById(
          "tablero-control-distacia-recorrida"
        ).innerHTML = `Distacia recorrida: ${distanciaRecorrida_velocidad} KM`;
        document.getElementById("p-stop-parada-tiempo").innerHTML =
          "Trayecto Finalizado...";
        document.getElementById("div-stop-fin-trayecto-id").style.display =
          "block";
      } else {
        document.getElementById(
          "tablero-control-distacia-recorrida"
        ).innerHTML = `Distacia recorrida: ${distanciaRecorrida_velocidad} KM`;
      }
    } else {
      if (distanciaRecorrida_velocidad > distanciaRecorrido) {
        distanciaRecorrida_velocidad = distanciaRecorrido;
        document.getElementById(
          "tablero-control-distacia-recorrida"
        ).innerHTML = `Distacia recorrida: ${distanciaRecorrida_velocidad} KM`;
        document.getElementById("p-stop-parada-tiempo").innerHTML =
          "Trayecto Finalizado...";
        document.getElementById("div-stop-fin-trayecto-id").style.display =
          "block";
      } else {
        document.getElementById(
          "tablero-control-distacia-recorrida"
        ).innerHTML = `Distacia recorrida: ${distanciaRecorrida_velocidad} KM`;
      }
    }
  }

  // distanciaRecorrida_velocidad = distanciaRecorrido - 2;
  console.log("Esta es la distacia a recorrer:", distanciaRecorrido);
  console.log("Esta es la distancia recorrida:", distanciaRecorrida_velocidad);
  console.log(
    "Esta es la variable para calcular el tiempo:",
    var_recorrido_recorrer
  );
  return distanciaRecorrida_velocidad;
}

// Fin funciones

// Funcionalidades del proyecto completo

// Funcion del tiempo
function time(e) {
  setTimeout(function () {
    e;
    document.getElementById("tablero-control").innerHTML =
      "Giro completado....";
  }, 500);
}

// Fin

// Creacion de la funcionalidad de las teclas

window.addEventListener(
  "keydown",
  function (event) {
    // Acelerar letra e
    if (event.keyCode == 69) {
      actionTesla.funcionAcelerador();
    }

    // Freno letra w
    if (event.keyCode == 87) {
      actionTesla.funcionFrenado();
    }

    // Clutch letra q
    if (event.keyCode == 81) {
      actionTesla.funcionClutch();
    }

    // Giros a la derecha y a la izquierda
    if (event.keyCode == 82) {
      actionTesla.giroDerecha();
    }
    if (event.keyCode == 76) {
      actionTesla.giroIzquierda();
    }

    // Freno de mano
    if (event.keyCode == 32) {
      actionTesla.funcionFrenoMano();
    }

    // Direccionales
    if (event.keyCode == 39) {
      actionTesla.direccionalDerecha();
    }
    if (event.keyCode == 37) {
      actionTesla.direccionalIzquierda();
    }
    if (event.keyCode == 40) {
      actionTesla.luzEstacionarias();
    }

    // Caja de marchas

    // Marcha N
    if (event.keyCode == 78) {
      actionTesla.marchas(0);
    }
    // Marcha 1
    if (event.keyCode == 49) {
      actionTesla.marchas(1);
    }
    // Marcha 2
    if (event.keyCode == 50) {
      actionTesla.marchas(2);
    }
    // Marcha 3
    if (event.keyCode == 51) {
      actionTesla.marchas(3);
    }
    // Marcha 4
    if (event.keyCode == 52) {
      actionTesla.marchas(4);
    }
    // Marcha R
    if (event.keyCode == 53) {
      actionTesla.marchas(5);
    }

    console.log(event);
  },
  false
);

// Fin funcionalidad de las teclas

class Ubicacion {
  calcularDestino() {
    return (
      (numParadas = Math.floor(Math.random() * (4 - 1) + 1)),
      (timeParada = Math.floor(Math.random() * (6 - 1) + 1)),
      (kmXParada = Math.floor((distanciaRecorrido - 100) / numParadas)),
      console.log(numParadas),
      console.log(timeParada),
      console.log(kmXParada)
    );
  }

  distanciaRecorrido() {
    var valor = prompt("Cuantos kilometros deseas recorrer?", "");
    if (valor != "") {
      // alert("Gracias por ingresar el valor: " + valor);
      distanciaRecorrido = parseInt(valor, 10);
      if (distanciaRecorrido >= 200) {
        // console.log('Se ingreso un valor mayor que 200.');
        return (
          distanciaRecorrido,
          this.calcularDestino(),
          console.log(distanciaRecorrido)
        );
      } else {
        alert("Debe ingresar un valor mayor a 200 Kilometros.");
      }
    } else {
      alert("Debe ingresar un valor.");
    }
  }
}

class Tesla {
  encender() {
    if (cajaCambios === 0 && freno_Mano === true) {
      document.getElementById("tablero-control").innerHTML = "Encendido...";
      return (
        (variableEncendido = true),
        console.log(variableEncendido),
        sonarCarro(),
        mapaTesla.distanciaRecorrido()
      );
    } else if (cajaCambios != 0) {
      document.getElementById("tablero-control").innerHTML = "Poner en neutra.";
    } else if (freno_Mano != true) {
      document.getElementById("tablero-control").innerHTML =
        "Poner el freno de mano.";
      console.log(freno_Mano);
    }
  }

  funcionFrenoMano() {
    if (freno_Mano === true) {
      console.log(freno_Mano);
      document.getElementById("tablero-control").innerHTML =
        "Freno de mano desactivado.";
      return (freno_Mano = false);
    } else {
      console.log(freno_Mano);
      document.getElementById("tablero-control").innerHTML =
        "Freno de mano activado.";
      return (freno_Mano = true), console.log(freno_Mano);
    }
  }

  marchas(num) {
    document.getElementById(
      "tablero-control"
    ).innerHTML = `Se encuentra en la marcha: ${num}`;
    return (cajaCambios = num), console.log(cajaCambios);
  }

  arranque() {
    if (variableEncendido === true) {
      if (
        clutch === true &&
        freno === true &&
        freno_Mano === false &&
        cajaCambios != 0
      ) {
        document.getElementById("tablero-control").innerHTML = "Arrancando...";
        document.getElementById("tablero-control").innerHTML =
          "Suelte el freno de pie y acelere y suelte el clutch progresivamente a la vez que acelera.";
        return (variableArranque = true);
      } else if (clutch != true) {
        document.getElementById("tablero-control").innerHTML =
          "Debe precionar el clutch.";
      } else if (freno != true) {
        document.getElementById("tablero-control").innerHTML =
          "Debe precionar el freno de pie.";
      } else if (freno_Mano != false) {
        document.getElementById("tablero-control").innerHTML =
          "Debe de quitar el freno de mano.";
      } else if (cajaCambios != 1) {
        document.getElementById("tablero-control").innerHTML =
          "Debe de poner la caja de marchas en 1";
      }
    } else {
      document.getElementById("tablero-control").innerHTML =
        "No se puede arrancar por que no esta encendido el carro.";
    }
  }

  funcionClutch() {
    if (variableEncendido === true) {
      if (clutch === true) {
        document.getElementById("tablero-control").innerHTML =
          "El clutch se encuentra desactivado.";
        return (clutch = false), console.log(clutch);
      } else if (clutch === false) {
        document.getElementById("tablero-control").innerHTML =
          "El clutch se encuentra activado.";
        return (clutch = true), console.log(clutch);
      }
    } else {
      document.getElementById("tablero-control").innerHTML =
        "El carro no se encuentra encendido.";
    }
  }

  funcionFrenado() {
    if (variableEncendido === true) {
      if (freno === true) {
        document.getElementById("tablero-control").innerHTML =
          "El freno de pie, se encuentra desactivado.";
        return (freno = false), console.log(freno);
      } else if (freno === false) {
        document.getElementById("tablero-control").innerHTML =
          "El freno de pie, se encuentra activado.";
        return (
          (freno = true), console.log("Frenado:", freno), cal_frenadoVelocidad()
        );
      }
    } else {
      document.getElementById("tablero-control").innerHTML =
        "El carro no se encuentra encendido.";
    }
  }

  funcionAcelerador() {
    if (variableEncendido === true) {
      if (acelerador === true) {
        document.getElementById("tablero-control").innerHTML =
          "El acelerador se encuentra desactivado.";
        return (acelerador = false), console.log(acelerador);
      } else if (
        acelerador === false &&
        cajaCambios === 1 &&
        clutch === true &&
        freno === true
      ) {
        document.getElementById("tablero-control").innerHTML =
          "Puede quitar el freno de pie y el clutch.";
      } else if (acelerador === false && cajaCambios != 0) {
        console.log("Este es el else if con el != 0");
        document.getElementById("tablero-control").innerHTML =
          "El acelerador se encuentra activado.";
        console.log("Acelerador activado.");
        return (
          (acelerador = true), (variableArranque = true), this.acelerandoTesla()
        );
      }
    } else {
      document.getElementById("tablero-control").innerHTML =
        "El carro no se encuentra encendido.";
    }
  }

  // FUNCIONAMIENTO MIENTRAS ACELERA EL CARRO

  acelerandoTesla() {
    console.log("Se esta ejecutando el metodo acelerandoTesla.");

    if (
      variableEncendido === true &&
      variableArranque === true &&
      acelerador === true
    ) {
      console.log("Ejecutara la funcion...");
      cal_velocidadCrucero();
    }
  }

  // FIN FUNCIONAMIENTO MIENTRAS ACELERA EL CARRO

  // Funcionalidad de frenado
  frenandoTesla() {
    console.log("Se esta ejecutando el frenado con el tesla.");

    if (
      variableEncendido === true &&
      variableArranque === true &&
      acelerador === false &&
      freno === true
    ) {
      console.log("Se esta ejecutando la funcion...");
      cal_frenadoVelocidad();
    }
  }
  // Fin funcionalidad de frenado

  // FUNCIONALIDAD DE LAS LUCES ESTACIONARIAS
  luzEstacionarias() {
    if (luzEstacionarias === true) {
      document.getElementById("direccional-derecha-amarillo").style.display =
        "none";
      document.getElementById("direccional-izquierda-amarillo").style.display =
        "none";
      return (
        (varDireccionalDerecha = false),
        (varDireccionalIzquierda = false),
        (luzEstacionarias = false),
        console.log(luzEstacionarias)
      );
    } else if (luzEstacionarias === false) {
      document.getElementById("direccional-derecha-amarillo").style.display =
        "block";
      document.getElementById("direccional-izquierda-amarillo").style.display =
        "block";
      return (
        (varDireccionalDerecha = true),
        (varDireccionalIzquierda = true),
        (luzEstacionarias = true),
        console.log(luzEstacionarias)
      );
    }
  }
  // FIN LUCES ESTACIONARIAS

  // FUNCIONALIDAD DE LA DIRECCION DERECHA
  giroDerecha() {
    if (
      variableArranque === true &&
      variableEncendido === true &&
      varDireccionalDerecha === true
    ) {
      document.getElementById("tablero-control").innerHTML =
        "Girando a la rederecha....";
      return time(this.direccionalDerecha());
    } else if (variableArranque != true) {
      document.getElementById("tablero-control").innerHTML =
        "Debe de arrancar el automovil.";
    } else if (variableEncendido != true) {
      document.getElementById("tablero-control").innerHTML =
        "Debe de encerder el automovil";
    } else if (varDireccionalDerecha != true) {
      document.getElementById("tablero-control").innerHTML =
        "Debe encender la direccional derecha antes de girar.";
    }
  }
  // FIN FUNCIONALIDAD DE LA DIRECCION DERECHA
  // FUNCIONALIDAD DE LA DIRECCIONAL DERECHA
  direccionalDerecha() {
    if (varDireccionalDerecha === false) {
      document.getElementById("direccional-derecha-amarillo").style.display =
        "block";
      return (varDireccionalDerecha = true);
    } else if (varDireccionalDerecha === true) {
      document.getElementById("direccional-derecha-amarillo").style.display =
        "none";
      return (varDireccionalDerecha = false);
    }
  }
  // FIN DE LA FUNCIONALIDAD DE LA DIRECCIONAL DERECHA
  // FUNCIONALIDAD DE LA DIRECCION IZQUIERDA
  giroIzquierda() {
    if (
      variableArranque === true &&
      variableEncendido === true &&
      varDireccionalIzquierda === true
    ) {
      document.getElementById("tablero-control").innerHTML =
        "Girando a la izquierda....";
      return time(this.direccionalIzquierda());
    } else if (variableArranque != true) {
      document.getElementById("tablero-control").innerHTML =
        "Debe de arrancar el automovil.";
    } else if (variableEncendido != true) {
      document.getElementById("tablero-control").innerHTML =
        "Debe de encerder el automovil";
    } else if (varDireccionalIzquierda != true) {
      document.getElementById("tablero-control").innerHTML =
        "Debe encender la direccional izquierda antes de girar.";
    }
  }
  // FIN DE LA FUNCIONALIDAD DE LA DIRECCION IZQUIERDA
  // FUNCIONALIDAD DE LA DIRECCIONAL IZQUIERDA
  direccionalIzquierda() {
    if (varDireccionalIzquierda === false) {
      document.getElementById("direccional-izquierda-amarillo").style.display =
        "block";
      return (varDireccionalIzquierda = true);
    } else if (varDireccionalIzquierda === true) {
      document.getElementById("direccional-izquierda-amarillo").style.display =
        "none";
      return (varDireccionalIzquierda = false);
    }
  }
  // FIN DE LA FUNCIONALIDAD DE LA DIRECCIONAL IZQUIERDA
}

// Fin funcionalidades del proyecto completo

let actionTesla = new Tesla();

let mapaTesla = new Ubicacion();

// Prueba de carro al encender
window.addEventListener("load", function () {
  // document.getElementById("play").addEventListener("click",sonarCarro);
  document.getElementById("stop").addEventListener("click", callarCarro);
});

function sonarCarro() {
  var sonido = document.createElement("iframe");
  sonido.setAttribute("src", "audio/encendidoAuto3.mp3");
  document.body.appendChild(sonido);
  document.getElementById("play").removeEventListener("click", sonarCarro);
}

function callarCarro() {
  var iframe = document.getElementsByTagName("iframe");

  if (iframe.length > 0) {
    iframe[0].parentNode.removeChild(iframe[0]);
    document.getElementById("play").addEventListener("click", sonarCarro);
  }
}
