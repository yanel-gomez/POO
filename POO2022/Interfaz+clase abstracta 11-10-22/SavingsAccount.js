"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SavingsAccount = void 0;
var Account_1 = require("./Account");
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(paramAccountNumber, paramClient) {
        return _super.call(this, paramAccountNumber, paramClient) || this;
    }
    SavingsAccount.prototype.setMinimumBalance = function (paramMinimumBalance) {
        this.minimumBalance = paramMinimumBalance;
    };
    SavingsAccount.prototype.getMinimumBalance = function () {
        return this.minimumBalance;
    };
    SavingsAccount.prototype.setInterest = function (paramInterest) {
        this.interest = paramInterest;
    };
    SavingsAccount.prototype.getInterest = function () {
        return this.interest;
    };
    SavingsAccount.prototype.withdraw = function (paramWithdraw) {
        var aux = this.accountBalance - this.minimumBalance;
        if (aux > paramWithdraw) {
            this.accountBalance = this.accountBalance - paramWithdraw;
            console.log("You have just withdrew $ " + paramWithdraw);
        }
        else {
            console.log("Insufficient balance");
        }
    };
    SavingsAccount.prototype.updateBalance = function () {
        var earnedInterest = this.accountBalance * this.interest;
        var result = earnedInterest + this.accountBalance;
        return result;
    };
    SavingsAccount.prototype.toString = function () {
        return "Client: " + this.getClient() + " \n " + "Account number: " + this.getAccountNumber() + " \n " + "Your current balance is $" + this.updateBalance() + " \n ";
    };
    return SavingsAccount;
}(Account_1.Account));
exports.SavingsAccount = SavingsAccount;
