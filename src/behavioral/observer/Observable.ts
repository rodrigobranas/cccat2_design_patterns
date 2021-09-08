import Observer from "./Observer";

export default abstract class Observable {
    observers: Observer[];

    constructor () {
        this.observers = [];
    }

    register(observer: Observer) {
        this.observers.push(observer);
    }

    notifyAll(name: string, value: string) {
        for (const observer of this.observers) {
            observer.notify(name, value);
        }
    }
}