class Auto {
    marca: string;
    patente: string;
    modelo: string;

    constructor(parametroMarca: string, parametroPatente: string, parametroModelo: string) {
        this.marca = parametroMarca;
        this.patente = parametroPatente;
        this.modelo = parametroModelo;
    }

    obtenerMarca(): string {
        return this.marca;
    }
    obtenerPatente(): string {
        return this.patente;
    }
}

let autoUno = new Auto("BMW", "AAA122", "X8");
let autoDos = new Auto("Mercedes Benz", "YYY122", "A200");

let marcaAutoUno: string = autoUno.obtenerMarca();
console.log(marcaAutoUno);
