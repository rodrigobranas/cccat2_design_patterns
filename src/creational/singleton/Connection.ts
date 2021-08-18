export default class Connection {
    private static instance: Connection | undefined;
    id: number;

    private constructor () {
        this.id = Math.floor(Math.random() * 1000);
    }

    static getInstance() {
        if (!Connection.instance) {
            Connection.instance = new Connection();
        }
        return Connection.instance;
    }
}