import Participant from "./Participant";

export default class ChatRoom {
    participants: Participant[];

    constructor () {
        this.participants = [];
    }

    register(participant: Participant) {
        this.participants.push(participant);
    }

    sendAll(from: Participant, message: string) {
        for (const to of this.participants) {
            if (from === to) continue;
            from.send(to, message);
        }
    }
}