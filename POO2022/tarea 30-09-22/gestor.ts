/*Armar una base de datos de libros:
Implementar la clase Libro ✓
Implementar la clase GestorLibros → debe soportar insertar/consultar libros. ✓
(Esta clase puede estar "compuesta" por un arreglo de libros) ✓
Subir las cosas a GitHub y avisar por Slack  ✓*/ 


/*Agregar a la tarea del viernes pasado.
Implementar método Eliminar ✓
Implementar método obtenerIndice
Implementar método editar libro desde la clase GestorLibros. ✓
Subir las cosas a GitHub y avisar por Slack */

import { Libro } from "./libro"

export class GestorLibros{

    private listadoDeLibros= new Array<Libro>;

    constructor(listadoParametro:Array<Libro>){
        this.listadoDeLibros = listadoParametro;
    }

    insertarLibro(paramLibro:Libro):void{
        this.listadoDeLibros.push(paramLibro);
    }

    consultarLibro(paramLibro:Libro):boolean{
        let respuesta : boolean = false;
        let posicion = -1;
        for(let i:number = 0;i<this.listadoDeLibros.length;i++){
            if(this.listadoDeLibros[i].getNombre() === paramLibro.getNombre()){
                posicion = i;
                respuesta = true;
        }
    }
        console.log(posicion);
        return respuesta;
    }

    editarLibro(posicion:number,nombreParam:string,autorParam:string):void{
        this.listadoDeLibros[posicion].setNombre(nombreParam);
        this.listadoDeLibros[posicion].setAutor(autorParam);
    }

    eliminarLibro(paramLibro:Libro):void{
        for(let i:number = 0;i<this.listadoDeLibros.length;i++){
            if(this.listadoDeLibros[i].getNombre() === paramLibro.getNombre()){
                this.listadoDeLibros.splice(i,1);
            }
        }
    }
    toStringGestor():string{
        return this.listadoDeLibros.toString()
    }
   }


