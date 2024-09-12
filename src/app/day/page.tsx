import { generateDates } from './utils'
import DayDetail from './components/DayDetail'
import styles from './styles.module.scss'
import { DayInfo } from './types'
import dayjs from 'dayjs'
import YearProgress from '@/app/day/components/YearProgress'
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
    const allDay = months.flat(2)
    return (
        <section className={styles.page}>
            <header className={styles.header}>
                <h1>{year}年 🐲</h1>
                <YearProgress allDay={allDay} />
                <aside>逝者如斯夫，不舍昼夜。</aside>
            </header>
            <div className={styles.calender}>
                {months.map((days, index) => {
                    return (
                        <div className={styles.month} key={index}>
                            <div className={styles.title}>{index + 1}月</div>
                            {days.map((day, i) => (
                                <div
                                    className={`${styles.day} ${!day.isWorkDay ? styles.holiday : ''}`}
                                    key={day.date}
                                >
                                    <DayDetail
                                        info={day as DayInfo}
                                    ></DayDetail>
                                </div>
                            ))}
                            <EmptyDays len={31 - days.length}></EmptyDays>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
