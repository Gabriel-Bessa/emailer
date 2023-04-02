import {Controller, FastifyToken, Inject, POST} from "@fastify-resty/core";
import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
import {EmailService} from "../services/email.service";
import {EmailBasic, EmailBasicSchema} from "../domain/dto/email.basic.model";

@Controller("/email")
export class EmailController {
    @Inject(FastifyToken)
    instance: FastifyInstance;
    @Inject()
    service: EmailService

    @POST('/send-basic', {schema: EmailBasicSchema})
    async sendBasic(request: FastifyRequest<{Body: EmailBasic}>, reply: FastifyReply) {
        this.instance.log.debug("[EmailController::send] Rest request to send basic email")
        this.service.sendBasicEmail(request)
        return {a : "a"}
    }

    @POST('')
    async teste(request: FastifyRequest, reply: FastifyReply) {
        this.instance.log.debug("[EmailController::send] Rest request to send basic email")
        return {a : "a"}
    }

}