'use client'

import { Divider, Progress } from 'antd'
import { DayInfo } from '@/app/day/types'
import styles from './styles.module.scss'

export default function YearProgress({ allDay }: { allDay: DayInfo[] }) {
    const passedDays = allDay.filter((item) => item.timePassed)
    const workDays = allDay.filter((item) => item.isWorkDay)
    const passedWorkDays = workDays.filter((item) => item.timePassed)
    const progress = Math.round((passedDays.length / allDay.length) * 100)
    const workDayRemain = workDays.length - passedWorkDays.length
    const holidayRemain =
        allDay.length -
        workDays.length -
        (passedDays.length - passedWorkDays.length)
    return (
        <div className={styles.progressWrapper}>
            <div>
                <span>今年进度</span>
                <Progress steps={4} percent={progress} size={16} />
            </div>
            <Divider type="vertical" />
            <div>
                <span>工作日</span>
                <Progress
                    steps={4}
                    percent={progress}
                    size={16}
                    format={() => `余${workDayRemain}天`}
                />
            </div>
            <Divider type="vertical" />
            <div>
                <span>假期:</span>
                <Progress
                    steps={4}
                    percent={progress}
                    size={16}
                    format={() => `余${holidayRemain}天`}
                />
            </div>
        </div>
    )
}
