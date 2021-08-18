import Connection from "./Connection";

test("Deve conectar sempre na mesma instância", function () {
    const connection1 = Connection.getInstance();
    const connection2 = Connection.getInstance();
    expect(connection1.id).toBe(connection2.id);
});
