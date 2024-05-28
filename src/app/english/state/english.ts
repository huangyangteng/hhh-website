import {atom} from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export interface PhoneticsSymbolItem{
    text:string
    start:number
    end:number
}


//use false instead of null,why:  https://github.com/pmndrs/jotai/discussions/629
export const selectedSymbol=atom<PhoneticsSymbolItem|false>(false)


export const globalVolumeAtom=atomWithStorage('globalVolume',0.5)
