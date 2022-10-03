"use strict";
/*Armar una base de datos de libros:
Implementar la clase Libro ✓
Implementar la clase GestorLibros → debe soportar insertar/consultar libros. ✓
(Esta clase puede estar "compuesta" por un arreglo de libros) ✓
Subir las cosas a GitHub y avisar por Slack  ✓*/
exports.__esModule = true;
exports.GestorLibros = void 0;
var GestorLibros = /** @class */ (function () {
    function GestorLibros(listadoParametro) {
        this.listadoDeLibros = new Array;
        this.listadoDeLibros = listadoParametro;
    }
    GestorLibros.prototype.insertarLibro = function (paramLibro) {
        this.listadoDeLibros.push(paramLibro);
    };
    GestorLibros.prototype.consultarLibro = function (paramLibro) {
        var respuesta = false;
        var posicion = -1;
        for (var i = 0; i < this.listadoDeLibros.length; i++) {
            if (this.listadoDeLibros[i].getNombre() === paramLibro.getNombre()) {
                posicion = i;
                respuesta = true;
            }
        }
        console.log(posicion);
        return respuesta;
    };
    GestorLibros.prototype.editarLibro = function (posicion, nombreParam, autorParam) {
        this.listadoDeLibros[posicion].setNombre(nombreParam);
        this.listadoDeLibros[posicion].setAutor(autorParam);
    };
    GestorLibros.prototype.eliminarLibro = function (paramLibro) {
        for (var i = 0; i < this.listadoDeLibros.length; i++) {
            if (this.listadoDeLibros[i].getNombre() === paramLibro.getNombre()) {
                this.listadoDeLibros.splice(i, 1);
            }
        }
    };
    return GestorLibros;
}());
exports.GestorLibros = GestorLibros;
