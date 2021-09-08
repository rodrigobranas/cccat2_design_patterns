import InputText from "./InputText";
import Label from "./Label";

test("Deve escrever em um input text e atualizar a label", function () {
    const inputText = new InputText("country");
    const label = new Label("País: {{country}}");
    inputText.register(label);
    inputText.setValue("Brasil");
    expect(label.value).toBe("País: Brasil");
    inputText.setValue("França");
    expect(label.value).toBe("País: França");
});