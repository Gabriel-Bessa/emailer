import {Customer} from "../schemas/customer.schema";

export interface Template {
    customer: Customer
    title: string
    subTitle: string | null

    content: string

}