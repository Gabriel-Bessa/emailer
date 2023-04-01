import fp from 'fastify-plugin'
import * as path from 'path';
import { bootstrap } from '@fastify-resty/core';
import {EmailController} from "../controller/email.controller";
export interface RoutingPluginOptions {
}

export default fp<RoutingPluginOptions>(async (fastify, opts) => {
  await fastify.register(bootstrap, {
    entry: path.resolve(__dirname, '../controller'),
    controllers: [EmailController]
  });
})
