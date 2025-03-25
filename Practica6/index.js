// const Comunicacion = {
//     enviarMensaje(mensaje) {
//         console.log(`${this.nombre} envio: ${mensaje}`);
//     }
// };
// const Registro = {
//     registrarAccion(accion) {
//         console.log(`${this.nombre} realizo: ${accion}`);
//     }
// };
// class Usuario {
//     constructor(nombre) {
//         this.nombre = nombre
//     }
// }

// Object.assign(Usuario.prototype,Comunicacion, Registro);

// const usuario1 = new Usuario("Luis")
// usuario1.enviarMensaje("Hola wasamen")
// usuario1.registrarAccion("Inicio de sesion")

/////////////////////////////EJEMPLO DE PROPIEDADES PRIVADAS///////////////////////////////////////
class cuentaBancaria {
    #saldo;
    constructor(nombre, saldoInicial){
        this.nombre = nombre;
        this.#saldo = saldoInicial
    }
    depositar(monto) {
        if (monto > 0) {
            this.#saldo += monto;
            console.log(`Deposito exitoso. Nuevo Saldo: ${this.#saldo}`);
        }else{
            console.log(`Error, el monto a depositar debe ser mayor a 0`);
        }
    }
    obtenerSaldo() {
        return `Saldo disponible: ${this.#saldo}`;
    }
}

const cuenta1 = new cuentaBancaria("Luis Araujo",1000);
console.log(cuenta1.obtenerSaldo());
cuenta1.depositar(500);
console.log(cuenta1.obtenerSaldo());
//console.log(cuenta1.#saldo) ERROR POR SER PRIVADO