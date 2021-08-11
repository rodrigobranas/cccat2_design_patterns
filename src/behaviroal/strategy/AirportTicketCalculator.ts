import TicketCalculator from "./TicketCalculator";

export default class AirportTicketCalculator implements TicketCalculator {

    calculate(checkinDate: Date, checkoutDate: Date): number {
        const period = (checkoutDate.getTime() - checkinDate.getTime())/(1000*60*60);
        let amount = 10;
        const remainingHours = period - 3;
        if (remainingHours > 0) amount += remainingHours * 3;
        return amount;
    }
}