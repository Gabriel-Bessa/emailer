import {Template} from "../../domain/dto/template.model";
import {Customer, CustomerSocial} from "../../domain/schemas/customer.schema";

export class TemplateUtils {

    private static AVATAR_URL = "https://bessatech.s3.us-east-1.amazonaws.com/assests/mailer/avatar.png";

    public static getHeadAndFont(): string {
        return `
			<head>
                <meta content="text/html; charset=UTF-8" http-equiv="Content-Type">
                <meta content="width=device-width, initial-scale=1.0" name="viewport">
                <meta name="x-apple-disable-message-reformatting">
                <meta content="IE=edge" http-equiv="X-UA-Compatible">
                <title></title>
                <style type="text/css">
                    @media only screen and (min-width: 620px) {
                        .u-row {
                            width: 600px !important;
                        }
                
                        .u-row .u-col {
                            vertical-align: top;
                        }
                
                        .u-row .u-col-33p33 {
                            width: 199.98px !important;
                        }
                
                        .u-row .u-col-66p67 {
                            width: 400.02px !important;
                        }
                
                        .u-row .u-col-100 {
                            width: 600px !important;
                        }
                
                    }
                
                    @media (max-width: 620px) {
                        .u-row-container {
                            max-width: 100% !important;
                            padding-left: 0px !important;
                            padding-right: 0px !important;
                        }
                
                        .u-row .u-col {
                            min-width: 320px !important;
                            max-width: 100% !important;
                            display: block !important;
                        }
                
                        .u-row {
                            width: 100% !important;
                        }
                
                        .u-col {
                            width: 100% !important;
                        }
                
                        .u-col > div {
                            margin: 0 auto;
                        }
                    }
                
                    body {
                        margin: 0;
                        padding: 0;
                    }
                
                    table,
                    tr,
                    td {
                        vertical-align: top;
                        border-collapse: collapse;
                    }
                
                    p {
                        margin: 0;
                    }
                
                    .ie-container table,
                    .mso-container table {
                        table-layout: fixed;
                    }
                
                    * {
                        line-height: inherit;
                    }
                
                    a[x-apple-data-detectors='true'] {
                        color: inherit !important;
                        text-decoration: none !important;
                    }
                
                    table, td {
                        color: #000000;
                    }
                
                    #u_body a {
                        color: #0000ee;
                        text-decoration: underline;
                    }
                
                    @media (max-width: 480px) {
                        #u_content_heading_1 .v-container-padding-padding {
                            padding: 40px 10px 0px !important;
                        }
                
                        #u_content_text_1 .v-container-padding-padding {
                            padding: 5px 10px 20px !important;
                        }
                
                        #u_content_image_1 .v-container-padding-padding {
                            padding: 10px 10px 36px !important;
                        }
                
                        #u_content_button_2 .v-size-width {
                            width: 50% !important;
                        }
                
                        #u_content_heading_2 .v-container-padding-padding {
                            padding: 40px 10px 0px !important;
                        }
                
                        #u_content_heading_2 .v-font-size {
                            font-size: 20px !important;
                        }
                
                        #u_content_heading_2 .v-text-align {
                            text-align: left !important;
                        }
                
                        #u_content_text_3 .v-container-padding-padding {
                            padding: 10px !important;
                        }
                
                        #u_content_text_3 .v-text-align {
                            text-align: left !important;
                        }
                
                        #u_content_text_3 .v-line-height {
                            line-height: 140% !important;
                        }
                
                        #u_content_button_1 .v-container-padding-padding {
                            padding: 10px 10px 40px !important;
                        }
                
                        #u_content_button_1 .v-size-width {
                            width: 65% !important;
                        }
                
                        #u_content_button_1 .v-text-align {
                            text-align: left !important;
                        }
                
                        #u_content_heading_3 .v-container-padding-padding {
                            padding: 40px 10px 0px !important;
                        }
                
                        #u_content_heading_3 .v-text-align {
                            text-align: left !important;
                        }
                
                        #u_content_text_2 .v-container-padding-padding {
                            padding: 0px 10px 40px !important;
                        }
                
                        #u_content_text_2 .v-text-align {
                            text-align: left !important;
                        }
                
                        #u_content_image_2 .v-container-padding-padding {
                            padding: 40px 10px 0px !important;
                        }
                
                        #u_content_image_2 .v-src-width {
                            width: auto !important;
                        }
                
                        #u_content_image_2 .v-src-max-width {
                            max-width: 50% !important;
                        }
                
                        #u_content_heading_4 .v-container-padding-padding {
                            padding: 20px 10px 0px !important;
                        }
                
                        #u_content_heading_4 .v-text-align {
                            text-align: center !important;
                        }
                
                        #u_content_text_deprecated_1 .v-text-align {
                            text-align: center !important;
                        }
                
                        #u_content_social_1 .v-container-padding-padding {
                            padding: 10px 10px 10px 55px !important;
                        }
                
                        #u_content_text_deprecated_2 .v-container-padding-padding {
                            padding: 0px 10px 30px !important;
                        }
                
                        #u_content_text_deprecated_2 .v-text-align {
                            text-align: center !important;
                        }
                
                        #u_content_text_4 .v-container-padding-padding {
                            padding: 10px 10px 40px !important;
                        }
                
                        #u_content_text_4 .v-text-align {
                            text-align: center !important;
                        }
                    }
                </style>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap" rel="stylesheet" type="text/css">
            </head>
`;
    }

