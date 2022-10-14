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
exports.CheckingAccount = void 0;
var Account_1 = require("./Account");
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(paramAccountNumber, paramClient) {
        return _super.call(this, paramAccountNumber, paramClient) || this;
    }
    CheckingAccount.prototype.withdraw = function (paramWithdraw) {
        if (this.accountBalance > paramWithdraw) {
            this.accountBalance = this.accountBalance - paramWithdraw;
            console.log("You have just withdrew $ " + paramWithdraw);
        }
        else {
            console.log("Insufficient balance");
        }
    };
    CheckingAccount.prototype.updateBalance = function () {
        var earnedInterest = this.accountBalance * 0.015;
        var result = earnedInterest + this.accountBalance;
        return result;
    };
    CheckingAccount.prototype.toString = function () {
        return "Client: " + this.getClient() + " \n " + "Account number: " + this.getAccountNumber() + " \n " + "Your current balance is $" + this.updateBalance() + " \n ";
    };
    return CheckingAccount;
}(Account_1.Account));
exports.CheckingAccount = CheckingAccount;
