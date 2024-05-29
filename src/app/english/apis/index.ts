import http from "@/apis/http";
import {BaseResType, ResCode} from "@/apis/type";
import {useQuery} from "@tanstack/react-query";

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
export interface WordInfoType {
    level:string
    soundmark:Record<string, SoundMark>
    meaning:string[]
    meaningTotal:string[]
    examples:string[]

}
export function getWordInfo(word):Promise<WordInfoType|null|string>{
    return http.request<WordInfoType,BaseResType<WordInfoType>>({
        url:'/util/translate',
        params:{
            word
        }
    }).then(res=>{
        if(res.code===ResCode.Success){
            return res.data
        }else{
            return 'word not found '
        }
    }).catch(err=>{
        console.log('🐔🐔🐔getWordInfo error',err)
        return null
    })
}

export const useWord=(word)=>{
    const { isLoading, data } = useQuery({
        queryKey: ["word", word],
        queryFn: async () => {
            const data = await getWordInfo(word);
            return data
        },
        enabled: !!word
    });
    return {isLoading,data}


}
