import fp from "fastify-plugin";
import {Security} from "../config/security.config";

export interface ApikeyPlugin {}

export default fp<ApikeyPlugin>(async (fastify, opts) => {
    await fastify.addHook('preHandler', (request, reply, done) => {
        Security.authorization(request, reply, done, fastify);
    });
})