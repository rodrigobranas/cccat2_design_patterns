import ChatRoom from "./ChatRoom";
import Participant from "./Participant";

test("Deve trocar mensagens diretamente", function () {
    const participantA = new Participant("A");
    const participantB = new Participant("B");
    const participantC = new Participant("C");
    participantA.send(participantB, "Hello Everybody!");
    participantA.send(participantC, "Hello Everybody!");
    participantB.send(participantA, "Hello A!");
    participantB.send(participantC, "Hello A!");
    participantC.send(participantA, "Hello A!");
    participantC.send(participantB, "Hello A!");
});

test("Deve trocar mensagens pelo chatroom", function () {
    const participantA = new Participant("A");
    const participantB = new Participant("B");
    const participantC = new Participant("C");
    const chatRoom = new ChatRoom();
    chatRoom.register(participantA);
    chatRoom.register(participantB);
    chatRoom.register(participantC);
    chatRoom.sendAll(participantA, "Hello Everybody!");
    chatRoom.sendAll(participantB, "Hello A!");
    chatRoom.sendAll(participantC, "Hello A!");
});