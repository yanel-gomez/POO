class Antena{
    private tarjetaConDatos:string;

    constructor(datos:string){
        this.tarjetaConDatos = datos;
    }
}


class Decodificador{
        private calidadHD:boolean;
        private estaPrendido:boolean;
        private antenaDelDecodificador:Antena;

        constructor(calidadParametro:boolean,prendidoParametro:boolean,antenaParametro:Antena){
            this.calidadHD = calidadParametro;
            this.estaPrendido = prendidoParametro;
            this.antenaDelDecodificador = antenaParametro;
        }
        
        public prenderApagar():void{
            if(this.estaPrendido === true){
                this.estaPrendido=false;
            }else{
                this.estaPrendido=true;
            }
        }
}

class Televisor{

        private cantidadDePulgadas:number;
        private marca:string;
        private esSmart:boolean;
        private estaPrendido:boolean;
        private volumenActual:number;
        private canalActual:number;
        private decodificadorDeTv: Decodificador;

        constructor(marcaUsuario:string,pulgadasUsuario:number,smartUsuario:boolean,decodificadorParametro:Decodificador, canalUsuario:number){
            this.marca = marcaUsuario;
            this.cantidadDePulgadas =pulgadasUsuario;
            this.esSmart = smartUsuario;
            this.canalActual = canalUsuario;
            this.estaPrendido = false;
            this.decodificadorDeTv = decodificadorParametro;
            
        }

        public cambiarDeCanal(canalUsuario:number):void{
                this.canalActual = canalUsuario;
        }

        public subir1canal():void{
            this.canalActual = this.canalActual++;
        }
        public bajar1canal():void{
            this.canalActual = this.canalActual--;
        }
        public consultarCanalActual():number{
            return this.canalActual;
        }


        public subirVolumen1():void{
            this.volumenActual = this.volumenActual++;
        }
        public bajarVolumen1():void{
            this.volumenActual = this.volumenActual--;
        }

        public consultarVolumenActual():number{
            return this.volumenActual;
        }

        public prender():void{
            this.estaPrendido = true;
        }

        public apagar():void{
            this.estaPrendido = false;
        }

        public consultarSiEsSmart():boolean{
            return this.esSmart;
        }

        public consultarMarca():string{
            return this.marca;
        }
        public consultarPulgadas():number{
            return this.cantidadDePulgadas;
        }

}

let antenaDecoSony:Antena = new Antena("Decodificador para sony");
let antenaDecoLg:Antena = new Antena("Decodificador para LG");


let decoSony:Decodificador = new Decodificador(true,true,antenaDecoSony);
let decoLg:Decodificador = new Decodificador(true,false,antenaDecoLg);


let tvSony:Televisor = new Televisor("Sony",45,true,decoSony,52);
let tvSamsung:Televisor = new Televisor("Samsung",50,false,decoLg,96);
let tvLg:Televisor = new Televisor("Lg",60,true,decoLg,25);

tvSony.consultarMarca();
tvSony.cambiarDeCanal(45);
tvSony.subirVolumen1(); 

tvSony.subirVolumen1();
tvSony.apagar();