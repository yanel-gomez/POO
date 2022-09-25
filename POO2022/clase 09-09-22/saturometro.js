var OximetroDePulso = /** @class */ (function () {
    function OximetroDePulso(nivelOxigeno, ritmoCardiaco, prendidoApagado) {
        this.nivelOxigeno = nivelOxigeno;
        this.ritmoCardiaco = ritmoCardiaco;
        this.prendidoApagado = true;
    }
    OximetroDePulso.prototype.prenderApagar = function () {
        if (this.prendidoApagado)
            this.prendidoApagado = true;
        else
            this.prendidoApagado = false;
    };
    OximetroDePulso.prototype.getNivelOxigeno = function () {
        return this.nivelOxigeno;
    };
    OximetroDePulso.prototype.medirRitmoCardiaco = function () {
        var contador = 0;
        var heartbeats = 1;
        while (heartbeats <= 100 || heartbeats >= 60) {
            this.ritmoCardiaco = contador++;
        }
    };
    OximetroDePulso.prototype.getRitmoCardiaco = function () {
        return this.ritmoCardiaco;
    };
    return OximetroDePulso;
}());
var primerSaturometro = new OximetroDePulso(95, 70, true);
console.log(primerSaturometro.getNivelOxigeno);
