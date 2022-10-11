import { Persona } from "./persona";

export class Futbolista extends Persona{
    private piernaHabil:string;
    private posicion: string;
    private nroCamiseta: number;
    
    constructor(paramNombre:string,paramApellido:string,paramPass:number,paramFecha:string,pierna:string,pos:string,nro:number){
    super(paramNombre,paramApellido,paramPass,paramFecha)
        this.piernaHabil=pierna;
        this.posicion=pos;
        this.nroCamiseta=nro;
    }
    setPierna(pierna:string):void{
        this.piernaHabil = pierna;
    }
    getPierna():string{
        return this.piernaHabil;
    }
    setPosicion(pos:string):void{
        this.posicion = pos;
    }
    getPosicion():string{
        return this.posicion;
    }
    setCamiseta(nro:number):void{
        this.nroCamiseta = nro;
    }
    getCamiseta():number{
        return this.nroCamiseta;
    }
    public toString():string{
    return 'Jugador: ' + this.getNombre() + " "+ this.getApellido() + ' \n '+ 'Pasaporte N°: '+this.getPasaporte() +' \n '+ 'Fecha de nacimiento: '+this.getNacimiento() +' \n '+ 'Pierna hábil: '+ this.getPierna() +' \n '+ 'Posición en el campo: ' + this.getPosicion() +' \n '+'N° de camiseta: '+ this.getCamiseta() + '\n' + '\n';
    }
}