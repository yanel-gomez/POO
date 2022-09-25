var Auto = /** @class */ (function () {
    function Auto(parametroMarca, parametroPatente, parametroModelo) {
        this.marca = parametroMarca;
        this.patente = parametroPatente;
        this.modelo = parametroModelo;
    }
    Auto.prototype.obtenerMarca = function () {
        return this.marca;
    };
    Auto.prototype.obtenerPatente = function () {
        return this.patente;
    };
    return Auto;
}());
var autoUno = new Auto("BMW", "AAA122", "X8");
var autoDos = new Auto("Mercedes Benz", "YYY122", "A200");
var marcaAutoUno = autoUno.obtenerMarca();
console.log(marcaAutoUno);
