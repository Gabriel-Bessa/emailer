export interface QueueMessage<T> {

    properties: {
        headers: any
        contentType: string
    }
    content: T

}