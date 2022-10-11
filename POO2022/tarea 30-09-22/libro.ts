export class Libro{
    private nombre: string;
    private qPaginas: number;
    private autor: string;
    private editorial: string;

    constructor(pNombre:string,pqPag:number,pAutor:string,pEditorial:string){
        this.nombre = pNombre;
        this.qPaginas = pqPag;
        this.autor = pAutor;
        this.editorial = pEditorial;
    }
   
    public setNombre(nombre:string):void{
        this.nombre = nombre;
    }

    public getNombre():string{
        return this.nombre;
    }
    public setqPag(qPag:number):void{
        this.qPaginas = qPag;
    }

    public getqPag():number{
        return this.qPaginas;
    }
    public setAutor(autor:string):void{
        this.autor = autor;
    }

    public getAutor():string{
        return this.autor;
    }
    public setEditorial(edit:string):void{
        this.editorial = edit;
    }

    public getEditorial():string{
        return this.editorial;
    }
    public toString():string{
        return 'Titulo: ' + this.nombre +' \n '+ 'Cantidad de páginas: '+this.qPaginas +' \n '+ 'Autor: '+this.autor +' \n ' + 'Editorial: '+this.editorial + '';
    }
}
