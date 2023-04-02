import { Schema } from "mongoose"
import {TemplateType} from "../enum/templete-type.enum";

export interface EmailError {
    _id: string;
    type: TemplateType
    payload: string;
    errorDate: Date
    description: string;
    customer_id: string;
}


export const EmailErrorSchema = new Schema<EmailError>({
    type: {type: String, enum: Object.values(TemplateType)},
    payload: {type: String},
    errorDate: {type: Date},
    description: {type: String},
    customer_id: {type: String}
});
