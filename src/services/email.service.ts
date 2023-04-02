import * as nodemailer from "nodemailer";
import {EmailUtils} from "./utils/email.utils";
import {helloTemplate} from "./templastes/hello.template";
import {EmailBasic} from "../domain/dto/email.basic.model";
import {FastifyInstance} from "fastify";
import {Inject, Service} from "@fastify-resty/core";
import {Customer} from "../domain/schemas/customer.schema";
import {Transporter} from "nodemailer";

@Service()
export class EmailService {
    @Inject()
    instance: FastifyInstance

    private createTransportByCustomer(customer: Customer) : Transporter {
        const mailer = customer.customer.mail;
        return nodemailer.createTransport({
            service: mailer.service,
            host: mailer.host,
            auth: {
                user: mailer.user,
                pass: mailer.password
            },
        });
    }

    public sendGenericEmail(customer: Customer, emailBasic: EmailBasic) {
        const template = helloTemplate(customer, emailBasic);
        let email = EmailUtils.createEmail(`${emailBasic.subject} <noreply@oclubedaaventura.com.br>`, emailBasic.to, emailBasic.title, template);
        this.createTransportByCustomer(customer).sendMail(email);
    }



}
