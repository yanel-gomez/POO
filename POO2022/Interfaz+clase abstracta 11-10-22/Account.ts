import { Person } from "./Person";

export abstract class Account {
    protected accountNumber: number;
    protected accountBalance: number;
    protected client: Person;

    constructor(paramAccountNumber: number, paramClient: Person) {
        this.accountBalance=0;
        this.accountNumber = paramAccountNumber;
        this.client = paramClient;
    }

    public getAccountNumber(): number {
        return this.accountNumber;
    }
    public setAccountNumber(paramAccountNumber: number): void {
        this.accountNumber = paramAccountNumber;
    }
    public getAccountBalance(): number {
        return this.accountBalance;
    }
    public setAccountBalance(paramAccountBalance: number): void {
        this.accountBalance = paramAccountBalance;
    }
    public getClient(): Person {
        return this.client;
    }
    public setCliente(paramClient: Person): void {
        this.client = paramClient;
    }
    public deposit(paramDeposit: number): void {
        this.accountBalance = this.accountBalance + paramDeposit
    }

    //permite sacar una cantidad de la cuenta (si hay saldo). No se implementa, depende del tipo de cuenta
    abstract withdraw(paramWithdraw: number): void;
    //actualiza el saldo de la cuenta, pero cada cuenta lo hace de una forma diferente
    abstract updateBalance(): void;

    public toString():string{
        return "Client: " + " \n " + this.getClient() + " \n " + "Account number: " + this.getAccountNumber() + " \n "; 
    }
}