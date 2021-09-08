export default class Account {
    private balance: number;

    constructor () {
        this.balance = 0;
    }

    credit(amount: number) {
        this.balance += amount;
    }

    debit(amount: number) {
        this.balance -= amount;
    }

    getBalance() {
        return this.balance;
    }
}