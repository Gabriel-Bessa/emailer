import fp from "fastify-plugin";
import {SimpleIntervalJob, Task, ToadScheduler} from "toad-scheduler";
import fastifyAmqp from "fastify-amqp";
import {QueueMessage} from "../domain/dto/queue.model";

export interface ScheduleConfig {}

export default fp<ScheduleConfig>(async (fastify) => {
    const scheduler = new ToadScheduler()
    const task = new Task('queue::consumer', () => {
        const channel: fastifyAmqp.FastifyAmqpChannelObject = fastify.amqp.channel
        const queue = fastify.config.RABBIT_TOPIC
        channel.consume(queue, (message: QueueMessage<any>) => {
            if (message) {
                console.log(JSON.parse(message.content))
            }
        }, { noAck: true }, (err: any) => {
            fastify.log.error("[ScheduleConfig::Consumer] error: " + err)
        });
    })
    const job = new SimpleIntervalJob({ seconds: 10, }, task)
    fastify.ready().then(() => {
        scheduler.addSimpleIntervalJob(job)
    })
});