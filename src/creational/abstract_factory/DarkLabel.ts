import Label from "./Label";

export default class DarkLabel implements Label {
    color: string;

    constructor () {
        this.color = "white";
    }
}