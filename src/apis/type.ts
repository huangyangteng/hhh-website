export interface BaseResType<T> {
    code: number
    data: T
    desc: string
    token: string
    total?: number
}

export enum ResCode{
    Success=2000,
}
