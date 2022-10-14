import { Account } from "./Account";
import { Person } from "./Person";

export class SavingsAccount extends Account {

    protected interest: number;
    protected minimumBalance: number;

    constructor(paramAccountNumber: number,paramClient: Person) {
        super(paramAccountNumber,paramClient);
    }

    public setMinimumBalance(paramMinimumBalance: number) {
        this.minimumBalance = paramMinimumBalance;
    }

    public getMinimumBalance(): number {
        return this.minimumBalance;
    }

    public setInterest(paramInterest: number) {
        this.interest = paramInterest;
    }

    public getInterest(): number {
        return this.interest;
    }


    withdraw(paramWithdraw: number): void {
        let aux = this.accountBalance - this.minimumBalance;
        if (aux > paramWithdraw) {
            this.accountBalance = this.accountBalance - paramWithdraw;
            console.log("You have just withdrew $ " + paramWithdraw);
        } else {
            console.log("Insufficient balance");
        }
    }

    updateBalance(): number {
        let earnedInterest:number = this.accountBalance * this.interest;
        let result:number=earnedInterest + this.accountBalance;
        return result;

    }
    public toString():string{
        return "Client: " + this.getClient() + " \n " + "Account number: " + this.getAccountNumber() + " \n " + "Your current balance is $" + this.updateBalance() + " \n "; 
    }

}

