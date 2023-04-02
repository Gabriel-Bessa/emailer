import {TemplateUtils} from "../utils/template.utils";
import {Template} from "../../domain/dto/template.model";
import {EmailBasic} from "../../domain/dto/email.basic.model";
import {Customer} from "../../domain/schemas/customer.schema";

export function basicTemplate(customer: Customer, email: EmailBasic) {
    const template : Template = {
        customer: customer,
        title: email.title,
        subTitle: null,
        content: email.content
    }
    return `
        <!DOCTYPE html>
        <html lang="pt-BR">
        ${TemplateUtils.getHeadAndFont()}
            <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
                <div class="ie-container">
                    <div class="mso-container">
                        <table cellpadding="0" cellspacing="0" id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%">
                            <tbody>
                                <tr style="vertical-align: top">
                                    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td align="center" style="background-color: #ffffff;">
                                                    ${TemplateUtils.getDefaultHeader(template)}
                                                    
                                                    ${TemplateUtils.getDefaultContent(template, customer)}
                                                    
                                                    ${TemplateUtils.getCostumerFooter(template, customer)}
                                                    
                                                    ${TemplateUtils.getDefaultFooter(template)}
                                                </td>
                                            </tr>
                                       </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </body>
        </html>
    `;

}