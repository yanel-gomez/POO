import { Punto } from './Punto'

export class Recta {
    private puntoInicial: Punto;
    private puntoFinal: Punto;

    constructor(paramPuntoInicial: Punto, paramPuntoFinal: Punto) {
        this.puntoInicial = paramPuntoInicial;
        this.puntoFinal = paramPuntoFinal;
    }


    getPuntoInicial(): Punto {
        return this.puntoInicial;
    }

    setPuntoInicial(punto: Punto) {
        this.puntoInicial = punto;
    }

    getPuntoFinal(): Punto {
        return this.puntoFinal;
    }

    setPuntoFinal(punto: Punto) {
        this.puntoFinal = punto;
    }

    longitud(): number {
        {
            let x1: number = this.puntoInicial.getX();
            let y1: number = this.puntoFinal.getY();

            let x2: number = this.puntoInicial.getX();
            let y2: number = this.puntoFinal.getY();

            let aux1: number = x2 - x1;
            aux1 = aux1 * aux1;

            let aux2: number = y2 - y1;
            aux2 = aux2 * aux2;
            return Math.sqrt(aux1 + aux2);  //raiz cuadrada

        }
    }

    toString(): String {
        return this.puntoInicial.toString() + ',' + this.getPuntoFinal.toString();
    }
}