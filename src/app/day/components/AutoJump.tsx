'use client'

import { useEffect } from 'react'
import dayjs from 'dayjs'
import { scrollTo } from '@/utils'

export default function AutoJump() {
    // 自动滚动到当前月份
    useEffect(() => {
        const month = dayjs().month() + 1
        scrollTo('#month-' + month)
    }, [])
    return <></>
}
