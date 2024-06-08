'use client'
import { useBVideoInfo } from '@/app/english/apis'
import { useSearchParams } from 'next/navigation'
import VideoPlayer from '@/app/english/components/VideoPlayer'
import { Spin } from 'antd'

export default function PeppaVideo() {
    const searchParams = useSearchParams()

    const { isLoading, data } = useBVideoInfo(searchParams.get('vid'))
    return (
        <div className="peppa-video">
            {(!data || isLoading) && <Spin size="large" />}
            <VideoPlayer id={'peppa-video'} src={data}></VideoPlayer>
        </div>
    )
}
