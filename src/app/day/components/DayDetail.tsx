import { DayInfo } from '../types'
interface DayDetailProp {
    info: DayInfo
}
import styles from './styles.module.scss'
const getHoliday = (holiday) => {
    if (holiday) {
        const h = holiday[0].name
        return h.replace('清明節', '').replace('六一', '')
    } else {
        return ''
    }
}
export default function DayDetail({ info }: DayDetailProp) {
    const holiday = getHoliday(info.holiday)
    return (
        <div
            className={styles.detail}
            style={{
                opacity: info.timePassed ? 0.4 : 1
            }}>
            <span
                style={{
                    fontSize: '13px',
                    fontWeight: 700
                }}>
                {info.day}
                <span
                    style={{
                        fontSize: '10px',
                        fontWeight: 400
                    }}>
                    {info.dayOfWeek}
                </span>
            </span>
            <span>{info.lunar}</span>
            <span>{holiday}</span>
            {info.isToday && (
                <span
                    style={{
                        fontSize: '20px'
                    }}>
                    🎯
                </span>
            )}
        </div>
    )
}