    public static getDefaultHeader(template: Template): string {
        return `
            <div class="u-row-container" style="padding: 0px;background-color: ${template.customer.customer.style.color};background-position: center top;">
                <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td align="center" style="padding: 0px;background-color: ${template.customer.customer.style.color}">
                                    <table border="0" cellpadding="0" cellspacing="0" style="width:600px;">
                                        <tr style="background-color: transparent;">
                                            <td align="center" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top" width="600">
                                                <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                                    <div style="height: 100%;width: 100% !important;">
                                                        <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                                            ${this.getHeaderTitle(template.title)}

                                                            ${this.getHeaderSubTitle(template)}

                                                            ${this.getHeaderAvatar()}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }

    static getCostumerFooter(template: Template, customer: Customer) {
        return `
        <div class="u-row-container" style="padding: 0px;background-color: transparent">
            <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                            <td align="center" style="padding: 0px;background-color: transparent;">
                                <table border="0" cellpadding="0" cellspacing="0" style="width:600px;">
                                    <tr style="background-color: transparent;">
                                        <td align="center" style="width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top" width="200">
                                            <div class="u-col u-col-33p33" style="max-width: 320px;min-width: 200px;display: table-cell;vertical-align: top;">
                                                <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                                    <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                                        <table border="0" cellpadding="0" cellspacing="0" id="u_content_image_2" role="presentation" style="font-family:'Open Sans',sans-serif;" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td align="left" class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding: 3px;font-family:'Open Sans',sans-serif;">
                                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                            <tr>
                                                                                <td align="center" class="v-text-align" style="padding-right: 0px;padding-left: 0px;">
                                                                                    <img align="center" alt="image" border="0" class="v-src-width v-src-max-width" src="${template.customer.customer.urls.logo}" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 91%;max-width: 163.8px;" title="image" width="163.8"/>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td align="center" style="width: 400px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top" width="400">
                                            <div class="u-col u-col-66p67" style="max-width: 320px;min-width: 400px;display: table-cell;vertical-align: top;">
                                                <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                                    <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                                        <table border="0" cellpadding="0" cellspacing="0" id="u_content_heading_4" role="presentation" style="font-family:'Open Sans',sans-serif;" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td align="left" class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:65px 10px 0px;font-family:'Open Sans',sans-serif;">
                                                                        <h1 class="v-text-align v-line-height v-font-size" style="margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-family: 'Open Sans',sans-serif; font-size: 22px; "> <strong>${template.customer.customer.name}</strong></h1>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                        ${this.getFooterCustomerDescription(customer)}

                                                        ${this.getSocialAreas(customer.customer.social)}

                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        
        `;

    }

    private static getHeaderAvatar() {
        return `
        <table border="0" cellpadding="0" cellspacing="0" id="u_content_image_1" role="presentation" style="font-family:'Open Sans',sans-serif;" width="100%">
            <tbody>
                <tr>
                    <td align="left" class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%"> 
                            <tr>
                                <td align="center" class="v-text-align" style="padding-right: 0px;padding-left: 0px;">
                                    <img align="center" alt="image" border="0" class="v-src-width v-src-max-width" src="${this.AVATAR_URL}" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 77%;max-width: 446.6px;" title="image" width="446.6"/>
                                </td>
                            </tr>
                        </table>    
                    </td>
                </tr>
            </tbody>
        </table>
        `;
    }

    private static getHeaderTitle(title: string): string {
        return `
        <table border="0" cellpadding="0" cellspacing="0" id="u_content_heading_1" role="presentation" style="font-family:'Open Sans',sans-serif;" width="100%">
            <tbody>
                <tr>
                    <td align="left" class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:60px 10px 0px;font-family:'Open Sans',sans-serif;">
                        <h1 class="v-text-align v-line-height v-font-size" style="margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 30px; "><strong>${title}</strong></h1>
                    </td>
                </tr>
            </tbody>
        </table>
        `;
    }

    private static getHeaderSubTitle(template: Template): string {
        if (!template.subTitle) {
            return ``;
        }
        return `
        <table border="0" cellpadding="0" cellspacing="0" id="u_content_text_1" role="presentation" style="font-family:'Open Sans',sans-serif;" width="100%">
            <tbody>
                <tr>
                    <td align="left"
                        class="v-container-padding-padding"
                        style="overflow-wrap:break-word;word-break:break-word;padding:5px 60px 10px;font-family:'Open Sans',sans-serif;">
        
                        <div class="v-text-align v-line-height v-font-size"
                             style="color: #ced4d9; line-height: 140%; text-align: center; word-wrap: break-word;">
                            <p style="line-height: 140%;"${template.subTitle}</p>
                        </div>
        
                    </td>
                </tr>
            </tbody>
        </table>`
    }

    private static getSocialAreas(socials: CustomerSocial[]): string {
        if (socials == null || socials.length <= 0 ) {
            return ``;
        }
        return `
        <table border="0" cellpadding="0" cellspacing="0" id="u_content_social_1" role="presentation" style="font-family:'Open Sans',sans-serif;" width="100%">
            <tbody>
                <tr>
                    <td align="left" class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;">
                        <div align="left">
                            <div style="display: table; max-width:209px;">
                                <table border="0" cellpadding="0" cellspacing="0" width="209">
                                    <tr>
                                        <td align="left" style="border-collapse:collapse;">
                                            <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:209px;" width="100%">
                                                <tr>
                                                    <td style="width:32px; padding-right: 10px;" valign="top" width="32">
                                                        ${this.getSocialCard(socials)}
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        `;
    }

    private static getSocialCard(socials: CustomerSocial[]) : string {
        const bucketPrefix: string = 'https://bessatech.s3.amazonaws.com/assests/mailer/social/';
        let cards = ``;
        socials.forEach(social => {
            cards = cards.concat(`
            <table align="left" border="0" cellpadding="0" cellspacing="0" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 10px" width="32">
                <tbody>
                    <tr style="vertical-align: top">
                        <td align="left" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top" valign="middle">
                            <a href="${social.url}" target="_blank" title="Facebook">
                                <img alt="Facebook" src="${bucketPrefix + social.type.toLowerCase() + '.png'}" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important" title="Facebook" width="32">
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
            `)
        })

        return cards;
    }

    private static getContactArea(has: boolean) {
        if (!has) {
            return ``;
        }
        return `
        <table border="0" cellpadding="0" cellspacing="0" id="u_content_text_4" role="presentation" style="font-family:'Open Sans',sans-serif;" width="100%">
            <tbody>
                <tr>
                    <td align="left" class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 30px;font-family:'Open Sans',sans-serif;">
                        <div class="v-text-align v-line-height v-font-size" style="line-height: 140%; text-align: center; word-wrap: break-word;">
                            <p style="line-height: 140%;">Powered by BessaTech | Mailer-Service</p>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        `;
    }

    static getLine() : string {
        return `
        <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="font-family:'Open Sans',sans-serif;" width="100%">
                <tbody>
                    <tr>
                        <td align="left" class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 0px 10px;font-family:'Open Sans',sans-serif;">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" height="0px" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%" width="100%">
                                <tbody>
                                    <tr style="vertical-align: top">
                                        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                            <span>&#160;</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        `;
    }

