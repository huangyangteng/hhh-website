'use client'
import styles from './styles.module.scss'
import { Card, Input, Skeleton } from 'antd'
import { useState } from 'react'
import { useVariable } from '@/app/(tool)/ai/api'
import { copyToBoard } from '@/utils'

function CopyText({ text }) {
    const [isCopy, setIsCopy] = useState(false)
    const copyText = () => {
        copyToBoard(text)
        setIsCopy(true)
        setTimeout(() => {
            setIsCopy(false)
        }, 1000)
    }
    return <span onClick={copyText}>{isCopy ? text + ' ✅' : text}</span>
}

export default function AiPage() {
    const [inputValue, setInputValue] = useState('')
    const [submitValue, setSubmitValue] = useState('')
    const fetchWord = (e) => {
        if (e.key === 'Enter') {
            setSubmitValue(inputValue)
        }
    }
    const { isLoading, data } = useVariable(submitValue)
    return (
        <div className={styles.wrapper}>
            <Card title="变量命名" bordered={false}>
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
                        data.map((item) => (
                            <div className={styles.outputItem} key={item}>
                                <CopyText text={item} />
                            </div>
                        ))
                    )}
                </div>
            </Card>
        </div>
    )
}
