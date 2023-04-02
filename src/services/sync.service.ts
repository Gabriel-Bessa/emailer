import {FastifyToken, Inject, Service} from "@fastify-resty/core";
import {FastifyInstance} from "fastify";
import {TemplateType} from "../domain/enum/templete-type.enum";
import {Customer} from "../domain/schemas/customer.schema";
import {EmailService} from "./email.service";

@Service('SyncService')
export class SyncService {
    @Inject(FastifyToken)
    instance: FastifyInstance;

    @Inject()
    emailService: EmailService

    public sendToQueue<T>(principal: Customer, payload: T, type: TemplateType.BASIC_EMAIL) : void {
        const channel = this.instance.amqp.channel
        const queue = this.instance.config.RABBIT_TOPIC
        channel.assertQueue(queue, {
            durable: true
        })
        channel.sendToQueue(queue, Buffer.from(JSON.stringify(payload)), {headers: this.buildHeaders(type, principal)})
    }

    private buildHeaders(type: TemplateType, customer: Customer) : any {
        return {
            "pattern": type,
            "customer": Buffer.from(customer._id).toString()
        };
    }

}