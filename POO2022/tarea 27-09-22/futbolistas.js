"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Futbolista = void 0;
var persona_1 = require("./persona");
var Futbolista = /** @class */ (function (_super) {
    __extends(Futbolista, _super);
    function Futbolista(paramNombre, paramApellido, paramPass, paramFecha, pierna, pos, nro) {
        var _this = _super.call(this, paramNombre, paramApellido, paramPass, paramFecha) || this;
        _this.piernaHabil = pierna;
        _this.posicion = pos;
        _this.nroCamiseta = nro;
        return _this;
    }
    Futbolista.prototype.setPierna = function (pierna) {
        this.piernaHabil = pierna;
    };
    Futbolista.prototype.getPierna = function () {
        return this.piernaHabil;
    };
    Futbolista.prototype.setPosicion = function (pos) {
        this.posicion = pos;
    };
    Futbolista.prototype.getPosicion = function () {
        return this.posicion;
    };
    Futbolista.prototype.setCamiseta = function (nro) {
        this.nroCamiseta = nro;
    };
    Futbolista.prototype.getCamiseta = function () {
        return this.nroCamiseta;
    };
    Futbolista.prototype.toString = function () {
        return 'Jugador: ' + this.getNombre() + " " + this.getApellido() + ' \n ' + 'Pasaporte N°: ' + this.getPasaporte() + ' \n ' + 'Fecha de nacimiento: ' + this.getNacimiento() + ' \n ' + 'Pierna hábil: ' + this.getPierna() + ' \n ' + 'Posición en el campo: ' + this.getPosicion() + ' \n ' + 'N° de camiseta: ' + this.getCamiseta() + '\n' + '\n';
    };
    return Futbolista;
}(persona_1.Persona));
exports.Futbolista = Futbolista;
