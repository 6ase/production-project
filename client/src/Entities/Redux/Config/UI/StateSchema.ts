import { ErrorResponse } from 'Features/services/AuthService';

export interface CounterShema {
    value: number
}
export interface ActiveShema {
    isActive: boolean,
    content: string
}
export interface StateShema {
    counter: CounterShema,
    modal: ActiveShema
    user: UserData,
}
export interface UserSchema {
    id?: string,
    name?: string,
    email?: string,
    isActivated?: boolean
}
export interface ServerResponse {
    tokens?: { refreshToken: string, accesToken: string},
    user?: UserSchema
}

export interface UserData {
    userData?: UserSchema,
    isLoading?: boolean,
    error?: ErrorResponse
}
