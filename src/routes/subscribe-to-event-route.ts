import { z } from 'zod';
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';

export const subscribeToEventRoute: FastifyPluginAsyncZod = async (app) => {
  // Body, search params, route params
  app.post('/subscriptions', {
    schema: {
      tags: ['Subscriptions'],
      body: z.object({
        name: z.string(),
        email: z.string().email(),
      }),
      response: {
        201: z.object({
          name: z.string(),
          email: z.string().email(),
        })
      }
    },
  }, async (request, reply) => {
    const { name, email } = request.body;
  
    // status code 201 sucesso e recurso criado
    return reply.status(201).send({ name, email }); 
  })
}