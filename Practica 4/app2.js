class Estudiante{
    _nombre;
    _edad;
    _promedio;
    _activo;
    constructor(nombre, edad, promedio, activo){
        this._nombre = nombre;
        this._edad = edad;
        this._promedio = promedio;
        this._activo = activo;
    }
    getNombre(){
        return this._nombre;
    }
    getEdad(){
        return this._edad;
    }
    getPromedio(){
        return this._promedio;
    }
    getActivo(){
        return this._activo;
    }
    setNombre(nombre){
        this._nombre = nombre;
    }
    setEdad(edad){
        this._edad = edad;
    }
    setPromedio(promedio){
        this._promedio = promedio;
    }
    setActivo(activo){
        this._activo = activo;
    }

    actualizarPromedio(nuevaCalificacion){
        if (this._edad > 0 && nuevaCalificacion > 0 && nuevaCalificacion <= 10 && this._activo){
            this._promedio = nuevaCalificacion;
        }else{
            console.log('No se puede realizar la actualizacion del promedio.')
        }
    }
    cambiarEstado(){
        this._activo = !this._activo;
    }
    mostrarInformacion(){
        console.log(`Nombre: ${this._nombre}`);
        console.log(`Edad: ${this._edad}`);
        console.log(`Promedio: ${this._promedio}`);
        console.log(`Activo: ${this._activo}`);
    }
}
const estudiante = new Estudiante ('Kevin', 20, 4, true);
estudiante.mostrarInformacion()