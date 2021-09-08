import Request from "./Request";
import Response from "./Response";

export default abstract class Handler {
    next: Handler | undefined;

    abstract handle(request: Request, response: Response): void;

    setNext(handler: Handler) {
        this.next = handler;
    }
}