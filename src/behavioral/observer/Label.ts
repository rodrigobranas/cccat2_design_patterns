import Observer from "./Observer";

export default class Label implements Observer {
    expression: string;
    value: string;

    constructor (expression: string) {
        this.expression = expression;
        this.value = "";
    }

    notify(name: string, value: string): void {
        this.value = this.expression.replace(`{{${name}}}`, value);
    }
}
