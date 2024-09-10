'use client'
import { ReactSortable } from 'react-sortablejs'
import { useRightColumnStore } from '@/app/english/test/_components/drag-state'
import React from 'react'
import DragBox from './DragBox'

export default function ColumnRight() {
    const { list, setList } = useRightColumnStore()
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
