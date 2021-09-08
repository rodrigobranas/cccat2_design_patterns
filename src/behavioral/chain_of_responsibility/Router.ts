import Handler from "./Handler";
import Request from "./Request";
import Response from "./Response";

export default class Router {

    handler: Handler | undefined;

    constructor () {
    }

    register(handler: Handler) {
        if (!this.handler) {
            this.handler = handler;
        } else {
            this.handler.setNext(handler);
        }
    }

    process(request: Request, response: Response) {
        if (!this.handler) return;
        this.handler.handle(request, response);
    }
}