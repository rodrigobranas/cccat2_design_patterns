import AbstractFactory from "./AbstractFactory";
import Button from "./Button";
import DarkButton from "./DarkButton";
import DarkLabel from "./DarkLabel";
import Label from "./Label";

export default class DarkThemeFactory implements AbstractFactory {

    createLabel(): Label {
        return new DarkLabel();
    }
    createButton(): Button {
        return new DarkButton();
    }
}
