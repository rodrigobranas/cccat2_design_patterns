import Button from "./Button";
import Label from "./Label";

export default interface AbstractFactory {
    createLabel(): Label;
    createButton(): Button;
}
