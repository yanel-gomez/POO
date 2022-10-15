import { CheckingAccount } from "./CheckingAccount";
import { SavingsAccount } from "./SavingsAccount";
import { Person } from "./Person";

let Yanel:Person = new Person("Yanel","Gomez",98765432);
let myCheckingAccount:CheckingAccount= new CheckingAccount(852963741,Yanel);
let mySavingsAccount:SavingsAccount = new SavingsAccount(233365204,Yanel);

mySavingsAccount.deposit(25000);
mySavingsAccount.setInterest(2);
mySavingsAccount.updateBalance();
console.log(mySavingsAccount.toString());

myCheckingAccount.deposit(15000);
myCheckingAccount.withdraw(20000);
console.log(myCheckingAccount.toString());