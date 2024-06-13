'use client'
import { useAtom } from 'jotai'
import VideoPlayer from '@/app/english/_components/VideoPlayer'
import { useEffect } from 'react'
import { fetchOpenAi, fetchWordChanges } from '@/app/english/_apis/ai'

export default function Test() {
    useEffect(() => {
        fetchWordChanges('teach').then((res) => {
            console.log(res)
        })
    }, [])
    return (
        <>
            <div
                style={{
                    width: '640px',
                }}
            ></div>
        </>
    )
}
