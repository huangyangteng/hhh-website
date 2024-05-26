import {describe} from "vitest";
import {getVideoUrl} from "@/app/english/apis/index";

describe('English API Test',()=>{
    it('should return VideoUrl', async ()=> {
        const videoUrl=await getVideoUrl("https://www.bilibili.com/video/BV1sp4y1z74P/")

        expect(videoUrl).toContain('https')
    });
})
