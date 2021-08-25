import CancelledStatus from "./CancelledStatus";
import Order from "./Order";
import OrderStatus from "./OrderStatus";
import RefundedStatus from "./RefundedStatus";

export default class ConfirmedStatus extends OrderStatus {
    
    value: string;

    constructor (order: Order) {
        super(order);
        this.value = "confirmed";
    }

    open(): void {
        throw new Error("The order is already confirmed");
    }

    confirm(): void {
        throw new Error("The order is already confirmed");
    }

    cancel(): void {
        this.order.status = new CancelledStatus(this.order);
    }

    refund(): void {
        this.order.status = new RefundedStatus(this.order);
    }
}