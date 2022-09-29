var OximetroDePulso = /** @class */ (function () {
    function OximetroDePulso(nivelOxigeno, ritmoCardiaco, prendidoApagado) {
        this.nivelOxigeno = nivelOxigeno;
        this.ritmoCardiaco = ritmoCardiaco;
        this.prendidoApagado = prendidoApagado;
        this.marca = "Beurer";
        this.modelo = "PO 30";
    }
    OximetroDePulso.prototype.getNivelOxigeno = function () {
        return this.nivelOxigeno;
    };
    OximetroDePulso.prototype.setNivelOxigeno = function (oxigeno) {
        this.nivelOxigeno = oxigeno;
    };
    OximetroDePulso.prototype.getRitmoCardiaco = function () {
        return this.ritmoCardiaco;
    };
    OximetroDePulso.prototype.setRitmoCardiaco = function (ritmo) {
        this.ritmoCardiaco = ritmo;
    };
    OximetroDePulso.prototype.getPrendidoApagado = function () {
        return this.prendidoApagado;
    };
    OximetroDePulso.prototype.setPrendidoApagado = function (onOff) {
        this.prendidoApagado = onOff;
    };
    OximetroDePulso.prototype.getMarca = function () {
        return this.marca;
    };
    OximetroDePulso.prototype.getModelo = function () {
        return this.modelo;
    };
    OximetroDePulso.prototype.prenderApagar = function () {
        if (this.prendidoApagado === true) {
            this.prendidoApagado = false;
            console.log("Se apaga");
        }
        else {
            this.prendidoApagado = true;
            console.log("Se prende");
        }
    };
    OximetroDePulso.prototype.medirRitmoCardiaco = function () {
        var contador = 0;
        var heartbeats = contador++;
        if (heartbeats <= 100 || heartbeats >= 60) {
            console.log("Su ritmo cardíaco es normal.");
        }
        else {
            console.log("Usted presenta arritmia cardíaca.");
        }
    };
    return OximetroDePulso;
}());
var primerSaturometro = new OximetroDePulso(95, 70, true);
console.log(primerSaturometro.getNivelOxigeno());
console.log(primerSaturometro.medirRitmoCardiaco());
