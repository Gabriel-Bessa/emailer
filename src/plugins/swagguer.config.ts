import fp from "fastify-plugin";

export interface SwagguerPluginOptions {
}

export default fp<SwagguerPluginOptions>(async (fastify) => {
    const swaggerUrl: string = "/swagger"
    await fastify.register(require('@fastify/swagger'), {})
    await fastify.register(require('@fastify/swagger-ui'), {
        routePrefix: swaggerUrl,
        swagger: {
            info: {
                title: 'My FirstAPP Documentation',
                description: 'My FirstApp Backend Documentation description',
                version: '0.1.0',
                termsOfService: 'https://mywebsite.io/tos',
                contact: {
                    name: 'John Doe',
                    url: 'https://www.johndoe.com',
                    email: 'john.doe@email.com'
                }
            },
            externalDocs: {
                url: 'https://www.johndoe.com/api/',
                description: 'Find more info here'
            },
            host: '127.0.0.1:3000',
            basePath: '',
            schemes: ['http', 'https'],
            consumes: ['application/json'],
            produces: ['application/json'],
            tags: [{
                name: 'User',
                description: 'User\'s API'
            }, ],
            definitions: {
                User: {
                    type: 'object',
                    required: ['id', 'email'],
                    properties: {
                        id: {
                            type: 'number',
                            format: 'uuid'
                        },
                        firstName: {
                            type: 'string'
                        },
                        lastName: {
                            type: 'string'
                        },
                        email: {
                            type: 'string',
                            format: 'email'
                        }
                    }
                },
            }
        },
        uiConfig: {
            docExpansion: 'none', // expand/not all the documentations none|list|full
            deepLinking: true
        },
        uiHooks: {
            onRequest: function(request: any, reply: any, next: any) {
                next()
            },
            preHandler: function(request: any, reply: any, next: any) {
                next()
            }
        },
        staticCSP: false,
        transformStaticCSP: (header: any) => header,
        exposeRoute: true
    })
    await fastify.ready(err => {
        if (err) throw err
        fastify.log.debug(`[Swagger] runinng on http://localhost:3000${swaggerUrl}`)
        // @ts-ignore
        fastify.swagger()
    })
});
