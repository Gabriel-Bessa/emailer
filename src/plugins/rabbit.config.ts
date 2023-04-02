import fp from "fastify-plugin";

export interface RabbitConfig {}
export default fp<RabbitConfig>(async (fastify) => {
    await fastify.register(require('fastify-amqp'), {
        // the default value is amqp
        protocol: 'amqp',
        hostname: fastify.config.RABBIT_HOST,
        // the default value is 5672
        port: 5672,
        // the default value is guest
        username: fastify.config.RABBIT_USERNAME,
        // the default value is guest
        password: fastify.config.RABBIT_PASSWORD,
        // the default value is empty
        vhost: fastify.config.RABBIT_VHOST
    })

});