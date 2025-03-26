//Clase Base
class Figura {
    //Metodo
    calcularArea() {
        throw new Error ("Este metodo debe ser implementado por las subclases o clases hijas");
    }
}

class Circulo extends Figura {
    constructor(radio) {
        super();
        this.radio = radio;
    }
    //Polimorfismo
    calcularArea() {
        return Math.PI * this.radio **2;
    }
}

class Rectangulo extends Figura {
    constructor(ancho, alto) {
        super();
        this.ancho = ancho;
        this.alto = alto;
    }
    //Polimorfismo
    calcularArea() {
        return this.ancho * this.alto
    }
}

class Triangulo extends Figura {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}

function calcularAreas (figuras) {
    figuras.forEach(figura => {
        console.log(`Area de ${figura.constructor.name}: ${figura.calcularArea().toFixed(2)}`)
    });
}

const figuras = [
    new Circulo(5),
    new Rectangulo(4, 6),
    new Triangulo(3, 8)
];

calcularAreas(figuras);