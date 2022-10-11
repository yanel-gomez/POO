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
exports.Masajista = void 0;
var persona_1 = require("./persona");
var Masajista = /** @class */ (function (_super) {
    __extends(Masajista, _super);
    function Masajista() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Masajista.prototype["super"] = function (prof, mat) {
        this.profesion = prof;
        this.matricula = mat;
    };
    Masajista.prototype.setProfesion = function (prof) {
        this.profesion = prof;
    };
    Masajista.prototype.getProfesion = function () {
        return this.profesion;
    };
    Masajista.prototype.setMatricula = function (mat) {
        this.matricula = mat;
    };
    Masajista.prototype.getMatricula = function () {
        return this.matricula;
    };
    Masajista.prototype.toString = function () {
        return 'Miembro del Plantel Médico: ' + this.getNombre() + " " + this.getApellido() + ' \n ' + 'Pasaporte N°: ' + this.getPasaporte() + ' \n ' + 'Fecha de nacimiento: ' + this.getNacimiento() + ' \n ' + 'Profesión: ' + this.getProfesion() + '\n' + 'Matrícula N°: ' + this.getMatricula() + '\n' + '\n';
    };
    return Masajista;
}(persona_1.Persona));
exports.Masajista = Masajista;
