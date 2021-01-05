'use strict';
let cajaCambios = 2;
let freno_Mano = true;

function encendido() {
    if(cajaCambios === 0 && freno_Mano === true){
    document.getElementById("tablero-control").innerHTML = "Encendido";
    }else if(cajaCambios != 0){
        document.getElementById("tablero-control").innerHTML = "Poner en neutra";
    }else if(freno_Mano != true){
        document.getElementById("tablero-control").innerHTML = "Poner el freno de mano";
    }
}

function derecha() {
    document.getElementById("tablero-control").innerHTML = "Girando a la derecha";
}

function alerta()
    {
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

class carro {
    constructor(acelerar, frenar, closh, estacionarias, giroDerecha, giroIzquierda, frenoMano){
        this.acelerar = acelerar;
        this.frenar = frenar;
        this.closh = closh;
        this.estacionarias = estacionarias;
        this.giroDerecha = giroDerecha;
        this.giroIzquierda = giroIzquierda;
        this.frenoMano = frenoMano;
    }

    acelerar(){
        if(this.acelerar === true){
            console.log(`El carro esta acelerarndo`);
        } 
    }

};

// Fin funcionalidades del proyecto completo


//Ejemplo de la clase

class Pizza {
    constructor(masa,tamano,ingredientes){
        this.masa = masa;
        this.tamano = tamano;
        this.ingredientes = ingredientes;
    }

    preparar(){
        console.log(`Preparando pizza ${this.tamano}, ${this.masa}, 
        Ingredientes: ${this.ingredientes}
        `);
    }

    hornear(){
        console.log(`La pizza se esta horneando.`);
        return this;
    }

   empacar(){
       console.log(`Empacando la pizza...`);
       console.log(`Pizza lista para ser enviada... :)`);
       return this;
   } 

}

const pizzaChampinones = new Pizza("Masa Gruesa","Mediana",["Champiñones","pollo","queso"]);

console.log(pizzaChampinones.preparar());
console.log(pizzaChampinones.hornear());
console.log(pizzaChampinones.empacar());

const pizzaCarnes = new Pizza("Masa Delgada","Mediana",["carne","queso"]);
console.log(pizzaCarnes.preparar());
console.log(pizzaCarnes.hornear());
console.log(pizzaCarnes.empacar());


class Combos extends Pizza{

    constructor(combo,cantidad,tamano,masa,ingredientes,bebida,postre){
        super(tamano,masa,ingredientes);
        this.combo = combo;
        this.cantidad = cantidad;
        this.bebida = bebida;
        this.postre = postre;
    }

    elegirCombo(){
        this.preparar();
        this.hornear();
        this.empacar();

        console.log(` Pedido: Combo ${this.combo} - ${this.cantidad}
        Pizza ${this.tamano}, ${this.masa}, ${this.ingredientes} + ${this.bebida}
        ${this.postre}
        `);

        return this;
    }
}

const Pedido = new Combos("Personal",1,"Mediana","Masa tradicional",["queso","peperoni"],"Coca-cola","Rollitos de canela");

console.log(Pedido.elegirCombo());