'use client'
import { useAtom } from 'jotai'
import VideoPlayer from '@/app/english/_components/VideoPlayer'

export default function Test() {
    return (
        <>
            <div
                style={{
                    width: '640px',
                }}
            >
                <VideoPlayer
                    src={'https://leexiao.site/file/1.mp4'}
                ></VideoPlayer>
            </div>
        </>
    )
}