    static getDefaultContent(template: Template, customer: Customer) {
        return `
        <div class="u-row-container" style="padding: 0px;background-color: #eff4f2">
            <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                            <td align="center" style="padding: 0px;background-color: #eff4f2;">
                                <table border="0" cellpadding="0" cellspacing="0" style="width:600px;">
                                    <tr style="background-color: transparent;">
                                        <td align="center" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top" width="600">
                                            <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                                <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                                    <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                                        ${template.content}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        
        `;

    }

    private static getFooterCustomerDescription(customer: Customer) {
        if(!customer.customer.description) {
            return ``
        }
        return `
        <table border="0" cellpadding="0" cellspacing="0" id="u_content_text_deprecated_1" role="presentation" style="font-family:'Open Sans',sans-serif;" width="100%">
            <tbody>
                <tr>
                    <td align="left" class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px;font-family:'Open Sans',sans-serif;">
                        <div class="v-text-align v-line-height v-font-size" style="color: #3d3d3d; line-height: 140%; text-align: left; word-wrap: break-word;">
                            <p style="font-size: 14px; line-height: 140%;"><span style="font-family: 'Open Sans', sans-serif; font-size: 14px; line-height: 19.6px;">${customer.customer.description}</span></p>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        `;

    }

    static getDefaultFooter(template: Template) {
        return `
        <div class="u-row-container" style="padding: 0px;background-color: transparent">
            <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                            <td align="center" style="padding: 0px;background-color: transparent;">
                                <table border="0" cellpadding="0" cellspacing="0" style="width:600px;">
                                    <tr style="background-color: transparent;">
                                        <td align="center" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top" width="600">
                                            <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                                <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                                    <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                                        ${TemplateUtils.getLine()}

                                                        ${TemplateUtils.getContactArea(true)}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        `;

    }
}