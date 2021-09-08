import Observable from "./Observable";

export default class InputText extends Observable {
    name: string;
    value: string;

    constructor (name: string) {
        super();
        this.name = name;
        this.value = "";
    }

    setValue(value: string) {
        this.value = value;
        this.notifyAll(this.name, this.value);
    }
}
