class Vehiculo{
    constructor(marca, modelo, anio, kilometraje, disponible){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.kilometraje = kilometraje;
        this.disponible = disponible;
    }
    get Marca(){
        return this.marca;
    }
    get MOdelo(){
        return this.modelo;
    }
    get Anio(){
        return this.anio;
    }
    get Kilometraje(){
        return this.kilometraje
    }
    get Disponible(){
        return this.disponible
    }
    aumentarKilometraje(kilometraje){
        if(kilometraje > 0 && kilometros > this.kilometraje){
            this.kilometraje += kilometros;
        }else{
            console.log(`No se puede aumentar el kilometraje`);
        }
    }
    cambiarDisponibilidad(){
        this.disponible = !this.disponible;
    }
    mostrarInformacion(){
        console.log(`Marca: ${this.marca}\nModelo: ${this.modelo}\nAnio: ${this.anio}\nKilometraje: ${this.kilometraje}\nDisponibilidad: ${this.disponible}`)
    }

}

const vehiculo = new Vehiculo ('Toyota', 'Corolla', 2020, 10000, true);
vehiculo.mostrarInformacion()
