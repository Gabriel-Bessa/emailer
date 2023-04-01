export class RegexUtils {

    public static getEmailRegex() : string {
        return '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
    }

}