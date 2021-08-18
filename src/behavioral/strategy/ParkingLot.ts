import TicketCalculator from "./TicketCalculator";

export default class ParkingLot {
    tickets: { plate: string, checkinDate: Date }[];
    location: string;
    ticketCalculator: TicketCalculator;

    constructor (location: string, ticketCalculator: TicketCalculator) {
        this.tickets = [];
        this.location = location;
        this.ticketCalculator = ticketCalculator;
    }

    checkin(plate: string, checkinDate: Date) {
        this.tickets.push({ plate, checkinDate });
    }

    checkout(plate: string, checkoutDate: Date) {
        const ticket = this.tickets.find(ticket => ticket.plate === plate);
        if (!ticket) throw new Error("Ticket not found");
        let amount = this.ticketCalculator.calculate(ticket.checkinDate, checkoutDate);
        return {
            amount
        }
    }
}