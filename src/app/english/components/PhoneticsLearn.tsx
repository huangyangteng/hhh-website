'use client'
import VideoPlayer from '@/app/english/components/VideoPlayer'
import { Radio, RadioChangeEvent, Skeleton } from 'antd'
import { useState } from 'react'
import { useVideoUrl } from '@/app/english/apis'
import HSkeleton from '@/app/_components/HSkeleton'
export default function PhoneticsLearn() {
    const options = [
        { label: '英式音标', value: 'BV1pJ411t7uC' },
        { label: '自然拼读', value: 'BV17J411j7p2' },
        { label: '连读略读', value: 'BV1LJ411q76M' },
    ]
    const onChange = ({ target: { value } }: RadioChangeEvent) => {
        setSelect(value)
    }
    const [select, setSelect] = useState(options[0].value)
    const { isLoading, data } = useVideoUrl(select)
    console.log(isLoading, data)
    return (
        <div>
            <HSkeleton loading={isLoading} height={320}>
                {!!data && <VideoPlayer src={data}></VideoPlayer>}
            </HSkeleton>
            <Radio.Group
                options={options}
                onChange={onChange}
                value={select}
                optionType="button"
            />
        </div>
    )
}
