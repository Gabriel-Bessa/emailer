import { test } from 'tap'
import Fastify from 'fastify'
import Support from '../../src/plugins/routing.config'

test('support works standalone', async (t) => {
  const fastify = Fastify()
  void fastify.register(Support)
  await fastify.ready()

  t.equal(fastify.someSupport(), 'hugs')
})
