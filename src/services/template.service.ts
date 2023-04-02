import {Inject, Service} from "@fastify-resty/core";
import {FastifyInstance} from "fastify";
import {TemplateType} from "../domain/enum/templete-type.enum";
import {basicTemplate} from "./templastes/basicTemplate";
import {Customer} from "../domain/schemas/customer.schema";
import {EmailBasic} from "../domain/dto/email.basic.model";

@Service()
export class TemplateService {
    @Inject()
    instance: FastifyInstance;

    public getTemplateByType<T>(templateType: TemplateType, payload: T, customer: Customer) : string {
        switch (templateType) {
            case TemplateType.BASIC_EMAIL:
                return basicTemplate(customer, payload as EmailBasic);
            default:
                return ''
        }
    }

}