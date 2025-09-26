import Fastify from 'fastify';

const fastify = Fastify({
  logger: true // Enable logging for development insights
});

fastify.get('/ping', async (request, reply) => {
  return 'pong';
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Fastify server listening at ${address}`);
});