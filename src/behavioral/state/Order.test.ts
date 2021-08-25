import Order from "./Order";

test("Deve criar um pedido e o status deve ser open", function () {
    const order = new Order();
    expect(order.status.value).toBe("open");
});

test("Deve criar um pedido e mudar o status para confirmed", function () {
    const order = new Order();
    order.confirm();
    expect(order.status.value).toBe("confirmed");
});

test("Deve criar um pedido e mudar o status para cancelled", function () {
    const order = new Order();
    order.cancel();
    expect(order.status.value).toBe("cancelled");
});

test("Deve criar um pedido, mudar o status para confirmed e mudar o status para open", function () {
    const order = new Order();
    order.confirm();
    expect(() => order.open()).toThrow(new Error("The order is already confirmed"));
});

test("Deve criar um pedido, mudar o status para confirmed e mudar o status para open", function () {
    const order = new Order();
    order.cancel();
    expect(() => order.open()).toThrow(new Error("The order is already cancelled"));
});

test("Deve criar um pedido, mudar o status para confirmed e mudar o status para refunded", function () {
    const order = new Order();
    order.confirm();
    order.refund();
    expect(order.status.value).toBe("refunded");
});