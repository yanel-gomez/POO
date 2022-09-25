class RegistroAutomotor{

    public listadoDeAutos:Auto[];

    constructor(listadoParametro:Auto[]){
        this.listadoDeAutos = listadoParametro;
    }

    consultarSiExisteVehiculo(paramAuto:Auto):boolean{
        let respuesta : boolean = false;
        let posicion = -1;
        for(let i:number = 0;i<this.listadoDeAutos.length;i++){
            if(this.listadoDeAutos[i].getPatente() === paramAuto.getPatente()){
                posicion = i;
                respuesta = true;
        }
    }
        console.log(posicion);
        return respuesta;
    }


    registrarVehiculo(paramAuto:Auto):void{
        this.listadoDeAutos.push(paramAuto);
    }


    eliminarVehiculo(paramAuto:Auto):void{
        for(let i:number = 0;i<this.listadoDeAutos.length;i++){
            if(this.listadoDeAutos[i].getPatente() === paramAuto.getPatente()){
                this.listadoDeAutos.splice(i,1);
            }
        }
    }

    editarVehiculo(posicion:number,patenteParametro:string,marcaParametro:string):void{
        this.listadoDeAutos[posicion].setPatente(patenteParametro);
        this.listadoDeAutos[posicion].setMarca(marcaParametro);
    }


   }


class Auto{

    private patente:string;
    private marca:string;
    private modelo:string;
    private anio:number;

    constructor(patenteParametro:string,marcaParametro:string,modeloParametro:string,anioParametro:number){
        this.patente = patenteParametro;
        this.marca = marcaParametro;
        this.modelo = modeloParametro;
        this.anio = anioParametro
    }

    public setAnio(paramAnio:number):void{
        this.anio = paramAnio;
    }
    public getAnio():number{
        return this.anio;
    }

    public setPatente(paramPatente:string):void{
        this.patente = paramPatente;
    }
    public getPatente():string{
        return this.patente;
    }
    public setMarca(paramMarca:string):void{
        this.marca = paramMarca;
    }
    public getMarca():string{
        return this.marca;
    }
    public setModelo(paramModelo:string):void{
        this.modelo = paramModelo;
    }
    public getModelo():string{
        return this.modelo;
    }
}


let auto1:Auto = new Auto("AAA111","Ford","Fiesta",2012);
let auto2:Auto = new Auto("BBB111","Fiat","Uno",2015);
let auto3:Auto = new Auto("CCC111","Chevrolet","Astra",2018);


let arregloDeAutos:Auto[] = [auto1,auto2,auto3];


let registroAutomotorDeTDF:RegistroAutomotor = new RegistroAutomotor(arregloDeAutos);

let auto4:Auto = new Auto("DDD111","BMW","Roaster",2022);

//No lo encuentra porque no esta registrado
let respuestaRecibida:boolean = registroAutomotorDeTDF.consultarSiExisteVehiculo(auto4);
console.log(respuestaRecibida);

//Lo registro
registroAutomotorDeTDF.registrarVehiculo(auto4);

//lo vuelvo a buscar
console.log("respuesta a la segunda consulta");
let respuestaRecibida2:boolean = registroAutomotorDeTDF.consultarSiExisteVehiculo(auto4);
console.log(respuestaRecibida2);

//editar datos del auto
console.log("edito el BMW porque lo registre mal");
registroAutomotorDeTDF.editarVehiculo(3,"EEE111","Mercedez");
console.log(auto4);


//lo elimino del registro
registroAutomotorDeTDF.eliminarVehiculo(auto4);


//vuelvo a consultar si existe para saber si lo elimino correctamente
let respuestaRecibida3:boolean = registroAutomotorDeTDF.consultarSiExisteVehiculo(auto4);
console.log(respuestaRecibida3);