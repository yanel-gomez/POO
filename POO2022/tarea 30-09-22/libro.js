"use strict";
exports.__esModule = true;
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(pNombre, pqPag, pAutor, pEditorial) {
        this.nombre = pNombre;
        this.qPaginas = pqPag;
        this.autor = pAutor;
        this.editorial = pEditorial;
    }
    Libro.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Libro.prototype.getNombre = function () {
        return this.nombre;
    };
    Libro.prototype.setqPag = function (qPag) {
        this.qPaginas = qPag;
    };
    Libro.prototype.getqPag = function () {
        return this.qPaginas;
    };
    Libro.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.setEditorial = function (edit) {
        this.editorial = edit;
    };
    Libro.prototype.getEditorial = function () {
        return this.editorial;
    };
    Libro.prototype.toString = function () {
        return 'Titulo: ' + this.nombre + ' \n ' + 'Cantidad de páginas: ' + this.qPaginas + ' \n ' + 'Autor: ' + this.autor + ' \n ' + 'Editorial: ' + this.editorial + '';
    };
    return Libro;
}());
exports.Libro = Libro;
