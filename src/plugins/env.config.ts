import fp from "fastify-plugin";
import {fastifyEnv} from "@fastify/env";
import mongoose from "mongoose";
import {Customer, CustomerSchema} from "../domain/schemas/customer.schema";

declare module 'fastify' {
    export interface FastifyInstance {
        config: {
            DB_PASSWORD: string,
            DB_USER: string,
            DB_HOST: string,
        },
        store: {
            Customer: mongoose.Model<Customer>
            db: typeof mongoose
        }
    }
}

export interface EnvPluginOptions {
}

export default fp<EnvPluginOptions>(async (fastify) => {
    const schema = {
        type: 'object',
        required: [ 'DB_PASSWORD', 'DB_USER', 'DB_HOST' ],
        properties: {
            DB_PASSWORD: {
                type: 'string',
            },
            DB_USER: {
                type: 'string',
            },
            DB_HOST: {
                type: 'string',
            }
        }
    }
    const options = {
        confKey: 'config',
        dotenv: true,
        schema: schema,
        data: process.env
    }
    await fastify.register(fastifyEnv, options)
    await fastify.after();
    const db = await mongoose.connect(`mongodb://${fastify.config.DB_USER}:${fastify.config.DB_PASSWORD}@${fastify.config.DB_HOST}`, {
        dbName: "emailer"
    }).then(conn => {
        fastify.decorate("store", {
            Customer: conn.model("Customer", CustomerSchema),
            db: conn
        })
        return conn;
    }).catch(reason => console.error(reason))

    if(!db) throw new Error("Cannot connect to database")
})
