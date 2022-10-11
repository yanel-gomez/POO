import { Persona } from "./persona";

export class Entrenador extends Persona{
    private funcion:string;
    constructor(paramNombre:string,paramApellido:string,paramPass:number,paramFecha:string,funcion:string){
    super(paramNombre,paramApellido,paramPass,paramFecha)
        this.funcion=funcion;
    }
    setFuncion(funcion:string):void{
        this.funcion = funcion;
    }
    getFuncion():string{
        return this.funcion;
    }
    public toString():string{
        return 'Entrenador: ' + this.getNombre() + " "+ this.getApellido() + ' \n '+ 'Pasaporte N°: '+this.getPasaporte() +' \n '+ 'Fecha de nacimiento: '+this.getNacimiento() +' \n '+ 'Función: '+ this.getFuncion() + '\n' + '\n';
        }
}