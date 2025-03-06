class Empleado {
    #sueldo
    constructor(nombre, puesto, sueldo) {
        this.nombre = nombre;
        this.puesto = puesto;
        this.sueldo = sueldo;
    }

    getSueldo(){
        return this.sueldo
    }

    setSueldo(nuevoSueldo) {
        if(nuevoSueldo > this.#sueldo){
            this.#sueldo = nuevoSueldo;
        }else{
            console.log("pito")
        }
    }
    mostrarInfo(){
        console.log(`Empleado: ${this.nombre}, puesto: ${this.puesto}, sueldo: ${this.#sueldo}`);
    }
}
const empleado1 = new Empleado("Luis","Stripper","600")
empleado1.mostrarInfo();
empleado1.setSueldo(100);
empleado1.mostrarInfo();
empleado1.setSueldo(2000);
empleado1.mostrarInfo();
