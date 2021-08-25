import Beer from "./Beer";
import Order from "./Order";
import Water from "./Water";
import Whisky from "./Whisky";

test("Deve calcular os impostos items", function () {
    const order = new Order();
    order.addItem(new Beer("Coruja 600ml", 20)); // 10% 2
    order.addItem(new Whisky("Jack Daniels", 100)); // 20% 20
    order.addItem(new Water("Crystal 500ml", 5)); // 0% 0
    const taxes = order.getTaxes();
    expect(taxes).toBe(22);
});
