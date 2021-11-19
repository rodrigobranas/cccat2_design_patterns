import Account from "./Account";
import CreditCommand from "./CreditCommand";
import DebitCommand from "./DebitCommand";

test("Deve criar uma conta bancária", function () {
    const account = new Account();
    const balance = account.getBalance();
    expect(balance).toBe(0);
});

test("Deve creditar uma conta bancária", function () {
    const account = new Account();
    account.credit(1000);
    const balance = account.getBalance();
    expect(balance).toBe(1000);
});

test("Deve debitar uma conta bancária", function () {
    const account = new Account();
    account.credit(1000);
    account.debit(500);
    const balance = account.getBalance();
    expect(balance).toBe(500);
});

test("Deve creditar uma conta bancária utilizando um comando", function () {
    const account = new Account();
    const creditCommand = new CreditCommand(account, 1000);
    creditCommand.execute();
    const balance = account.getBalance();
    expect(balance).toBe(1000);
});

test("Deve debitar uma conta bancária utilizando um comando", function () {
    const account = new Account();
    const creditCommand = new CreditCommand(account, 1000);
    creditCommand.execute();
    const debitCommand = new DebitCommand(account, 500);
    debitCommand.execute();
    const balance = account.getBalance();
    expect(balance).toBe(500);
});
