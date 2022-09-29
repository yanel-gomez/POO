/*Crear la clase Rectangulo con las siguientes caracteristicas y su constructor: base, altura
La funcionalidad de la clase debe ser:

-     Calcular el area
-     Compararlo con otro rectangulo. Devolver 1 si es mayor, 0 son iguales y -1 si es menor.
-     Determinar si es un cuadrado(si base y altura son iguales).
-     Determinar si esta acostado o parado(si el alto es mas que el ancho).*/
var Rectangulo = /** @class */ (function () {
    function Rectangulo(pBase, pHeight) {
        this.base = pBase;
        this.altura = pHeight;
    }
    Rectangulo.prototype.setBase = function (baseRectangulo) {
        this.base = baseRectangulo;
    };
    Rectangulo.prototype.getBase = function () {
        return this.base;
    };
    Rectangulo.prototype.setHeight = function (alturaRectangulo) {
        this.altura = alturaRectangulo;
    };
    Rectangulo.prototype.getHeight = function () {
        return this.altura;
    };
    Rectangulo.prototype.getArea = function () {
        return (Math.pow(this.base, this.altura));
    };
    Rectangulo.prototype.compareRectangles = function (rec1, rec2) {
        var valor;
        if (rec1.getArea() > rec2.getArea()) {
            valor = 1;
        }
        else if (rec1.getArea() == rec2.getArea()) {
            valor = 0;
        }
        else {
            valor = -1;
        }
        return valor;
    };
    /*    compararRectangulosOpcion2(rectangulo: Rectangulo): number {
            let valor: number;
            if (this.getArea() > rectangulo.getArea()) {
                valor = 1;
            } else if (this.getArea() == rectangulo.getArea()) {
                valor = 0;
            } else {
                valor = -1;
            }
            return valor;
        }
        compararRectangulosOpcion3(areaRectangulo1: Rectangulo, areaRectangulo2: Rectangulo): number {
            let valor: number;
            if (areaRectangulo1.getArea() > areaRectangulo2.getArea()) {
                valor = 1;
            } else if (areaRectangulo1.getArea() == areaRectangulo2.getArea()) {
                valor = 0;
            } else {
                valor = -1;
            }
            return valor;
        } */
    Rectangulo.prototype.isSquare = function () {
        var base1 = this.base;
        var altura1 = this.altura;
        if (base1 === altura1) {
            console.log("Es un cuadrado.");
        }
        else {
            console.log("No es un cuadrado.");
        }
    };
    Rectangulo.prototype.isVertical = function () {
        if (this.base < this.altura) {
            console.log("Este rectángulo está en posición vertical.");
        }
        else {
            console.log("Este rectángulo está en posición horizontal.");
        }
    };
    return Rectangulo;
}());
var rect1 = new Rectangulo(15, 25);
var rect2 = new Rectangulo(30, 10);
var rect3 = new Rectangulo(20, 20);
console.log(rect1.getArea());
console.log(rect2.isVertical());
console.log(rect3.isSquare());
