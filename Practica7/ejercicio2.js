class Vehiculo {
    //Metodo
    moverse() {
        throw new Error ("Este metodo debe ser implementado por las subclases o clases hijas");
    }
}

class Coche extends Vehiculo {
    constructor(velocidad) {
        super();
        this.velocidad = velocidad;
    }
    moverse() {
        console.log(`El cohce se mueve a ${this.velocidad} km en la carretera`)
    }
}

class Bicicleta extends Vehiculo {
    constructor(velocidad) {
        super();
        this.velocidad = velocidad;
    }
    moverse() {
        console.log(`La bicicleta se mueve a ${this.velocidad} km en la ciclovia`)
    }
}

class Avion extends Vehiculo {
    constructor(velocidad) {
        super();
        this.velocidad = velocidad;
    }
    moverse() {
        console.log(`El Avion se mueve a ${this.velocidad} km/h en el cielo`)
    }
}

function mostrarVehiculos (vehiculos) {
    vehiculos.forEach(vehiculo => {
        (vehiculo.moverse());
    });
}

const vehiculos = [
    new Coche(60),
    new Bicicleta(10),
    new Avion(130)
];

mostrarVehiculos(vehiculos);