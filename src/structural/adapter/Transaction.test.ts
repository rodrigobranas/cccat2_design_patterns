import PagSeguroTransaction from "./PagSeguroTransaction";
import PagSeguroTransactionAdapter from "./PagSeguroTransactionAdapter";
import PayPalTransaction from "./PayPalTransaction";
import PayPalTransactionAdapter from "./PayPalTransactionAdapter";

test("Deve fazer uma transação no PagSeguro", function () {
    const pagSeguroTransaction = new PagSeguroTransaction("AHN67JNHT5HF", 1000, 2);
    const transaction = new PagSeguroTransactionAdapter(pagSeguroTransaction);
    expect(transaction.status).toBe("paid");
});

test("Deve fazer uma transação no PayPal", function () {
    const payPalTransaction = new PayPalTransaction("656768", 1000, "S");
    const transaction = new PayPalTransactionAdapter(payPalTransaction);
    expect(transaction.status).toBe("paid");
});
