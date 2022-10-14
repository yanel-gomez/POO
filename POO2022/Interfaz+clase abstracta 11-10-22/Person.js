"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(paramName, paramLastName, paramId) {
        this.name = paramName;
        this.lastName = paramLastName;
        this.id = paramId;
    }
    Person.prototype.setName = function (paramName) {
        this.name = paramName;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setLastName = function (paramLastName) {
        this.lastName = paramLastName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.setId = function (paramId) {
        this.id = paramId;
    };
    Person.prototype.getId = function () {
        return this.id;
    };
    Person.prototype.toString = function () {
        return this.getName() + " " + this.getLastName();
    };
    return Person;
}());
exports.Person = Person;
