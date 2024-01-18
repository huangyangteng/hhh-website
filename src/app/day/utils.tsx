import Holidays from 'date-holidays'
import dayjs from 'dayjs'
import Lunar from 'chinese-lunar'
const weekMap = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat'
}
export const generateDates = (year) => {
    const holidays = new Holidays('CN')
    const today = dayjs().format('YYYY-MM-DD')
    const getMonthDays = (month) => {
        const firstDay = dayjs(`${year}-${month}-01`)
        const daysInMonth = firstDay.daysInMonth()

        return Array.from({ length: daysInMonth }, (_, i) => {
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
                lunar: Lunar.solarToLunar(d.toDate(), 'd')
            }
        })
    }

    const monthDays = Array.from({ length: 12 }, (_, i) => i + 1).map(
        getMonthDays
    )

    return monthDays
}
