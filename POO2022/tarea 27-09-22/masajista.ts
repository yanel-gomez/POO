import { Persona } from "./persona";

export class Masajista extends Persona{
    private profesion:string;
    private matricula:number;
    super(prof:string,mat:number){
        this.profesion=prof;
        this.matricula=mat;
    }
    setProfesion(prof:string):void{
        this.profesion = prof;
    }
    getProfesion():string{
        return this.profesion;
    }

    setMatricula(mat:number):void{
        this.matricula = mat;
    }
    getMatricula():number{
        return this.matricula;
    }
    public toString():string{
        return 'Miembro del Plantel Médico: ' + this.getNombre() + " "+ this.getApellido() + ' \n '+ 'Pasaporte N°: '+this.getPasaporte() +' \n '+ 'Fecha de nacimiento: '+this.getNacimiento() +' \n '+ 'Profesión: '+ this.getProfesion() + '\n' + 'Matrícula N°: '+ this.getMatricula() + '\n' + '\n';
        }
}