import {BusinessRuleException} from "./business-rule.exception";
import {Customer} from "../domain/schemas/customer.schema";

export class Security {

    public static async authorization(request: any, reply: any, done: any, fastify: any) {
        if (!request.routerPath.startsWith("/swagger")) {
            const headers = request.headers;
            const apiKeyCandidate = request.query['api_key']
            if (headers["api_key"] == null && apiKeyCandidate == null) {
                reply.code(401).send(new BusinessRuleException("o Header api_key não foi indentificado", "auth_exception"))
            }
            const apiKey = headers['api_key'] != null ? headers['api_key'] : apiKeyCandidate ;
            let customer = await fastify.store.Customer.findOne({'api_key': apiKey}).exec();
            if (customer == null) {
                reply.code(401).send(new BusinessRuleException("o Header api_key não pertence a ninguem!", "auth_exception"));
            }
            request.user = customer;
        }
        done()
    }

    public static getPrincipal(request: any) : Customer {
        return request.user;
    }

}