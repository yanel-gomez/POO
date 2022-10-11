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
exports.Entrenador = void 0;
var persona_1 = require("./persona");
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(paramNombre, paramApellido, paramPass, paramFecha, funcion) {
        var _this = _super.call(this, paramNombre, paramApellido, paramPass, paramFecha) || this;
        _this.funcion = funcion;
        return _this;
    }
    Entrenador.prototype.setFuncion = function (funcion) {
        this.funcion = funcion;
    };
    Entrenador.prototype.getFuncion = function () {
        return this.funcion;
    };
    Entrenador.prototype.toString = function () {
        return 'Entrenador: ' + this.getNombre() + " " + this.getApellido() + ' \n ' + 'Pasaporte N°: ' + this.getPasaporte() + ' \n ' + 'Fecha de nacimiento: ' + this.getNacimiento() + ' \n ' + 'Función: ' + this.getFuncion() + '\n' + '\n';
    };
    return Entrenador;
}(persona_1.Persona));
exports.Entrenador = Entrenador;
