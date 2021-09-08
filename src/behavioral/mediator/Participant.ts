export default class Participant {
    id: string;

    constructor (id: string) {
        this.id = id;
    }

    send(participant: Participant, message: string) {
        participant.receive(this, message);
    }

    receive(from: Participant, message: string) {
        console.log(`${this.id} recebeu a mensagem ${message} de ${from.id}`);
    }
}