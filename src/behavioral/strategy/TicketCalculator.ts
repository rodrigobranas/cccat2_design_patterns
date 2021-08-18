export default interface TicketCalculator {
    calculate(checkinDate: Date, checkoutDate: Date): number;
}
