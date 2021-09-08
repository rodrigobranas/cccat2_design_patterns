import Account from "./Account";
import Command from "./Command";

export default class CreditCommand implements Command {
    account: Account;
    amount: number;

    constructor (account: Account, amount: number) {
        this.account = account;
        this.amount = amount;
    }

    execute(): void {
        this.account.credit(this.amount);
    }
}
