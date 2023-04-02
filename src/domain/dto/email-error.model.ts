import {TemplateType} from "../enum/templete-type.enum";

export interface EmailErrorDTO {

    _id: string;
    type: TemplateType
    errorDate: Date
    description: string;

}