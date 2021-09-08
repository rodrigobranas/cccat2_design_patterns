import Handler from "./Handler";
import Request from "./Request";
import Response from "./Response";

export default class LoginHandler extends Handler {

    handle(request: Request, response: Response): void {
        if (request.body.username === "rodrigobranas" && request.body.password === "123456") {
            response.body = {
                token: "123456"
            }
        }
    }
}