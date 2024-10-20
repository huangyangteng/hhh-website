'use client'
import { Button, Card, Flex, InputNumber } from 'antd'
import { useMemo, useState } from 'react'
import { SwapOutlined } from '@ant-design/icons'
function calculatePriceChangePercentage(num1: number, num2: number) {
    if (num1 === 0) {
        if (num2 === 0) {
            return '0%' // 如果两个价格都是0，涨跌幅为0%
        }
        return 0 // 如果前一价格为0，表示无穷大涨幅
    }

    const change = ((num2 - num1) / num1) * 100
    return Number(change.toFixed(2)) // 返回带有两位小数的百分比字符串
}
export default function NumberDistance() {
    const [num1, setNum1] = useState(1)
    const [num2, setNum2] = useState(1)
    const result = useMemo(() => {
        return calculatePriceChangePercentage(num1, num2)
    }, [num1, num2])
    const handleSwap = () => {
        setNum1(num2)
        setNum2(num1)
    }
    const earned = useMemo(() => {
        return typeof result === 'number' ? (10000 / 100) * result : result
    }, [result])
    return (
        <Card title={'跌涨幅'} bordered={false}>
            <Flex gap={'middle'} align={'center'}>
                <InputNumber
                    step={0.1}
                    value={num1}
                    onChange={(value) => setNum1(value)}
                ></InputNumber>
                <Button onClick={handleSwap} icon={<SwapOutlined />}></Button>
                <InputNumber
                    step={0.1}
                    value={num2}
                    onChange={(value) => setNum2(value)}
                ></InputNumber>
                <b>{result}%</b>
                <span>$10000 Earned: ${earned}</span>
            </Flex>
        </Card>
    )
}
