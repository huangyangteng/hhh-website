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
            console.log('🐔🐔🐔getVideoUrl error', err)
            return null
        })
}

interface SoundMark {
    text: string
    fsound: string
    sound: string
}

export interface WordInfoType {
    level: string
    soundmark: Record<string, SoundMark>
    meaning: string[]
    meaningTotal: string[]
    examples: string[]
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
                return 'word not found '
            }
        })
        .catch((err) => {
            console.log('🐔🐔🐔getWordInfo error', err)
            return null
        })
}

export const useWord = (word) => {
    const { isLoading, data } = useQuery({
        queryKey: ['word', word],
        queryFn: async () => {
            const data = await getWordInfo(word)
            return data
        },
        enabled: !!word,
    })
    return { isLoading, data }
}

export function getWordEnEn(word: string) {
    return http.request({
        url: 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word,
    })
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
            console.log('fetchPeppaVideos error', err)
            return { title: 'error', pages: [] } as PeppaVideosRes
        })
}

//usages  const {isLoading,data:list}=usePeppaVideos()
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
                console.log(res.data)
                return res.data.src
            } else {
                return null
            }
        })
        .catch((err) => {
            console.log('parseBVideo error', err)
            return null
        })
}

//usages  const {isLoading,data:src}=useBVideoLink
export function useBVideoInfo(videoId: string) {
    return useQuery({
        queryKey: ['peppa', videoId],
        queryFn: () => fetchBVideo(videoId),
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
            console.log('fetchBVideoLines Error:', err)
            return null
        })
}

export const useBVideoLines = (videoId) => {
    return useQuery({
        queryKey: ['peppa', 'lines', videoId],
        queryFn: () => fetchBVideoLines(videoId),
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
