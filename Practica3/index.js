//Plantilla
class Libro{
    constructor(titulo, autor, aniopublicacion){
        this.titulo = titulo;
        this.autor= autor;
        this.aniopublicacion= aniopublicacion;
    }
}

class Biblioteca{
    constructor(){
        this.libros = []
    }
    agregarlibro(titulo, autor, aniopublicacion){
        //Utilizamos plantilla libro
        const nuevoLibro = new Libro(titulo, autor, aniopublicacion);
        this.libros.push(nuevoLibro);
        console.log(El libro ${titulo} ha sido agregado a la bibilioteca);
    }
    buscarPortitulo(titulo){
        const LibroEncontrado= this.libros.filter(libro => libro.titulo.toLowerCase().includes(titulo.toLowerCase()));
        if(LibroEncontrado > 0){
            console.log(Libro encontrado);
            LibroEncontrado.forEach(libro =>  {
                console.log(${libro.titulo} de ${libro.autor} publicado en ${libro.aniopublicacion})
            })
        } else {
            console.log("Nose encontro libro condicho titulo");
        }
    }
    mostrarLibros(){
        if(this.libros.length > 0){
            console.log("LIBROS DISPONIBLES:")
            this.libros.forEach(libro => {
                console.log(${libro.titulo} de ${libro.autor} publicado en ${libro.aniopublicacion})

            })
        }else {
            console.log(Biblioteca vacia!)
        }
    }
}

const miBiblioteca =new Biblioteca();
//miBiblioteca.mostrarLibros();
miBiblioteca.agregarlibro("Primer titulo", "Yo", "2025")
miBiblioteca.mostrarLibros();