"use strict";

// Variables utilizadas

let cajaCambios = null;
let freno_Mano = false;

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

class Ubicacion {}

class Tesla {
  

  encender() {
    if (cajaCambios === 0 && freno_Mano === true) {
      document.getElementById("tablero-control").innerHTML = "Encendido.";
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
      return freno_Mano = false;
    } else {
        console.log(freno_Mano)
        document.getElementById("tablero-control").innerHTML =
        "Freno de mano activado.";
      return (freno_Mano = true, console.log(freno_Mano));
    }
  }

  marchas(num) {
      document.getElementById('tablero-control').innerHTML = `Se encuentra en la marcha: ${num}`;
    return (cajaCambios = num, console.log(cajaCambios));
  }

}

// Fin funcionalidades del proyecto completo

let encenderCarro = new Tesla();
//document.getElementById("encender_Carro").addEventListener("click", encenderCarro.acelerar(cajaCambios, freno_Mano))
//console.log(encenderCarro.acelerar(cajaCambios, freno_Mano))

let actionFreno_Mano = new Tesla();

let cajaCambios_Marchas = new Tesla();
