import Button from "./Button";

export default class LightButton implements Button {
    color: string;
    backgroundColor: string;

    constructor () {
        this.color = "white";
        this.backgroundColor = "blue";
    }
}
