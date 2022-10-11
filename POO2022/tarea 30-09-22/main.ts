import { GestorLibros } from "./gestor"
import { Libro } from "./libro"

let libro1:Libro = new Libro("Clean Code",464,"R.C.M.","AA22");
let libro2:Libro = new Libro("The Pragmatic Programmer",320,"A.H.","E150");
let libro3:Libro = new Libro("Introducción a la Programación",256,"P.W.","L90");

let arregloDeLibros:Array<Libro> = [libro1,libro2,libro3];
let librería1:GestorLibros = new GestorLibros(arregloDeLibros);

console.log(librería1.consultarLibro(libro2));
console.log(librería1.toStringGestor());