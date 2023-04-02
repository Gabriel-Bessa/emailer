export interface QueueMessage<T> {

    headers: Map<string, string>
    content: T

}

export class MessageBuilder {

    public static build<T>(payload: T, headers: [{key: string, value: string}]) : string {
        let messageHeaders = new Map<string, string>();
        headers.forEach(it => {
            messageHeaders.set(it.key, it.value);
        })
        return JSON.stringify({
            headers: messageHeaders,
            content: payload
        })
    }

}