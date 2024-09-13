import Holidays from 'date-holidays'
import dayjs from 'dayjs'
import Lunar from 'chinese-lunar'
import { DayInfo, MonthInfo } from '@/app/day/types'

const weekMap = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat',
}

export const generateDates = (year: number): MonthInfo[] => {
    const holidays = new Holidays('CN')
    const today = dayjs().format('YYYY-MM-DD')
    const getMonthDays = (month: number): MonthInfo => {
        const firstDay = dayjs(`${year}-${month}-01`)
        const daysInMonth = firstDay.daysInMonth()

        const days = Array.from({ length: daysInMonth }, (_, i) => {
            const d = dayjs(`${year}-${month}-${i + 1}`)
            const date = d.format('YYYY-MM-DD')
            return {
                date,
                day: d.format('DD'),
                dayOfWeek: weekMap[d.day()],
                isToday: date === today,
                timePassed: d.isBefore(today),
                holiday: holidays.isHoliday(d.toDate()),
                remark: '',
                lunar: Lunar.solarToLunar(d.toDate(), 'd'),
                isWorkDay: isWorkDay2024(date),
            }
        })
        return {
            days,
            month,
            totalDays: days.length,
            workDays: days.filter((day) => day.isWorkDay).length,
        }
    }

    return Array.from({ length: 12 }, (_, i) => i + 1).map(getMonthDays)
}

/**
 * 判断是否是周一到周五
 * @param date
 */
export function isWeekday(date: string) {
    const dayOfWeek = dayjs(date).day()
    return dayOfWeek >= 1 && dayOfWeek <= 5
}
const publicHolidays2024 = [
    '2024-01-01', // 元旦
    '2024-02-10', // 春节第一天
    '2024-02-11', // 春节第二天
    '2024-02-12', // 春节第三天
    '2024-02-13', // 春节第四天
    '2024-02-14', // 春节第五天
    '2024-02-15', // 春节第六天
    '2024-02-16', // 春节第七天
    '2024-02-17', // 春节第八天
    '2024-04-04', // 清明节第一天
    '2024-04-05', // 清明节第二天
    '2024-04-06', // 清明节第三天
    '2024-05-01', // 劳动节第一天
    '2024-05-02', // 劳动节第二天
    '2024-05-03', // 劳动节第三天
    '2024-05-04', // 劳动节第四天
    '2024-05-05', // 劳动节第五天
    '2024-06-10', // 端午节
    '2024-09-15', // 中秋节第一天
    '2024-09-16', // 中秋节第二天
    '2024-09-17', // 中秋节第三天
    '2024-10-01', // 国庆节第一天
    '2024-10-02', // 国庆节第二天
    '2024-10-03', // 国庆节第三天
    '2024-10-04', // 国庆节第四天
    '2024-10-05', // 国庆节第五天
    '2024-10-06', // 国庆节第六天
    '2024-10-07', // 国庆节第七天
]

const workdays2024 = [
    '2024-02-04', // 春节调休
    '2024-02-18', // 春节调休
    '2024-04-07', // 清明节调休
    '2024-04-28', // 劳动节调休
    '2024-05-11', // 劳动节调休
    '2024-09-14', // 中秋节调休
    '2024-09-29', // 国庆节调休
    '2024-10-12', // 国庆节调休
]

/**
 * 判断是否是工作日，把调休也计算进去了
 * @param date
 */
export function isWorkDay2024(date: string) {
    if (publicHolidays2024.includes(date)) return false
    if (workdays2024.includes(date)) return true
    return isWeekday(date)
}
