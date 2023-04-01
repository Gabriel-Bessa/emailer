import fp from "fastify-plugin";
import {BusinessRuleException} from "../config/business-rule.exception";

export interface ErroHandlerPlugin {}
export default fp<ErroHandlerPlugin>(async (fastify) => {
    await fastify.setErrorHandler(function (error, request, reply) {
        if (error instanceof BusinessRuleException) {
            reply.status(400).send(error)
            return;
        }
        fastify.log.error(error)
        reply.status(500).send(error)
    })
});