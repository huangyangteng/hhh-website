'use client'
import { useMemo, useState } from 'react'
import { Space, Input, Card } from 'antd'
const { TextArea } = Input

import { decodeStr } from '../base62'
import CopyBtn from '@/app/(tool)/projects/_components/CopyBtn'
function getStartAppValue(url: string) {
    // 使用正则表达式提取 startapp 参数的值
    const match = url.match(/startapp=([^&\s]+)/)
    return match && match[1] ? match[1] : null
}
export default function DecodeStartapp() {
    const [value, setValue] = useState(
        'gjpqGOLURTn2oLCSzHYBzyqrw04yiwEKOhTwrejZliOAQD2nw5E3cJZ',
    )
    const output = useMemo(() => {
        if (value.includes('https')) {
            const startapp = getStartAppValue(value)
            return decodeStr(startapp || '')
        } else {
            return decodeStr(value)
        }
    }, [value])
    return (
        <Card title={'base62解码'}>
            <Space
                direction="vertical"
                size="middle"
                style={{ display: 'flex' }}
            >
                <TextArea
                    value={value}
                    placeholder="输入link或者startapp参数"
                    onChange={(e) => setValue(e.target.value)}
                />

                <TextArea
                    value={output}
                    placeholder="output"
                    onChange={(e) => setValue(e.target.value)}
                />
                <CopyBtn text={output} />
            </Space>
        </Card>
    )
}
