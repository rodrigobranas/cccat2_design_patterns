import Order from "./Order";
import OrderStatus from "./OrderStatus";

export default class CancelledStatus extends OrderStatus {
    
    value: string;

    constructor (order: Order) {
        super(order);
        this.value = "cancelled";
    }

    open(): void {
        throw new Error("The order is already cancelled");
    }

    confirm(): void {
        throw new Error("The order is already cancelled");
    }

    cancel(): void {
        throw new Error("The order is already cancelled");
    }

    refund(): void {
        throw new Error("The order is already cancelled");
    }
}