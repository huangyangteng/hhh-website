import http from "@/apis/http";
import {BaseResType, ResCode} from "@/apis/type";

interface BBVideoItem{
    title:string
    pic:string
    src:string
}
export  function getVideoUrl(link){
    return http.request<BBVideoItem,BaseResType<BBVideoItem>>({
        url:'/watch/bb',
        method:'POST',
        data:{
            link
        }
    }).then(res=>{
        if(res.code===ResCode.Success){
            return res.data.src
        }else{
            return null
        }
    }).catch(err=>{
        console.log('🐔🐔🐔getVideoUrl error',err)
        return null
    })
}


interface SoundMark{
    text:string
    fsound:string
    sound:string
}
export interface WordInfo{
    level:string
    soundmark:Record<string, SoundMark>
    meaning:string[]
    meaningTotal:string[]
    examples:string[]

}
export function getWordInfo(word){
    return http.request<WordInfo,BaseResType<WordInfo>>({
        url:'/util/translate',
        params:{
            word
        }
    }).then(res=>{
        if(res.code===ResCode.Success){
            return res.data
        }else{
            return null
        }
    }).catch(err=>{
        console.log('🐔🐔🐔getWordInfo error',err)
        return null
    })
}
