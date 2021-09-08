export default class Request {
    url: string;
    method: string;
    body: any;

    constructor (url: string, method: string, body: any) {
        this.url = url;
        this.method = method;
        this.body = body;
    }
}
