import { describe, it, expect } from 'vitest'
import {
    fetchBVideo,
    fetchBVideoLines,
    fetchPeppaVideos,
    getVideoUrl,
    getWordInfo,
    WordInfoType,
} from '@/app/english/_apis/index'

describe('English API Test', () => {
    describe('getVideoURL', () => {
        it('should return videoUrl', async () => {
            const videoUrl = await getVideoUrl(
                'https://www.bilibili.com/video/BV1sp4y1z74P/',
            )

            expect(videoUrl).toContain('https')
        })
    })

    describe('getWordInfo', () => {
        it('should fetch word info successfully', async () => {
            const wordInfo = await getWordInfo('success')
            expect(wordInfo !== null && typeof wordInfo === 'object').toBe(true)
            expect(Object.keys(wordInfo).join('').includes('soundmark')).toBe(
                true,
            )
        })
    })

    describe('fetch pepper video list', () => {
        it('should fetch  successfully', async () => {
            const res = await fetchPeppaVideos()
            expect(res.title).toBe(
                '挑战52天背完小猪佩奇，合集已完结！共52个视频',
            )
            expect(res.pages.length).toBe(54)
        })
    })

    describe('parseBVideo', () => {
        it('should fetch  successfully', async () => {
            const src = await fetchBVideo('BV1gB4y1B7CC')
            expect(src).includes('.mp4')
        })
        it('show fetch error', async () => {
            const src = await fetchBVideo('xxx')
            expect(src).toBe(null)
        })
    })

    describe('fetchBVideoLines', () => {
        it('should fetch  successfully', async () => {
            const res = await fetchBVideoLines('BV113411F7ME')
            expect(Array.isArray(res)).toBe(true)
            expect(res.length > 0).toBe(true)
        })
        it('show fetch error', async () => {
            const res = await fetchBVideoLines('xxx')
            expect(Array.isArray(res)).toBe(true)
            expect(res.length == 0).toBe(true)
        })
    })
})
