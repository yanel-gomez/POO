/*Crear la clase Electrodomestico con las siguientes caracterisiticas: nombre, precio base, color, consumo energetico y peso
(implementar un constructor con todos los parametros)
La funcionalidad de la clase debe ser:
Todos los metodos get y set
Comprobar si el electrodomestico es de bajo consumo (valor booleano)
Calcular el balance (costo dividido peso)
Indicar si es un producto de alta gama (balance mayor que 3)*/
var Appliance = /** @class */ (function () {
    function Appliance(paramNombre, paramPrecio, paramColor, paramConsumo, paramPeso) {
        this.name = paramNombre;
        this.basePrice = paramPrecio;
        this.color = paramColor;
        this.powerConsumption = paramConsumo;
        this.weight = paramPeso;
    }
    Appliance.prototype.setName = function (applianceName) {
        this.name = applianceName;
    };
    Appliance.prototype.getName = function () {
        return this.name;
    };
    Appliance.prototype.setBasePrice = function (appliancePrice) {
        this.basePrice = appliancePrice;
    };
    Appliance.prototype.getBasePrice = function () {
        return this.basePrice;
    };
    Appliance.prototype.setColor = function (applianceColor) {
        this.color = applianceColor;
    };
    Appliance.prototype.getColor = function () {
        return this.color;
    };
    Appliance.prototype.setPowerConsumption = function (applianceConsumption) {
        this.powerConsumption = applianceConsumption;
    };
    Appliance.prototype.getPowerConsumption = function () {
        return this.powerConsumption;
    };
    Appliance.prototype.setWeight = function (applianceWeight) {
        this.weight = applianceWeight;
    };
    Appliance.prototype.getWeight = function () {
        return this.weight;
    };
    Appliance.prototype.isLowConsumption = function () {
        if (this.powerConsumption === true) {
            this.powerConsumption = false;
            console.log("No es bajo consumo");
        }
        else {
            this.powerConsumption = true;
            console.log("Es bajo consumo");
        }
        return this.powerConsumption;
    };
    Appliance.prototype.calculateBalance = function () {
        var cost = 15000;
        var balance = (cost / this.weight);
        return balance;
    };
    return Appliance;
}());
var firstTv = new Appliance("Samsung", 200, "Black", true, 23);
console.log(firstTv.getColor());
console.log(firstTv.calculateBalance());
