"use strict";
exports.__esModule = true;
var gestor_1 = require("./gestor");
var libro_1 = require("./libro");
var libro1 = new libro_1.Libro("Clean Code", 464, "R.C.M.", "AA22");
var libro2 = new libro_1.Libro("The Pragmatic Programmer", 320, "A.H.", "E150");
var libro3 = new libro_1.Libro("Introducción a la Programación", 256, "P.W.", "L90");
var arregloDeLibros = [libro1, libro2, libro3];
var librería1 = new gestor_1.GestorLibros(arregloDeLibros);
console.log(librería1.consultarLibro(libro2));
console.log(librería1.toString());
