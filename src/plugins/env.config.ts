import fp from "fastify-plugin";
import {fastifyEnv} from "@fastify/env";
import mongoose from "mongoose";
import {Customer, CustomerSchema} from "../domain/schemas/customer.schema";
import fastifyAmqp from "fastify-amqp";
import {SimpleIntervalJob} from "toad-scheduler";
import {EmailError, EmailErrorSchema} from "../domain/schemas/email-error.schema";

declare module 'fastify' {
    export interface FastifyInstance {
        config: {
            DB_PASSWORD: string, DB_USER: string, DB_HOST: string, RABBIT_HOST: string, RABBIT_USERNAME: string, RABBIT_PASSWORD: string
            RABBIT_TOPIC: string, RABBIT_VHOST: string, SCHEDULE_INTERVAL: number
        },
        store: {
            Customer: mongoose.Model<Customer>
            EmailError: mongoose.Model<EmailError>
            db: typeof mongoose
        },
        amqp: {
            connection: fastifyAmqp.FastifyAmqpConnObject;
            channel: fastifyAmqp.FastifyAmqpChannelObject;
        },
        job: SimpleIntervalJob
    }
}

export interface EnvPluginOptions {
}

export default fp<EnvPluginOptions>(async (fastify) => {
    const schema = {
        type: 'object', required: ['DB_PASSWORD', 'DB_USER', 'DB_HOST', 'RABBIT_HOST', 'RABBIT_USERNAME', 'RABBIT_PASSWORD', 'RABBIT_VHOST', 'RABBIT_TOPIC', 'SCHEDULE_INTERVAL'], properties: {
            DB_PASSWORD: {type: 'string'}, DB_USER: {type: 'string'}, DB_HOST: {type: 'string'}, RABBIT_TOPIC: {type: 'string'},
            RABBIT_HOST: {type: 'string'}, RABBIT_USERNAME: {type: 'string'}, RABBIT_PASSWORD: {type: 'string'}, RABBIT_VHOST: {type: 'string'},
            SCHEDULE_INTERVAL: {type: 'number'}
        }
    }
    const options = {
        confKey: 'config', dotenv: true, schema: schema, data: process.env
    }
    await fastify.register(fastifyEnv, options)
    await fastify.after();
    const db = await mongoose.connect(`mongodb://${fastify.config.DB_USER}:${fastify.config.DB_PASSWORD}@${fastify.config.DB_HOST}`, {
        dbName: "emailer"
    }).then(conn => {
        fastify.decorate("store", {
            Customer: conn.model("Customer", CustomerSchema),
            EmailError: conn.model("EmailError", EmailErrorSchema),
            db: conn
        })
        return conn;
    }).catch(reason => console.error(reason))

    if (!db) throw new Error("Cannot connect to database")
})
