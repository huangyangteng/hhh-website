interface Holiday {
    name: string
}
export interface DayInfo {
    date: string
    day: string
    dayOfWeek: string
    isToday: boolean
    timePassed: boolean
    lunar: string
    holiday: Holiday[]
    remark: string
}
