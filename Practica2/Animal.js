   //Clase
class animal {
    //Atributos
    #name; //Atributo privado
    _raza; //Atributo protegido
    color; //Atributo publico
    //Metodos
    constructor(name, raza, color){
        this.#name = name;
        this._raza = raza;
        this.color = color;

    }
    //metodo
    //metodos Getters
    getName(){
        return this.#name;
    }
    sonido(){
        console.log(`El animal esta haciendo un sonido...`)
    }
}

module.exports = animal;