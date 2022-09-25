"use strict";
exports.__esModule = true;
var Punto_1 = require("./Punto");
var Recta_1 = require("./Recta");
var p1 = new Punto_1.Punto(4, 4);
var p2 = new Punto_1.Punto(5, 5);
var r1 = new Recta_1.Recta(p1, p2);
console.log(r1.toString());
console.log(r1.longitud());
