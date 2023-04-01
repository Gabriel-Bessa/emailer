import { Schema } from "mongoose"

export enum SocialType {
    'FACEBOOK' = 'FACEBOOK',
    'INSTAGRAM' = 'INSTAGRAM',
    'LINKEDIN' = 'LINKEDIN',
    'TWITTER' = 'TWITTER',
    'PINTEREST' = 'PINTEREST',
}

export interface CustomerStyle {
    color: string
}

export interface CustomerMail {
    service: string,
    host: string,
    user: string,
    password: string
}

export interface CustomerSocial {
    url: string,
    type: SocialType
}

export interface Customer {
    _id: string;
    api_key: string;
    customer: {
        name: string,
        description: string,
        style: CustomerStyle,
        urls: {
            logo: string
        },
        mail: CustomerMail,
        social: CustomerSocial[]
    };

    expiration: Date;
}


export const CustomerSchema = new Schema<Customer>({
    api_key: String,
    expiration: Date,
    customer: {
        name: String,
        description: String,
        urls: {
            logo: String
        },
        style: {
            color: String
        },
        mail: {
            service: String,
            host: String,
            user: String,
            password: String
        },
        social: [
            {
                type: {type: String, enum: Object.values(SocialType)},
                url: String
            }
        ],
    },
});
