import { describe, it, expect } from 'vitest'
import {
    fetchKimiAi,
    fetchOpenAi,
    fetchWordChanges,
} from '@/app/english/_apis/ai'

describe('Ai API Test', () => {
    // describe('fetch openAi api', () => {
    //     it('should fetch success', async () => {
    //         const res = await fetchOpenAi('hello')
    //         expect(res.length > 0).toBe(true)
    //     }, 10000)
    //
    //     it('should fetch word changes', async () => {
    //         const res = await fetchWordChanges('teach')
    //         expect(Array.isArray(res) && res.length > 1).toBe(true)
    //     }, 10000)
    // })

    describe('Kimi Ai Api', () => {
        it('should fetch success', async () => {
            const res = await fetchKimiAi('hello')
            expect(res.length > 0).toBe(true)
        }, 10000)

        // it('should fetch word changes', async () => {
        //     const res = await fetchWordChanges('teach')
        //     expect(Array.isArray(res) && res.length > 1).toBe(true)
        // }, 10000)
    })
})
