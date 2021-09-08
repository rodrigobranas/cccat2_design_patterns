import Handler from "./Handler";
import Request from "./Request";
import Response from "./Response";

export default class LogHandler extends Handler {

    handle(request: Request, response: Response): void {
        console.log(request);
        this.next?.handle(request, response);
    }

}