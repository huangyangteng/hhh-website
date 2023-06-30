export interface Segment {
    start: number
    end: number
}
export enum PlayMode {
    Normal,
    LoopOne,
    Sequence
}
export interface HistoryItem{
    name:string
    time:string
    currentTime:number
}