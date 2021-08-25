import CancelledStatus from "./CancelledStatus";
import ConfirmedStatus from "./ConfirmedStatus";
import Order from "./Order";
import OrderStatus from "./OrderStatus";

export default class RefundedStatus extends OrderStatus {
    
    value: string;

    constructor (order: Order) {
        super(order);
        this.value = "refunded";
    }

    open(): void {
        throw new Error("The order is already refunded");
    }

    confirm(): void {
        throw new Error("The order is already refunded");
    }

    cancel(): void {
        throw new Error("The order is already refunded");
    }

    refund(): void {
        throw new Error("The order is already refunded");
    }
}