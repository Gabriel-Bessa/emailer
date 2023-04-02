import {Controller, FastifyToken, Inject, POST} from "@fastify-resty/core";
import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
import {EmailBasic} from "../domain/dto/email.basic.model";
import {SyncService} from "../services/sync.service";
import {Security} from "../config/security.config";
import {TemplateType} from "../domain/enum/templete-type.enum";
import {Response} from "../domain/dto/response.model";

@Controller("/async/email")
export class AsyncEmailController {
    @Inject(FastifyToken)
    instance: FastifyInstance;

    @Inject()
    syncService: SyncService

    @POST("")
    async sendBasicAsync(request: FastifyRequest<{Body: EmailBasic}>, reply: FastifyReply) : Promise<Response> {
        this.instance.log.debug("[AsyncEmailController::sendBasicAsync] Rest request to send async basic email")
        const body : EmailBasic = request.body;
        this.syncService.sendToQueue(Security.getPrincipal(request), body, TemplateType.BASIC_EMAIL);
        return {
            message: "Email enviado para a fila de processamento!",
            property: "send_email_async"
        };
    }

}