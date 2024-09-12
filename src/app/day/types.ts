import { HolidaysTypes } from 'date-holidays'

interface Holiday {
    name: string
    date: string
    start: string
    end: string
    type: string
}

/**
 * {
 *     date: '2024-01-01 00:00:00',
 *     start: 2023-12-31T16:00:00.000Z,
 *     end: 2024-01-01T16:00:00.000Z,
 *     name: '元旦',
 *     type: 'public'
 *   }
 */

export interface DayInfo {
    date: string
    day: string
    dayOfWeek: string
    isToday: boolean
    timePassed: boolean
    lunar: string
    holiday: false | HolidaysTypes.Holiday[]
    remark: string
    isWorkDay: boolean //是否是工作日
}
/**
 *  {
 *     date: '2024-01-31',
 *     day: '31',
 *     dayOfWeek: 'Wed',
 *     isToday: false,
 *     timePassed: true,
 *     holiday: false,
 *     remark: '',
 *     lunar: '廿一'
 *   }
 */
