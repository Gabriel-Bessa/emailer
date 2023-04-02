import {Controller, FastifyToken, Inject} from "@fastify-resty/core";
import {FastifyInstance} from "fastify";
import {SimpleIntervalJob, Task, ToadScheduler} from "toad-scheduler";
import fastifyAmqp from "fastify-amqp";
import {QueueMessage} from "../../domain/dto/queue.model";
import {EmailService} from "../../services/email.service";

@Controller()
export class StartController {

    constructor(@Inject(FastifyToken) instance: FastifyInstance, @Inject() emailService: EmailService) {
        instance.addHook('onReady', function () {
            const scheduler = new ToadScheduler()
            const task = new Task('queue::consumer', () => {
                console.log(`[SyncService::startSchedule] Start scheduling with status ${instance.job.getStatus()}`)
                const channel: fastifyAmqp.FastifyAmqpChannelObject = instance.amqp.channel
                const queue = instance.config.RABBIT_TOPIC
                channel.assertQueue(queue, {
                    durable: true
                })
                channel.consume(queue, (message: QueueMessage<any>) => {
                    emailService.processQueue(message);
                }, { noAck: true }, (err: any) => {
                    instance.log.error("[ScheduleConfig::Consumer] error: " + err)
                });
            })
            const job = new SimpleIntervalJob({ seconds: instance.config.SCHEDULE_INTERVAL }, task)
            instance.decorate("job", job);
            scheduler.addSimpleIntervalJob(job)
        });
    }

}