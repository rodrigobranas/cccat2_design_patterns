import TicketCalculator from "./TicketCalculator";

export default class ShoppingTicketCalculator implements TicketCalculator {

    calculate(checkinDate: Date, checkoutDate: Date): number {
        const period = (checkoutDate.getTime() - checkinDate.getTime())/(1000*60*60);
        let amount = 0;
        if (checkinDate.getHours() >= 12 && checkoutDate.getHours() <= 14) {
            amount = 0;
        } else {
            amount = period * 3;
        }
        return amount;
    }
}
