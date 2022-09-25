import { Punto } from './Punto'
import { Recta } from './Recta'

let p1= new Punto(4,4);
let p2= new Punto(5,5);

let r1 = new Recta(p1,p2);

console.log(r1.toString());

console.log(r1.longitud());