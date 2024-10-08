'use client'
import styles from '../styles.module.scss'
import { Card, Input, Skeleton } from 'antd'
import { ReactNode, useState } from 'react'
import { useAiTool } from '@/app/(tool)/ai/api'
import { PromptType } from '@/app/(tool)/ai/prompt'

interface Props<T> {
    title: string
    type: PromptType
    renderResult: (data: T) => ReactNode
}

export default function AiCardItem<T>({ title, type, renderResult }: Props<T>) {
    const [inputValue, setInputValue] = useState('')
    const [submitValue, setSubmitValue] = useState('')
    const fetchWord = (e) => {
        if (e.key === 'Enter') {
            setSubmitValue(inputValue)
        }
    }
    const { isLoading, data } = useAiTool(submitValue, type)
    return (
        <Card title={title} bordered={false}>
            <Input
                value={inputValue}
                placeholder="请输入中文,按下回车"
                onChange={(e) => setInputValue(e.target.value)}
                onKeyUp={fetchWord}
            />

            <div className={styles.outputBox}>
                {isLoading ? (
                    <Skeleton active={true} title={false} />
                ) : (
                    renderResult(data)
                )}
            </div>
        </Card>
    )
}
