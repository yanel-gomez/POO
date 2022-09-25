var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, nacionalidad, dni, fecha_nacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacionalidad = nacionalidad;
        this.dni = dni;
        this.contar_nacionalidad = 0;
        this.fecha_nacimiento = fecha_nacimiento;
    }
    Persona.prototype.get_nombre = function () {
        return this.nombre;
    };
    Persona.prototype.set_nombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.get_apellido = function () {
        return this.apellido;
    };
    Persona.prototype.set_apellido = function (apellido) {
        this.apellido = apellido;
    };
    Persona.prototype.get_fecha_nacimiento = function () {
        return this.fecha_nacimiento.toString();
    };
    Persona.prototype.set_fecha_nacimiento = function (fecha_nacimiento, clave) {
        if (clave == 123)
            this.fecha_nacimiento = fecha_nacimiento;
        else
            console.log('Usted no tiene la autoridad para cambiar la fecha de nacimiento');
    };
    Persona.prototype.get_nacionalidad = function () {
        if (this.contar_nacionalidad < 1)
            return this.nacionalidad;
        else
            return this.nacionalidad + "/" + this.nacionalidad_segunda;
    };
    Persona.prototype.set_nacionalidad = function (nacionalidad) {
        if (this.contar_nacionalidad < 1) {
            this.contar_nacionalidad++;
            this.nacionalidad_segunda = nacionalidad;
            console.log("Nacionalidad cambiada");
        }
        else {
            console.log("Usted no puede tener más de dos nacionalidades");
        }
    };
    Persona.prototype.get_dni = function () {
        return this.dni;
    };
    Persona.prototype.get_edad = function () {
        var hoy = new Date();
        return hoy.getFullYear() - this.fecha_nacimiento.getFullYear();
    };
    Persona.prototype.toString = function () {
        var respuesta = this.get_nombre() + " " + this.get_apellido() + " DNI: " + this.get_dni();
        return respuesta;
    };
    return Persona;
}());
var fecha = new Date('08-05-1989');
var persona1 = new Persona("Juan", "Perez", "Argentina", 30303030, fecha);
console.log(persona1.get_nombre());
console.log(persona1.get_apellido());
console.log(persona1.get_fecha_nacimiento());
console.log(persona1.get_dni());
console.log(persona1.get_edad());
console.log(persona1.toString());
