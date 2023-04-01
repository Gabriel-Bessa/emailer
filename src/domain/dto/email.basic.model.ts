import {FastifySchema} from "fastify/types/schema";
import {S} from 'fluent-json-schema'
import {RegexUtils} from "../../services/utils/regex.utils";

export interface EmailBasic {
    to: string
    subject: string
    title: string,
    content: string

}

export const EmailBasicSchema: FastifySchema = {
    body: S.object()
        .prop('to', S.string().maxLength(255).minLength(2).pattern(RegexUtils.getEmailRegex()))
        .prop('subject', S.string().maxLength(255).minLength(2))
        .prop('title', S.string().maxLength(255).minLength(2))
        .prop('title', S.string().maxLength(1000).minLength(2))
        .required(['to', 'subject', 'title', 'content'])
        .valueOf()
}