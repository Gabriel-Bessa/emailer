import {Type} from '@sinclair/typebox';

export default class EmailSchema {
    email = {
        body: Type.Object({
            solicitacao: Type.String(),
            tipo: Type.String(),
            circuitosIds: Type.Array(Type.Number())
        }),
        response: {
            200: Type.Array(Type.Object({
                numeroProtocolo: Type.Number(),
                circuito: Type.String()
            })),
        },
    };
}