'use client'
import {
    Button,
    Collapse,
    Input,
    message,
    Skeleton,
    Switch,
    Tooltip,
} from 'antd'
import {
    fetchEditTime,
    useBVideoLines,
    VideoLineType,
} from '@/app/english/apis'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { ResCode } from '@/apis/type'
import { PlayCircleOutlined } from '@ant-design/icons'
import { useQuery, useQueryClient } from '@tanstack/react-query'

// Get QueryClient from the context

export default function PeppaLines() {
    const search = useSearchParams()
    const { data, isLoading } = useBVideoLines(search.get('vid'))
    const showEdit = search.get('edit')
    const items = (data || []).map((item) => {
        return {
            key: item.en,
            label: item.ch,
            children: (
                <>
                    <DisplayView info={item} />
                    {showEdit && <EditLine info={item} />}
                </>
            ),
        }
    })
    const activeKey = (data || []).map((item) => item.en)

    return (
        <div className="peppa-lines">
            <Skeleton active loading={isLoading}>
                <Collapse items={items}></Collapse>
            </Skeleton>
        </div>
    )
}

function DisplayView({ info }: { info: VideoLineType }) {
    const videoSeek = () => {
        let dom = document.getElementById('peppa-video') as HTMLVideoElement
        dom.currentTime = info.time
        dom.play()
    }
    return (
        <div className={'line-display'}>
            <p>{info.en}</p>
            <Tooltip title={info.time}>
                <Button
                    type={'text'}
                    icon={<PlayCircleOutlined />}
                    size={'small'}
                    onClick={videoSeek}
                ></Button>
            </Tooltip>
        </div>
    )
}

function EditLine({ info }: { info: VideoLineType }) {
    const search = useSearchParams()
    const [time, setTime] = useState(info.time)
    const [step, setStep] = useState(1)
    const queryClient = useQueryClient()
    const submitTime = () => {
        const curTime = changeTime()
        fetchEditTime({ id: info.id, time: curTime }).then((res) => {
            if (res.code === ResCode.Success) {
                message.success('update success')
                queryClient.invalidateQueries({
                    queryKey: ['peppa', 'lines', search.get('vid')],
                })
            }
        })
    }
    const changeTime = () => {
        let dom = document.getElementById('peppa-video') as HTMLVideoElement
        dom.pause()
        setTime(Math.max(0, dom.currentTime - step))
        return Math.max(0, dom.currentTime - step)
    }
    const goBack = () => {
        let dom = document.getElementById('peppa-video') as HTMLVideoElement
        dom.currentTime = Math.max(0, dom.currentTime - step)
    }
    const goForward = () => {
        let dom = document.getElementById('peppa-video') as HTMLVideoElement
        dom.currentTime = Math.min(dom.duration, dom.currentTime + step)
    }
    const play = () => {
        let dom = document.getElementById('peppa-video') as HTMLVideoElement
        if (dom.paused) {
            dom.play()
        } else {
            dom.pause()
        }
    }
    return (
        <div className="line-edit">
            <Input placeholder="time" value={time} />
            <Button onClick={() => goBack()}>快退</Button>
            <Input
                placeholder="step"
                style={{
                    width: '120px',
                }}
                value={step}
                onChange={(e) => setStep(Number(e.target.value))}
            />

            <Button onClick={() => goForward()}>快进</Button>
            <Button onClick={() => play()}>播放</Button>

            <Button onClick={() => submitTime()}>提交</Button>
        </div>
    )
}
