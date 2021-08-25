import OpenStatus from "./OpenStatus";
import OrderStatus from "./OrderStatus";

export default class Order {
    status: OrderStatus;

    constructor () {
        this.status = new OpenStatus(this);
    }

    open () {
        this.status.open();
    }

    confirm() {
        this.status.confirm();
    }

    cancel() {
        this.status.cancel();
    }

    refund() {
        this.status.refund();
    }
}
