import {Mapper} from "ts-mapstruct";
import {EmailErrorDTO} from "../../domain/dto/email-error.model";
import {EmailError} from "../../domain/schemas/email-error.schema";
import {TemplateType} from "../../domain/enum/templete-type.enum";

@Mapper()
export class EmailErrorMapper {

    entityToDto(entity: EmailError) : EmailErrorDTO {
        return new class implements EmailErrorDTO {
            _id: string;
            description: string;
            errorDate: Date;
            type: TemplateType;
        };
    }

}