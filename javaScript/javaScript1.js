"use strict";

// VARAIBLES MIENTRAS CONDUCE

// Variables para calcular la velocidad, y la distacia recorrida
let velocidadAcelerando = 0;
let distanciaRecorrida_velocidad = 0;
let timeViaje_Tesla = 0;
// Fin de las variables para calcular

// Variables para la localizacion en el mapa
let numParadas = 0;
let distanciaRecorrido = 0;
let timeParada = 0;
let kmXParada = 0;
// Fin variables de ubicacion

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
  console.log(velocidadAcelerando, cajaCambios);

  if (velocidadAcelerando < 30 && cajaCambios === 1) {
    console.log("Se ejecuto la primera velocidad.");
    document.getElementById(
      "tablero-control-velocidad-actual"
    ).innerHTML = `Velocidad: ${(velocidadAcelerando += 2)} KM/H`;
    setTimeout(cal_velocidadCrucero, 500);
  } else if (velocidadAcelerando >= 30 && cajaCambios === 1) {
    console.log("Se ejecuto el else if para la marcha 1.");
    document.getElementById("tablero-control").innerHTML =
      "Cambie a la siguiente marcha 2.";
  }

  if (
    velocidadAcelerando >= 30 &&
    velocidadAcelerando < 60 &&
    cajaCambios === 2
  ) {
    console.log("Se ejecuto la segunda velocidad.");
    document.getElementById(
      "tablero-control-velocidad-actual"
    ).innerHTML = `Velocidad: ${(velocidadAcelerando += 2)} KM/H`;
    setTimeout(cal_velocidadCrucero, 500);
  } else if (
    velocidadAcelerando > 30 &&
    velocidadAcelerando === 60 &&
    cajaCambios === 2
  ) {
    console.log("Se ejecuto el else if para la marcha 2.");
    document.getElementById("tablero-control").innerHTML =
      "Cambie a la siguiente marcha 3.";
  }

  if (
    velocidadAcelerando >= 60 &&
    velocidadAcelerando < 86 &&
    cajaCambios === 3
  ) {
    console.log("Se ejecuto la tercera velocidad");
    document.getElementById(
      "tablero-control-velocidad-actual"
    ).innerHTML = `Velocidad: ${(velocidadAcelerando += 2)} KM/H`;
    setTimeout(cal_velocidadCrucero, 500);
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
    cajaCambios === 4
  ) {
    console.log("Se ejecuto la cuarta velocidad.");
    document.getElementById(
      "tablero-control-velocidad-actual"
    ).innerHTML = `Velocidad: ${(velocidadAcelerando += 2)} KM/H`;
    setTimeout(cal_velocidadCrucero, 500);
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
  if (velocidadAcelerando >= 2 && velocidadAcelerando > 0) {
    document.getElementById(
      "tablero-control-velocidad-actual"
    ).innerHTML = `Velocidad: ${(velocidadAcelerando -= 2)} KM/H`;
    setTimeout(cal_frenadoVelocidad, 500);
  }
}

function tiempoViaje(distanciaRecorrido, velocidadAcelerando) {
  let funVar_tiempoViaje = distanciaRecorrido / velocidadAcelerando;
  return funVar_tiempoViaje;
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
      (kmXParada = Math.floor(distanciaRecorrido / numParadas)),
      console.log(numParadas),
      console.log(timeParada),
      console.log(kmXParada)
    );
  }

  distanciaRecorrido() {
    var valor = prompt("Que distacia recorreras?", "");
    if (valor != "") {
      alert("Gracias por ingresar el valor: " + valor);
      return (
        (distanciaRecorrido = parseInt(valor, 10)),
        this.calcularDestino(),
        console.log(distanciaRecorrido)
      );
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
        return (freno = true), console.log(freno);
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
      } else if (acelerador === false && cajaCambios === 0) {
        document.getElementById("tablero-control").innerHTML =
          "El acelerador se encuentra activado.";
        return (
          (acelerador = true),
          console.log(acelerador),
          this.arranque(),
          this.acelerandoTesla()
        );
      } else if (acelerador === false && cajaCambios != 0) {
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
      console.log(cal_velocidadCrucero());
    }
  }

  // FIN FUNCIONAMIENTO MIENTRAS ACELERA EL CARRO

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
