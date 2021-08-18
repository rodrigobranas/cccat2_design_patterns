import Label from "./Label";

export default class LightLabel implements Label {
    color: string;

    constructor () {
        this.color = "black";
    }
}