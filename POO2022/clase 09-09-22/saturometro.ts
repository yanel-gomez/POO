class OximetroDePulso {
    private nivelOxigeno: number;
    private ritmoCardiaco: number;
    private prendidoApagado: boolean;
    private marca: string;
    private modelo: string;

    constructor(nivelOxigeno: number, ritmoCardiaco: number, prendidoApagado: boolean) {
        this.nivelOxigeno = nivelOxigeno;
        this.ritmoCardiaco = ritmoCardiaco;
        this.prendidoApagado = true;
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
   
    getNivelOxigeno():number{
        return this.nivelOxigeno;
    }

    medirRitmoCardiaco():void {
        let contador = 0;
        let heartbeats: number = 1;
        while (heartbeats <= 100 || heartbeats >= 60) {
            this.ritmoCardiaco = contador++
        }
    }

    getRitmoCardiaco():number{
        return this.ritmoCardiaco;
    }
}
    
let primerSaturometro = new OximetroDePulso(95, 70, true);
console.log(primerSaturometro.getNivelOxigeno);