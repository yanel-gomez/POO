/*Actividad Obligatoria
Crear proyecto NPM
Subir proyecto a GitHub
Implementar una Selección de Fútbol, conformada por Futbolistas, Entrenador y Masajista. 
Cada integrante posee nombre, apellido, numero de pasaporte y fecha de nacimiento.
Crear un archivo main donde creen instancias de cada clase, le den valores y le hagan consultas 
y muestren algun tipo de mensaje por consola
Aplicar herencia donde sea posible.*/

import { Futbolista } from "./futbolistas";
import { Entrenador } from "./entrenador";
import { Masajista } from "./masajista";

let jugador1:Futbolista= new Futbolista("Lionel","Messi",34456920,"24-06-1987","izquierda","delantero",10);
let jugador2:Futbolista= new Futbolista("Rodrigo","De Paul",40235698,"24-05-1994","derecha","centrocampista",7);
let entrenador1:Entrenador= new Entrenador("Lionel","Scaloni",27225632,"16-05-1978","estrategia");
let entrenador2:Entrenador= new Entrenador("Oscar","Ramirez",95201478,"03-09-1964","entrenamiento físico");
let masajista1:Masajista= new Masajista("Pablo","Perez",14589632,"23-03-1980");
let masajista2:Masajista= new Masajista("Gonzalo","Gonzalez",25685402,"27-12-1985");

let arrayFutbolistas:Array<Futbolista> = [jugador1,jugador2];
let arrayEntrenadores:Array<Entrenador> = [entrenador1,entrenador2];
let arrayMedicos:Array<Masajista>= [masajista1,masajista2];

console.log(jugador1.getNombre());
console.log(arrayFutbolistas.toString());