import CancelledStatus from "./CancelledStatus";
import ConfirmedStatus from "./ConfirmedStatus";
import Order from "./Order";
import OrderStatus from "./OrderStatus";

export default class OpenStatus extends OrderStatus {
    
    value: string;

    constructor (order: Order) {
        super(order);
        this.value = "open";
    }

    open(): void {
        throw new Error("The order is already open");
    }

    confirm(): void {
        this.order.status = new ConfirmedStatus(this.order);
    }

    cancel(): void {
        this.order.status = new CancelledStatus(this.order);
    }

    refund(): void {
        throw new Error("The order is open");
    }
}