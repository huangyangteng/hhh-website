import { expect, it, describe } from 'vitest'

import { generateDates, isWeekday, isWorkDay2024 } from './utils'
import Holidays from 'date-holidays'
import dayjs from 'dayjs'

describe('generateDates', () => {
    it('should return an array of dates for the given year', () => {
        const result = generateDates(2024)
        expect(Array.isArray(result)).toBeTruthy()
    })
    it('should return 12 months', () => {
        const result = generateDates(2024)
        console.log(result[0])
        expect(result.length).toBe(12)
    })
})

describe('holidays.isHoliday', () => {
    it('should return info for holidays', () => {
        const holidays = new Holidays('CN')
        const result = holidays.isHoliday('2024-01-01')
        const expectResult = {
            date: '2024-01-01 00:00:00',
            start: '2023-12-31T16:00:00.000Z',
            end: '2024-01-01T16:00:00.000Z',
            name: '元旦',
            type: 'public',
        }
        expect(result[0].name).toBe(expectResult.name)
    })
})

describe('dayjs', () => {
    it('should return 2024-01-01', () => {
        expect(dayjs('2024-01-01').format('YYYY-MM-DD')).toBe('2024-01-01')
    })
    describe('dayjs isWeekday', () => {
        it('should return true for weekday', () => {
            expect(isWeekday('2024-09-12')).toBeTruthy()
        })
        it('should return false for weekend', () => {
            expect(isWeekday('2024-09-14')).toBeFalsy()
        })
    })
})

describe('isWorkDay2024', () => {
    it('should return true for workday', () => {
        //9.14周六调休
        expect(isWorkDay2024('2024-09-14')).toBeTruthy()
    })
    it('should return false for holiday', () => {
        //假期 9.16放中秋
        expect(isWorkDay2024('2024-09-16')).toBeFalsy()
    })
    it('should return false for weekend', () => {
        //周末
        expect(isWorkDay2024('2024-09-22')).toBeFalsy()
    })
})
