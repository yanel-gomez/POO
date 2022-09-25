var Boton = /** @class */ (function () {
    function Boton(tipo) {
        this.tipoBoton = tipo;
    }
    Boton.prototype.getTipoBoton = function () {
        return this.tipoBoton;
    };
    return Boton;
}());
var Televisor = /** @class */ (function () {
    function Televisor(paramPrendido, paramVolumen, paramCanal, paramBoton) {
        this.estaPrendido = paramPrendido;
        this.volumenActual = paramVolumen;
        this.canalActual = paramCanal;
        this.boton = paramBoton;
    }
    Televisor.prototype.setearVolumen = function (volumenDeUsuario) {
        this.volumenActual = volumenDeUsuario;
    };
    Televisor.prototype.verVolumen = function () {
        return this.volumenActual;
    };
    Televisor.prototype.setearCanal = function (canalDeUsuario) {
        this.canalActual = canalDeUsuario;
    };
    Televisor.prototype.verCanalActual = function () {
        return this.canalActual;
    };
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
            console.log("se apaga");
        }
        else {
            this.estaPrendido = true;
            console.log("se prende");
        }
    };
    return Televisor;
}());
var botonVolumen = new Boton("volumen+");
var tvLG = new Televisor(false, 15, 58, botonVolumen);
var tvSamsung = new Televisor(true, 22, 45, botonVolumen);
var tvSony = new Televisor(false, 78, 65, botonVolumen);
tvLG.setearCanal(44);
var canalLG = tvLG.verCanalActual();
tvSamsung.prenderApagar();
console.log("Canal " + canalLG);
