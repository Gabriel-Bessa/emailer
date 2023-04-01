export class EmailUtils {
    public static createEmail(from: string, to: string, subject: string, template: string) : Email {
        return {
            from: from,
            html: template,
            subject: subject,
            to: to
        }
    }
}

export interface Email {
    from: string,
    to: string,
    subject: string,
    html: string
}