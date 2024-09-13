import http from '@/apis/http'
import { BaseResType, ResCode } from '@/apis/type'
import { useQuery } from '@tanstack/react-query'

interface BBVideoItem {
    title: string
    pic: string
    src: string
}

export function getVideoUrl(link) {
    return http
        .request<BBVideoItem, BaseResType<BBVideoItem>>({
            url: '/watch/bb',
            method: 'POST',
            data: {
                link,
            },
        })
        .then((res) => {
            if (res.code === ResCode.Success) {
                return res.data.src
            } else {
                return null
            }
        })
        .catch((err) => {
            return null
        })
}

export const useVideoUrl = (videoId) => {
    const url = 'https://www.bilibili.com/video/' + videoId
    const { isLoading, data } = useQuery({
        queryKey: ['bVideo', videoId],
        queryFn: () => getVideoUrl(url),
        enabled: !!videoId,
        refetchOnWindowFocus: true,
    })
    return { isLoading, data }
}
interface SoundMark {
    text: string
    fsound?: string //女性发音
    sound: string //男性发音
}

export interface WordInfoType {
    level?: string
    soundmark: Record<'uk' | 'us', SoundMark> //音标
    meaning: string[] | any[]
    meaningTotal?: string[]
    examples?: string[]
}

export function getWordInfo(word): Promise<WordInfoType | null | string> {
    return http
        .request<WordInfoType, BaseResType<WordInfoType>>({
            url: '/util/translate',
            params: {
                word,
            },
        })
        .then((res) => {
            if (res.code === ResCode.Success) {
                return res.data
            } else {
                return 'haici:word not found '
            }
        })
        .catch((err) => {
            return null
        })
}

export const useHaiCiWord = (word) => {
    const { isLoading, data } = useQuery({
        queryKey: ['word', word],
        queryFn: async () => {
            return await getWordInfo(word)
        },
        enabled: !!word,
    })
    return { isLoading, data }
}

export function getWordEnEn(word: string): Promise<EnWordType> {
    return http
        .request<EnWordType[], EnWordType[]>({
            url: 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word,
        })
        .then((res) => {
            return res[0]
        })
        .catch((err) => {
            return null
        })
}
export interface EnWordType {
    word: string
    phonetics: EnPhonetic[]
    meanings: EnWordMeaning[]
}
interface EnPhonetic {
    text: string
    audio: string
    sourceUrl: string
}
interface EnWordMeaning {
    partOfSpeech: string
    definitions: EnDefinition[]
    synonyms: string[]
    antonyms: string[]
}
interface EnDefinition {
    definition: string
    example?: string
}
export const useWordEn = (word) => {
    const { isLoading, data } = useQuery({
        queryKey: ['word-en', word],
        queryFn: async () => {
            return await getWordEnEn(word)
        },
        enabled: !!word,
    })
    return { isLoading, data }
}

interface PeppaItemType {
    aid: string
    bvid: string
    pic: string
    title: string
}

interface PeppaVideosRes {
    title: string
    pages: PeppaItemType[]
}

export function fetchPeppaVideos() {
    return http
        .request<PeppaVideosRes, BaseResType<PeppaVideosRes>>({
            url: '/watch/bb',
            method: 'POST',
            data: {
                link: 'https://space.bilibili.com/33291981/channel/collectiondetail?sid=525129',
            },
        })
        .then((res) => {
            if (res.code === 2000) {
                return {
                    title: res.data.title,
                    pages: res.data.pages.slice(1),
                }
            } else {
                return {
                    title: 'error:' + res.code,
                    pages: [],
                } as PeppaVideosRes
            }
        })
        .catch((err) => {
            return { title: 'error', pages: [] } as PeppaVideosRes
        })
}

//usages  const {isLoading,_data:list}=usePeppaVideos()
export function usePeppaVideos() {
    return useQuery({
        queryKey: ['peppa'],
        queryFn: fetchPeppaVideos,
    })
}

export function fetchBVideo(
    cid,
    bid = '525129',
    collection = 1,
): Promise<string | null> {
    return http
        .request<{ src: string }, BaseResType<{ src: string }>>({
            url: '/watch/bb-parse',
            method: 'POST',
            data: {
                bid,
                cid,
                collection,
            },
        })
        .then((res) => {
            if (res.code === 2000) {
                return res.data.src
            } else {
                return null
            }
        })
        .catch((err) => {
            return null
        })
}

//usages  const {isLoading,_data:src}=useBVideoLink
export function useBVideoInfo(videoId: string) {
    return useQuery({
        queryKey: ['peppa', videoId],
        queryFn: () => fetchBVideo(videoId),
        enabled: !!videoId,
    })
}

export interface VideoLineType {
    id?: number
    en: string
    ch: string
    time: number
    refer: string
}

export function fetchBVideoLines(videoId: string): Promise<VideoLineType[]> {
    return http
        .request<VideoLineType[], BaseResType<VideoLineType[]>>({
            url: '/lines',
            params: {
                refer: videoId,
            },
        })
        .then((res) => {
            if (res.code == ResCode.Success) {
                return res.data
            } else {
                return null
            }
        })
        .catch((err) => {
            return null
        })
}

export const useBVideoLines = (videoId) => {
    return useQuery({
        queryKey: ['peppa', 'lines', videoId],
        queryFn: () => fetchBVideoLines(videoId),
        enabled: !!videoId,
    })
}

export function fetchEditTime({ id, time }) {
    return http.request<any, BaseResType<any>>({
        url: '/lines',
        method: 'PUT',
        data: {
            id,
            time,
        },
    })
}
