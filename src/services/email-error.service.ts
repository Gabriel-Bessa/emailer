import {FastifyToken, Inject, Service} from "@fastify-resty/core";
import {FastifyInstance} from "fastify";
import {Customer} from "../domain/schemas/customer.schema";
import {EmailErrorMapper} from "./mapper/email-error.mapper";
import {EmailErrorDTO} from "../domain/dto/email-error.model";

@Service()
export class EmailErrorService {

    @Inject(FastifyToken)
    fastify: FastifyInstance
    @Inject()
    mapper: EmailErrorMapper

    public async filter(customer: Customer) : Promise<EmailErrorDTO[]> {
        return await this.fastify.store.EmailError.find({'customer_id': Buffer.from(customer._id).toString()}).exec().then((results) => {
            return results.map(result => {
                let dto: EmailErrorDTO = {
                    _id: result._id,
                    errorDate: result.errorDate,
                    type: result.type,
                    description: result.description
                }
                return dto;
            });
        });
    }

}