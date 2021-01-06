"use strict";

// Variables para la localizacion en el mapa
let numParadas = 0;
let distanciaRecorrido = 0;
let timeParada = 0;
let kmXParada = 0;
// Fin variables de ubicacion

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

function alerta() {
  var mensaje;
  var opcion = confirm("Clicka en Aceptar o Cancelar");
  if (opcion == true) {
    mensaje = "Has clickado OK";
  } else {
    mensaje = "Has clickado Cancelar";
  }
  document.getElementById("ejemplo").innerHTML = mensaje;
}

// Funcionalidades del proyecto completo

// Funcion de tiempo para las direccionales
    function time(e) {
        setTimeout(function () {
            e.style.backgroundColor = 'yellow';

        }, 100);
    };
// Fin

// Creacion de la funcionalidad de las teclas

window.addEventListener(
  "keydown",
  function (event) {
    // Giros a la derecha y a la izquierda
    if (event.keyCode == 82) {
      actionTesla.giroDerecha();
    }
    if(event.keyCode == 76){
        actionTesla.giroIzquierda();
    }

    // Freno de mano
    if(event.keyCode == 32){
        actionTesla.funcionFrenoMano();
    }

    // Direccionales
    if(event.keyCode == 39){
        actionTesla.direccionalDerecha();
    }
    if(event.keyCode == 37){
        actionTesla.direccionalIzquierda();
    }
    if(event.keyCode == 40){
        actionTesla.luzEstacionarias();
    }

    // Caja de marchas

    // Marcha N
    if(event.keyCode == 78){
        actionTesla.marchas(0);
    }
    // Marcha 1
    if(event.keyCode == 49){
        actionTesla.marchas(1);
    }
    // Marcha 2
    if(event.keyCode == 50){
        actionTesla.marchas(2);
    }
    // Marcha 3
    if(event.keyCode == 51){
        actionTesla.marchas(3);
    }
    // Marcha 4
    if(event.keyCode == 52){
        actionTesla.marchas(4);
    }
    // Marcha R
    if(event.keyCode == 53){
        actionTesla.marchas(5);
    }

    console.log(event);
  },
  false
);

// Fin funcionalidad de las teclas

class Ubicacion {
  lugarDestino() {}
}

class Tesla {
  encender() {
    if (cajaCambios === 0 && freno_Mano === true) {
      document.getElementById("tablero-control").innerHTML = "Encendido...";
      return (variableEncendido = true), console.log(variableEncendido);
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
        cajaCambios === 1
      ) {
        document.getElementById("tablero-control").innerHTML = "Arrancando...";
        document.getElementById("tablero-control").innerHTML =
          "Suelte el freno de pie y acelere y suelte el clutch progresivamente a la vez que acelera.";
        return variableArranque = true;
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
      } else if (acelerador === false) {
        document.getElementById("tablero-control").innerHTML =
          "El acelerador se encuentra activado.";
        return (acelerador = true), console.log(acelerador), this.arranque();
      }
    } else {
      document.getElementById("tablero-control").innerHTML =
        "El carro no se encuentra encendido.";
    }
  }

  // FUNCIONALIDAD DE LAS LUCES ESTACIONARIAS
  luzEstacionarias(){
      if(luzEstacionarias === true){
        let direccional_derecha = document.getElementById('direccional-derecha');
        let direccional_izquierda = document.getElementById('direccional-izquierda');
        return (time(direccional_derecha),time(direccional_izquierda), console.log(luzEstacionarias));
      }else if(luzEstacionarias === false){
          return (luzEstacionarias = true, console.log(luzEstacionarias));
      }
  }
  // FIN LUCES ESTACIONARIAS

  // FUNCIONALIDAD DE LA DIRECCION
  giroDerecha() {
    if (variableArranque === true && variableEncendido === true && varDireccionalDerecha === true) {
        document.getElementById('tablero-control').innerHTML = 'Girando a la rederecha.';
    } else if (variableArranque != true) {
      document.getElementById("tablero-control").innerHTML =
        "Debe de arrancar el automovil.";
    } else if (variableEncendido != true) {
      document.getElementById("tablero-control").innerHTML =
        "Debe de encerder el automovil";
    }else if(varDireccionalDerecha != true){
        document.getElementById('tablero-control').innerHTML = 'Debe encender la direccional derecha antes de girar.';
    }
  }

  direccionalDerecha() {
      if(varDireccionalDerecha === false){
          document.getElementById('direccional-derecha').style.backgroundColor = 'yellow';
          return varDireccionalDerecha = true;
      }else if(varDireccionalDerecha === true){
        document.getElementById('direccional-derecha').style.backgroundColor = 'transparent';
          return varDireccionalDerecha = false;
      }
  }

  giroIzquierda() {
    if (variableArranque === true && variableEncendido === true && varDireccionalIzquierda === true) {
        document.getElementById('tablero-control').innerHTML = 'Girando a la izquierda.';
    } else if (variableArranque != true) {
      document.getElementById("tablero-control").innerHTML =
        "Debe de arrancar el automovil.";
    } else if (variableEncendido != true) {
      document.getElementById("tablero-control").innerHTML =
        "Debe de encerder el automovil";
    }else if(varDireccionalIzquierda != true){
        document.getElementById('tablero-control').innerHTML = 'Debe encender la direccional izquierda antes de girar.';
    }
  }

  direccionalIzquierda() {
    if(varDireccionalIzquierda === false){
        document.getElementById('direccional-izquierda').style.backgroundColor = 'yellow';
        return varDireccionalIzquierda = true;
    }else if(varDireccionalIzquierda === true){
        document.getElementById('direccional-izquierda').style.backgroundColor = 'transparent';
        return varDireccionalIzquierda = false;
    }
  }
}

// Fin funcionalidades del proyecto completo

let actionTesla = new Tesla();
