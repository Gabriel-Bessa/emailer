import {FastifyToken, Inject, Service} from "@fastify-resty/core";
import {FastifyInstance} from "fastify";
import {Customer} from "../domain/schemas/customer.schema";

@Service()
export class CustumerService {
    @Inject(FastifyToken)
    instance: FastifyInstance;

    public async getCustomerId(id: string) : Promise<Customer> {
        return await this.instance.store.Customer.findOne({'_id': id}).exec();
    }

}