import { generateDates } from './utils'
import DayDetail from './components/DayDetail'
import styles from './styles.module.scss'
import { DayInfo } from './types'
const EmptyDays = ({ len }) => {
    console.log(len)
    return Array.from({ length: len }).map((_, i) => (
        <div className={styles.emptyDay} key={i}></div>
    ))
}
export default function Day() {
    const months = generateDates(2024)
    return (
        <section className={styles.page}>
            <header className={styles.header}>
                <h1>2024年 🐲</h1>
                <aside>逝者如斯夫，不舍昼夜。</aside>
            </header>
            <div className={styles.calender}>
                {months.map((days, index) => {
                    return (
                        <div className={styles.month} key={index}>
                            <div className={styles.title}>{index + 1}月</div>
                            {days.map((day, i) => (
                                <div className={styles.day} key={day.date}>
                                    <DayDetail
                                        info={day as DayInfo}></DayDetail>
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