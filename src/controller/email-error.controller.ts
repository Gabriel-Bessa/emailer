import {Controller, FastifyToken,  Inject, POST} from "@fastify-resty/core";
import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
import {EmailBasic} from "../domain/dto/email.basic.model";
import {EmailErrorService} from "../services/email-error.service";
import {Security} from "../config/security.config";

@Controller("/portal/email-errors")
export class EmailErrorController {

    @Inject(FastifyToken)
    fastify: FastifyInstance

    @Inject()
    service: EmailErrorService

    @POST("/filter")
    async filterErrors(request: FastifyRequest<{Body: EmailBasic}>, reply: FastifyReply) {
        this.fastify.log.debug("[EmailController::send] Rest request to send basic email")
        return this.service.filter(Security.getPrincipal(request));
    }

}