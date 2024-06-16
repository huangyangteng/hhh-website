import { describe, it, expect } from 'vitest'
import { fetchOpenAi, fetchWordChanges } from '@/app/english/_apis/ai'

describe('Ai API Test', () => {
    describe('fetch openAi api', () => {
        it('should fetch success', async () => {
            const res = await fetchOpenAi('hello')
            expect(res.length > 0).toBe(true)
        })
        it('should fetch word changes', async () => {
            const res = await fetchWordChanges('teach')
            expect(Array.isArray(res) && res.length > 1).toBe(true)
        }, 6000)
    })
})
