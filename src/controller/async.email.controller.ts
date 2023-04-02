import {Controller, FastifyToken, Inject, POST} from "@fastify-resty/core";
import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
import {EmailBasic} from "../domain/dto/email.basic.model";
import {MessageBuilder} from "../domain/dto/queue.model";

@Controller("/async/email")
export class AsyncEmailController {
    @Inject(FastifyToken)
    instance: FastifyInstance;

    @POST("")
    async sendBasicAsync(request: FastifyRequest<{Body: EmailBasic}>, reply: FastifyReply) {
        this.instance.log.debug("[AsyncEmailController::sendBasicAsync] Rest request to send async basic email")
        const body : EmailBasic = request.body;
        const channel = this.instance.amqp.channel
        const queue = this.instance.config.RABBIT_TOPIC
        channel.assertQueue(queue, {
            durable: true
        })
        const message = MessageBuilder.build(body, [{key: "pattern", value: "SEND_BASIC"}])
        channel.sendToQueue(queue, Buffer.from(message))
        reply.send(' [x] Sent ' + message)
    }

}