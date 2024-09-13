'use client'
import styles from '@/app/day/styles.module.scss'
import { Tooltip } from 'antd'
import { MonthInfo } from '@/app/day/types'

export default function MonthDetail({ month }: { month: MonthInfo }) {
    const tip = `
        工作日:${month.workDays}天
    `
    return (
        <Tooltip title={tip} placement="right">
            <div className={styles.title}>{month.month}月</div>
        </Tooltip>
    )
}
