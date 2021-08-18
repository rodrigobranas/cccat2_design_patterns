import PagSeguroTransaction from "./PagSeguroTransaction";
import Transaction from "./Transaction";

export default class PagSeguroTransactionAdapter implements Transaction {
    trackNumber: string;
    amount: number;
    status: string;

    constructor (pagSeguroTransaction: PagSeguroTransaction) {
        this.trackNumber = pagSeguroTransaction.code;
        this.amount = pagSeguroTransaction.grossAmount;
        this.status = this.convertStatus(pagSeguroTransaction.status);
    }

    convertStatus (status: number): string {
        switch (status) {
            case 1:
                return "waiting_payment";
            case 2:
                return "paid";
            case 3:
                return "cancelled";
            default:
                return "";
        }
    }

}