import PagSeguroTransaction from "./PagSeguroTransaction";
import PayPalTransaction from "./PayPalTransaction";
import Transaction from "./Transaction";

export default class PayPalTransactionAdapter implements Transaction {
    trackNumber: string;
    amount: number;
    status: string;

    constructor (payPalTransaction: PayPalTransaction) {
        this.trackNumber = payPalTransaction.id;
        this.amount = payPalTransaction.amount;
        this.status = this.convertStatus(payPalTransaction.status);
    }

    convertStatus (status: string): string {
        switch (status) {
            case "P":
                return "waiting_payment";
            case "S":
                return "paid";
            case "F":
                return "refunded";
            default:
                return "";
        }
    }

}