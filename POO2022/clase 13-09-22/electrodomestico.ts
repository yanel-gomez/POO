/*Crear la clase Electrodomestico con las siguientes caracterisiticas: nombre, precio base, color, consumo energetico y peso 
(implementar un constructor con todos los parametros)
La funcionalidad de la clase debe ser:
Todos los metodos get y set
Comprobar si el electrodomestico es de bajo consumo (valor booleano)
Calcular el balance (costo dividido peso)
Indicar si es un producto de alta gama (balance mayor que 3)*/

class Appliance {
    name: string;
    basePrice: number;
    color: string;
    powerConsumption: boolean;
    weight: number;

    constructor(paramNombre: string, paramPrecio: number, paramColor: string, paramConsumo: boolean, paramPeso: number) {
        this.name = paramNombre;
        this.basePrice = paramPrecio;
        this.color = paramColor;
        this.powerConsumption = paramConsumo;
        this.weight = paramPeso;
    }

    public setName(applianceName: string): void {
        this.name = applianceName;
    }
    public getName(): string {
        return this.name;
    }

    public setBasePrice(appliancePrice: number): void {
        this.basePrice = appliancePrice;
    }
    public getBasePrice(): number {
        return this.basePrice;
    }
    public setColor(applianceColor: string): void {
        this.color = applianceColor;
    }
    public getColor(): string {
        return this.color;
    }
    public setPowerConsumption(applianceConsumption: boolean): void {
        this.powerConsumption = applianceConsumption;
    }
    public getPowerConsumption(): boolean {
        return this.powerConsumption;
    }
    public setWeight(applianceWeight:number):void{
        this.weight = applianceWeight;
        }
    public getWeight():number{
        return this.weight;
        }

    isLowConsumption(): boolean {
        if (this.powerConsumption === true) {
            this.powerConsumption = false
            console.log("No es bajo consumo");
        } else {
            this.powerConsumption = true;
            console.log("Es bajo consumo");
        }
        return this.powerConsumption;
    }
    calculateBalance():number {
        let cost:number = 15000;
        let balance:number = (cost/this.weight);
        return balance;
    }
    isHighEnd():void {
        if (this.calculateBalance >== 4) {
            console.log("Es alta gama");
        }else{
            console.log("No es alta gama");
        }
    }
}


let firstTv= new Appliance("Samsung",200,"Black",true,23);
console.log(firstTv.getColor());
console.log(firstTv.calculateBalance());