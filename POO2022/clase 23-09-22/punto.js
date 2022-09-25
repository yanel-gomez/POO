"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.setX = function (x) {
        this.x = x;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setY = function (y) {
        this.y = y;
    };
    Punto.prototype.tostring = function () {
        return "(" + this.x + "," + this.y + ")";
    };
    return Punto;
}());
exports.Punto = Punto;
