const Animal = require('./Animal');
class Gato extends Animal{
    constructor(nombre, raza, color){
        super(nombre, raza, color)
    }
    sonido(){
        console.log(' Miau Miau')

    }
}
let gato1= new Gato("Michi", "Albino","Negro");
gato1.sonido();