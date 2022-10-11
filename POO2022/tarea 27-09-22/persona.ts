export class Persona{
    private nombre:string;
    private apellido:string;
    private nroPasaporte:number;
    private fechaNacimiento:string;
    
    public constructor(paramNombre:string,paramApellido:string,paramPass:number,paramFecha:string){
        this.nombre=paramNombre;
        this.apellido=paramApellido;
        this.nroPasaporte=paramPass;
        this.fechaNacimiento=paramFecha;
    }
    getNombre():string{
        return this.nombre;
    }
    setNombre(nombre:string):void{
        this.nombre = nombre;
    }
    getApellido():string{
        return this.apellido;
    }
    setApellido(apellido:string):void{
        this.apellido = apellido;
    }
    getPasaporte():number{
        return this.nroPasaporte;
    }
    setPasaporte(pasaporte:number):void{
        this.nroPasaporte = pasaporte;
    }
    getNacimiento():string{
        return this.fechaNacimiento;
    }
    setNacimiento(nac:string):void{
        this.fechaNacimiento = nac;
    }

}