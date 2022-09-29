class OximetroDePulso {
    private nivelOxigeno: number;
    private ritmoCardiaco: number;
    private prendidoApagado: boolean;
    private marca: string;
    private modelo: string;

    constructor(nivelOxigeno: number, ritmoCardiaco: number, prendidoApagado: boolean) {
        this.nivelOxigeno = nivelOxigeno;
        this.ritmoCardiaco = ritmoCardiaco;
        this.prendidoApagado = prendidoApagado;
        this.marca = "Beurer"
        this.modelo = "PO 30"
    }

    getNivelOxigeno():number{
        return this.nivelOxigeno;
    }

    setNivelOxigeno(oxigeno:number):void{
        this.nivelOxigeno = oxigeno;
    }

    getRitmoCardiaco():number{
        return this.ritmoCardiaco;
    }

    setRitmoCardiaco(ritmo:number):void{
        this.ritmoCardiaco = ritmo;
    }

    getPrendidoApagado():boolean{
        return this.prendidoApagado;
    }

    setPrendidoApagado(onOff:boolean){
        this.prendidoApagado= onOff;
    }
    getMarca():string{
        return this.marca;
    }
    getModelo():string{
        return this.modelo;
    }


    prenderApagar(): void {
        if (this.prendidoApagado === true){
        this.prendidoApagado= false;
        console.log("Se apaga")
        }else{
        this.prendidoApagado=true;
        console.log("Se prende")
    }
    }
         
    medirRitmoCardiaco():void {
        let contador = 0;
        let heartbeats = contador++
        if (heartbeats <= 100 || heartbeats >= 60) {
            console.log("Su ritmo cardíaco es normal.")
        }else{
            console.log("Usted presenta arritmia cardíaca.")
        }
    }
}
    
let primerSaturometro = new OximetroDePulso(95, 70, true);
console.log(primerSaturometro.getNivelOxigeno());
console.log(primerSaturometro.medirRitmoCardiaco());