'use client'
import { ReactSortable } from 'react-sortablejs'
import { useColumnStore } from '@/app/english/test/_components/drag-state'
import React from 'react'
import DragBox from '@/app/english/test/_components/DragBox'

export default function DragList() {
    const { list, setList } = useColumnStore()
    return (
        <ReactSortable
            group={'en'}
            list={list}
            setList={setList}
            handle={'.handle'}
        >
            {list.map((item) => (
                <DragBox key={item.id}>{item.component}</DragBox>
            ))}
        </ReactSortable>
    )
}
