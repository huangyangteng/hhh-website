'use client'

import { useEffect, useRef, useState } from 'react'
import { useAtom, useAtomValue } from 'jotai'
import { globalVolumeAtom, selectedSymbol } from '@/app/english/_state/english'
import { useVideoUrl } from '../../_apis'
import { Spin } from 'antd'

export default function PhoneticsVideo() {
    const { isLoading, data: videoUrl } = useVideoUrl('BV1sp4y1z74P')

    const videoDom = useRef<HTMLVideoElement>(null)
    const globalVolume = useAtomValue(globalVolumeAtom)
    const selectSymbol = useAtomValue(selectedSymbol)

    const [endTime, setEndTime] = useState(0)

    useEffect(() => {
        if (!selectSymbol) return
        videoDom.current.currentTime = selectSymbol.start
        videoDom.current.volume = globalVolume
        videoDom.current.play()
        setEndTime(selectSymbol.end)
    }, [selectSymbol])

    useEffect(() => {
        if (!videoDom.current) return
        videoDom.current.volume = globalVolume
    }, [globalVolume, videoDom])

    const onTimeUpdate = () => {
        if (endTime !== 0 && videoDom.current.currentTime >= endTime) {
            videoDom.current.pause()
            setEndTime(0)
            if (selectSymbol) {
                videoDom.current.currentTime = selectSymbol.start
            }
        }
    }

    return (
        <div className="phonetics-video-wrapper">
            {isLoading ? (
                <Spin></Spin>
            ) : (
                <video
                    className="example-video"
                    ref={videoDom}
                    controls={false}
                    onTimeUpdate={onTimeUpdate}
                    src={videoUrl}
                    playsInline
                ></video>
            )}
        </div>
    )
}
