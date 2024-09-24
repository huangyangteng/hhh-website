import { generateDates } from './utils'
import DayDetail from './components/DayDetail'
import styles from './styles.module.scss'
import { DayInfo } from './types'
import dayjs from 'dayjs'
import YearProgress from '@/app/day/components/YearProgress'
import MonthDetail from '@/app/day/components/MonthDetail'
import Link from 'next/link'
import { Divider } from 'antd'
//退出  完整路由缓存（Full Route Cache）
export const revalidate = 0
const EmptyDays = ({ len }) => {
    return Array.from({ length: len }).map((_, i) => (
        <div className={styles.emptyDay} key={i}></div>
    ))
}
export default function Day() {
    const year = dayjs().year()
    const months = generateDates(year)
    const allDay = months.map((item) => item.days).flat()
    console.log(JSON.stringify(months[8]))
    return (
        <section className={styles.page}>
            <header className={styles.header}>
                <h1 className={styles.headLine}>
                    <Link href={'/'}>
                        <span>⬅️ ️️</span>
                    </Link>
                    <span>|</span>
                    <b>{year}年 🐲</b>
                </h1>
                <YearProgress allDay={allDay} />
                <aside>逝者如斯夫，不舍昼夜。</aside>
            </header>
            <div className={styles.calender}>
                {months.map((month, index) => {
                    return (
                        <div className={styles.month} key={index}>
                            <MonthDetail month={month} />
                            {month.days.map((day, i) => (
                                <div
                                    className={`${styles.day} ${!day.isWorkDay && !day.timePassed ? styles.holiday : ''}`}
                                    key={day.date}
                                >
                                    <DayDetail
                                        info={day as DayInfo}
                                    ></DayDetail>
                                </div>
                            ))}
                            <EmptyDays len={31 - month.days.length}></EmptyDays>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
