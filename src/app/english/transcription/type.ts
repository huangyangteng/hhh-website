export interface SymbolItem {
    text: string
    page: number
    start: number
}

export interface SymbolList {
    title: string
    symbols: SymbolItem[]
}
