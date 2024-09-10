import { create } from 'zustand'
import React from 'react'
import QueryWord from '@/app/english/phonetics/_components/QueryWord'
import PhoneticsVideo from '@/app/english/phonetics/_components/PhoneticsVideo'
import PhoneticsPdf from '@/app/english/phonetics/_components/PhoneticsPdf'
import PhoneticSymbol from '@/app/english/phonetics/_components/PhoneticSymbol'
import '@/app/english/phonetics/phonetics.css'
interface DragItemType {
    id: number
    component: React.ReactNode
}
interface DragStore {
    list: DragItemType[]
    setList: (list: any[]) => void
}
export const useLeftColumnStore = create<DragStore>((set) => ({
    list: [
        // {
        //     id: 1,
        //     component: <PhoneticSymbol />,
        // },
        { id: 2, component: <QueryWord /> },
        { id: 3, component: <PhoneticsVideo /> },
        { id: 4, component: <PhoneticsPdf /> },
    ],
    setList: (list) => set({ list }),
}))

export const useRightColumnStore = create<DragStore>((set) => ({
    list: [
        { id: 5, component: <h1>5</h1> },
        { id: 6, component: <h1>6</h1> },
        { id: 7, component: <h1>7</h1> },
        { id: 8, component: <h1>8</h1> },
    ],
    setList: (list) => set({ list }),
}))
