export class BusinessRuleException implements Error {
    message: string = "";
    name: string = "";
    stack: string = "";

    constructor(message: string, name: string) {
        this.message = message;
        this.name = name;
    }
}