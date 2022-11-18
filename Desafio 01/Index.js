class usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas 
    }

    getFullName (){
        return `${this.nombre} ${this.apellido}`
    }
    
    addMascota(nuevaMascota) {
        this.mascotas.push(nuevaMascota);
        console.log(this.mascotas);
    }
    
    countMascota() {
        console.log(` cantidad de mascotas: ${this.mascotas.length}`);
    }
    
    addBook(nom, aut) {
        let obj = {nombre: nom, autor: aut}
        this.libros.push(obj)
        console.log(this.libros)
    }
    
    getBookNames() {
        const filterarray = this.libros.map(({ nombre }) => ({ nombre })
        )
        console.log(filterarray)
    }


}

let usuario1 = new usuario ("Aldo", "Antivilo",[{nombre: "Libro1", autor: "Autor1"}, {nombre:"Libro2", autor:"Autor2"}], ["fernando", "Mily"] )

console.log(usuario1.getFullName());

usuario1.getFullName()
usuario1.addMascota("loro");
usuario1.countMascota();
usuario1.addBook("El señor de los anillos", "J. R. Tolkien");
usuario1.getBookNames()