import LogHandler from "./LogHandler";
import LoginHandler from "./LoginHandler";
import Request from "./Request";
import Response from "./Response";
import Router from "./Router";

test("Deve tratar uma requisição", function () {
    const request = new Request("/login", "post", { username: "rodrigobranas", password: "123456"});
    const response = new Response();
    const router = new Router();
    const logHandler = new LogHandler();
    const loginHandler = new LoginHandler();
    logHandler.setNext(loginHandler)
    router.register(logHandler);
    router.process(request, response);
    expect(response.body.token).toBe("123456");
});
