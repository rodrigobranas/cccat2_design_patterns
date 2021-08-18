import DarkThemeFactory from "./DarkThemeFactory";
import LightThemeFactory from "./LightThemeFactory";
import View from "./View";

test("Deve criar uma interface gráfica com tema light", function () {
    const view = new View(new LightThemeFactory());
    expect(view.label.color).toBe("black");
    expect(view.button.color).toBe("white");
    expect(view.button.backgroundColor).toBe("blue");
});

test("Deve criar uma interface gráfica com tema dark", function () {
    const view = new View(new DarkThemeFactory());
    expect(view.label.color).toBe("white");
    expect(view.button.color).toBe("white");
    expect(view.button.backgroundColor).toBe("black");
});
