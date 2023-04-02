import * as nodemailer from "nodemailer";
import {Transporter} from "nodemailer";
import {Email, EmailUtils} from "./utils/email.utils";
import {EmailBasic} from "../domain/dto/email.basic.model";
import {FastifyInstance, FastifyRequest} from "fastify";
import {FastifyToken, Inject, Service} from "@fastify-resty/core";
import {Customer} from "../domain/schemas/customer.schema";
import {Security} from "../config/security.config";
import {TemplateType} from "../domain/enum/templete-type.enum";
import {TemplateService} from "./template.service";
import {QueueMessage} from "../domain/dto/queue.model";
import {CustumerService} from "./custumerService";

@Service()
export class EmailService {
    @Inject(FastifyToken) instance: FastifyInstance

    @Inject() templateService: TemplateService
    @Inject() customerService: CustumerService

    public sendBasicEmail(request: FastifyRequest<{ Body: EmailBasic }>) {
        const customer = Security.getPrincipal(request);
        const body: EmailBasic = request.body;
        this.sendGenericEmail(customer, body, TemplateType.BASIC_EMAIL);
    }

    public async processQueue(message: QueueMessage<any>) {
        if (message) {
            const type: TemplateType = message.properties.headers.pattern as TemplateType
            const customer: Customer = await this.customerService.getCustomerId(message.properties.headers.customer)
            if (customer) {
                const payload: EmailBasic = JSON.parse(message.content) as EmailBasic;
                console.log(`[EmailService::processQueue] consumes from queue from CUSTOMER: {${customer.customer.name}} of EMAIL: {${type}} to: {${payload.to}}`)
                const template = this.templateService.getTemplateByType(type, payload, customer);
                const email = EmailUtils.createEmail(`${payload.subject} <${customer.customer.mail.user}>`, payload.to, payload.title, template);
                await this.sendMail(this.createTransportByCustomer(customer), email, type, customer)
            }
        }
    }

    private createTransportByCustomer(customer: Customer): Transporter {
        const mailer = customer.customer.mail;
        return nodemailer.createTransport({
            service: mailer.service, host: mailer.host, auth: {
                user: mailer.user, pass: mailer.password
            },
        });
    }

    private async sendMail(transporter: Transporter, email: Email, type: TemplateType, customer: Customer) {
        try {
            await transporter.sendMail(email);
        } catch (e: any) {
            await this.instance.store.EmailError.create({
                type: type, payload: JSON.stringify(email), errorDate: new Date(), customer_id: Buffer.from(customer._id).toString()
            });
            console.log(e.message)
        }
    }

    private sendGenericEmail(customer: Customer, emailBasic: EmailBasic, type: TemplateType) {
        const template = this.templateService.getTemplateByType(type, emailBasic, customer);
        let email = EmailUtils.createEmail(`${emailBasic.subject} <${customer.customer.mail.user}>`, emailBasic.to, emailBasic.title, template);
        this.sendMail(this.createTransportByCustomer(customer), email, type, customer);
    }
}
