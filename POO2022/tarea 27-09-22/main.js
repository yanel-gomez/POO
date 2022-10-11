"use strict";
/*Actividad Obligatoria
Crear proyecto NPM
Subir proyecto a GitHub
Implementar una Selección de Fútbol, conformada por Futbolistas, Entrenador y Masajista.
Cada integrante posee nombre, apellido, numero de pasaporte y fecha de nacimiento.
Crear un archivo main donde creen instancias de cada clase, le den valores y le hagan consultas
y muestren algun tipo de mensaje por consola
Aplicar herencia donde sea posible.*/
exports.__esModule = true;
var futbolistas_1 = require("./futbolistas");
var entrenador_1 = require("./entrenador");
var masajista_1 = require("./masajista");
var jugador1 = new futbolistas_1.Futbolista("Lionel", "Messi", 34456920, "24-06-1987", "izquierda", "delantero", 10);
var jugador2 = new futbolistas_1.Futbolista("Rodrigo", "De Paul", 40235698, "24-05-1994", "derecha", "centrocampista", 7);
var entrenador1 = new entrenador_1.Entrenador("Lionel", "Scaloni", 27225632, "16-05-1978", "estrategia");
var entrenador2 = new entrenador_1.Entrenador("Oscar", "Ramirez", 95201478, "03-09-1964", "entrenamiento físico");
var masajista1 = new masajista_1.Masajista("Pablo", "Perez", 14589632, "23-03-1980");
var masajista2 = new masajista_1.Masajista("Gonzalo", "Gonzalez", 25685402, "27-12-1985");
var arrayFutbolistas = [jugador1, jugador2];
var arrayEntrenadores = [entrenador1, entrenador2];
var arrayMedicos = [masajista1, masajista2];
console.log(jugador1.getNombre());
console.log(arrayFutbolistas.toString());
