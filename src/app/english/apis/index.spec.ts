import {describe} from "vitest";
import {getVideoUrl, getWordInfo, WordInfo} from "@/app/english/apis/index";

describe('English API Test',()=>{
    describe('getVideoURL',()=>{
        it('should return videoUrl', async ()=> {
            const videoUrl=await getVideoUrl("https://www.bilibili.com/video/BV1sp4y1z74P/")

            expect(videoUrl).toContain('https')
        });

    })

    describe('getWordInfo',()=>{
        it('should fetch word info successfully',async ()=>{
            const wordInfo=await getWordInfo('success')
            expect(wordInfo !==null && typeof wordInfo==='object').toBe(true)
            expect(Object.keys(wordInfo).join('').includes('soundmark')).toBe(true)
        })
    })



})
