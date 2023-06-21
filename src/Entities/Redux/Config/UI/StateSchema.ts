export interface CounterShema {
    value: number
}
export interface ActiveShema {
    isActive: boolean
}
export interface StateShema {
    counter: CounterShema,
    active: ActiveShema
}
