import Button from "./Button";

export default class DarkButton implements Button {
    color: string;
    backgroundColor: string;

    constructor () {
        this.color = "white";
        this.backgroundColor = "black";
    }
}
