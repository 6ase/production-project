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
}
