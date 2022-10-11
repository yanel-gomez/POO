"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(paramNombre, paramApellido, paramPass, paramFecha) {
        this.nombre = paramNombre;
        this.apellido = paramApellido;
        this.nroPasaporte = paramPass;
        this.fechaNacimiento = paramFecha;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Persona.prototype.getPasaporte = function () {
        return this.nroPasaporte;
    };
    Persona.prototype.setPasaporte = function (pasaporte) {
        this.nroPasaporte = pasaporte;
    };
    Persona.prototype.getNacimiento = function () {
        return this.fechaNacimiento;
    };
    Persona.prototype.setNacimiento = function (nac) {
        this.fechaNacimiento = nac;
    };
    return Persona;
}());
exports.Persona = Persona;
