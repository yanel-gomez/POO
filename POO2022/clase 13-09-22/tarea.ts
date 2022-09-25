/*Crear la clase Rectangulo con las siguientes caracteristicas y su constructor: base, altura 
La funcionalidad de la clase debe ser:

-     Calcular el area
-     Compararlo con otro rectangulo. Devolver 1 si es mayor, 0 son iguales y -1 si es menor.
-     Determinar si es un cuadrado(si base y altura son iguales).
-     Determinar si esta acostado o parado(si el alto es mas que el ancho).*/

class Rectangulo {
    base:number;
    altura:number;

    constructor(pBase:number,pHeight:number){
        this.base= pBase;
        this.altura = pHeight;
    }

    public setBase(baseRectangulo: number): void {
        this.base = baseRectangulo;
    }
    public getBase(): number {
        return this.base;
    }
    public setHeight(alturaRectangulo: number): void {
        this.altura = alturaRectangulo;
    }
    public getHeight(): number {
        return this.altura;
    }
    getArea():number{
        return (this.base*this.altura)
    }
   compareRectangles():void{
        let rec1:number = 5
        let rec2:number = 6
        if (rec1<rec2){
            console.log("-1");
        }else if (rec1>rec2){
            console.log("1");
        }else if (rec1=rec2){
            console.log("0");
        }
    }
    isSquare():void{
        let base1= this.base;
        let altura1 = this.altura;
        if (base1 === altura1){
            console.log("Es un cuadrado.")
        }else{
            console.log("No es un cuadrado.")
        }
    }
    isVertical():void{
        if(this.base<this.altura){
        console.log("Este rectángulo está en posición vertical.")
        }else{
            console.log("Este rectángulo está en posición horizontal.")
        }
    }
}

let rect1= new Rectangulo(15,25);
let rect2= new Rectangulo(30,10);
let rect3= new Rectangulo(20,20);

console.log(rect1.getArea());
console.log(rect2.isVertical());
console.log(rect3.isSquare());