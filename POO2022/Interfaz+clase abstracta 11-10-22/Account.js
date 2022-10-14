"use strict";
exports.__esModule = true;
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(paramAccountNumber, paramClient) {
        this.accountBalance = 0;
        this.accountNumber = paramAccountNumber;
        this.client = paramClient;
    }
    Account.prototype.getAccountNumber = function () {
        return this.accountNumber;
    };
    Account.prototype.setAccountNumber = function (paramAccountNumber) {
        this.accountNumber = paramAccountNumber;
    };
    Account.prototype.getAccountBalance = function () {
        return this.accountBalance;
    };
    Account.prototype.setAccountBalance = function (paramAccountBalance) {
        this.accountBalance = paramAccountBalance;
    };
    Account.prototype.getClient = function () {
        return this.client;
    };
    Account.prototype.setCliente = function (paramClient) {
        this.client = paramClient;
    };
    Account.prototype.deposit = function (paramDeposit) {
        this.accountBalance = this.accountBalance + paramDeposit;
    };
    Account.prototype.toString = function () {
        return "Client: " + " \n " + this.getClient() + " \n " + "Account number: " + this.getAccountNumber() + " \n ";
    };
    return Account;
}());
exports.Account = Account;
