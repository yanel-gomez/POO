class Boton{
    private tipoBoton:string;
    constructor(tipo:string){
    this.tipoBoton=tipo;
    }
    public getTipoBoton():string{
    return this.tipoBoton
    }
    }
    
class Televisor {
    private estaPrendido: boolean;
    private volumenActual: number;
    private canalActual: number;
    private boton:Boton;

    constructor(paramPrendido: boolean, paramVolumen: number, paramCanal: number, paramBoton: Boton) {
        this.estaPrendido = paramPrendido;
        this.volumenActual = paramVolumen;
        this.canalActual = paramCanal;
        this.boton = paramBoton;
    }

    public setearVolumen(volumenDeUsuario: number): void {
        this.volumenActual = volumenDeUsuario;
    }
    public verVolumen(): number {
        return this.volumenActual;
    }
    public setearCanal(canalDeUsuario: number): void {
        this.canalActual = canalDeUsuario;
    }
    public verCanalActual(): number {
        return this.canalActual;
    }
    public prenderApagar(): void {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
            console.log("se apaga")
        } else {
            this.estaPrendido = true;
            console.log("se prende")
        }
    }
    }    

let botonVolumen: Boton = new Boton("volumen+");

let tvLG = new Televisor(false, 15, 58,botonVolumen);
let tvSamsung = new Televisor(true, 22, 45,botonVolumen);
let tvSony = new Televisor(false, 78, 65,botonVolumen);

tvLG.setearCanal(44);
let canalLG: number = tvLG.verCanalActual();

tvSamsung.prenderApagar();
console.log("Canal " + canalLG);
