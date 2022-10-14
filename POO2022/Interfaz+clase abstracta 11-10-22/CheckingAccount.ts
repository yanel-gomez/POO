import { Account } from "./Account";
import { Person } from "./Person";

export class CheckingAccount extends Account{
    
    constructor(paramAccountNumber: number, paramClient: Person){
        super(paramAccountNumber,paramClient);
    }

    withdraw(paramWithdraw: number): void {
        if(this.accountBalance > paramWithdraw){
            this.accountBalance = this.accountBalance - paramWithdraw;
            console.log("You have just withdrew $ " + paramWithdraw);
        }else{
            console.log("Insufficient balance");
        }
    }
    updateBalance(): number {
        let earnedInterest:number = this.accountBalance * 0.015;
        let result:number=earnedInterest + this.accountBalance;
        return result;
    }

    public toString():string{
        return "Client: " + this.getClient() + " \n " + "Account number: " + this.getAccountNumber() + " \n " + "Your current balance is $" + this.updateBalance() + " \n "; 
    }
}

