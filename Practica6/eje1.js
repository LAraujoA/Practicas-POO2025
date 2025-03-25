const Autenticacion = {
    login(usuario) {
        console.log(`El ${usuario} ha iniciado sesion`);
    }
};
const Notificacion = {
    enviarNotificacion(mensaje) {
        console.log(`Notificacion: ${mensaje}`);
    }
};
class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

Object.assign(Usuario.prototype, Autenticacion, Notificacion);

const usuario1 = new Usuario("Alberta")
usuario1.login(usuario1.nombre);
usuario1.enviarNotificacion("Sacame del bolsillo");