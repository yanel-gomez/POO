"use strict";
exports.__esModule = true;
exports.Recta = void 0;
var Recta = /** @class */ (function () {
    function Recta(paramPuntoInicial, paramPuntoFinal) {
        this.puntoInicial = paramPuntoInicial;
        this.puntoFinal = paramPuntoFinal;
    }
    Recta.prototype.getPuntoInicial = function () {
        return this.puntoInicial;
    };
    Recta.prototype.setPuntoInicial = function (punto) {
        this.puntoInicial = punto;
    };
    Recta.prototype.getPuntoFinal = function () {
        return this.puntoFinal;
    };
    Recta.prototype.setPuntoFinal = function (punto) {
        this.puntoFinal = punto;
    };
    Recta.prototype.longitud = function () {
        {
            var x1 = this.puntoInicial.getX();
            var y1 = this.puntoFinal.getY();
            var x2 = this.puntoInicial.getX();
            var y2 = this.puntoFinal.getY();
            var aux1 = x2 - x1;
            aux1 = aux1 * aux1;
            var aux2 = y2 - y1;
            aux2 = aux2 * aux2;
            return Math.sqrt(aux1 + aux2); //raiz cuadrada
        }
    };
    Recta.prototype.toString = function () {
        return this.puntoInicial.toString() + ',' + this.getPuntoFinal.toString();
    };
    return Recta;
}());
exports.Recta = Recta;
