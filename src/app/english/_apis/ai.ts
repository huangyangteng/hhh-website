import http from '@/apis/http'
import { BaseResType, ResCode } from '@/apis/type'
import { useQuery } from '@tanstack/react-query'
import { getWordEnEn } from '@/app/english/_apis/index'

/** play words
 * todo:
 * 1.单词变形  输入单词，输出单词的各种变形
 * 2.同义词推荐 输入单词，输出单词的同义词
 * 2.中英互译  如果输入中文，就调用该接口，翻译成英文
 *  {"model": "gpt-3.5-turbo", "messages": [{"role": "user", "content": "What is Cloudflare?"}]}
 */

interface OpenAiRes {
    id: string
    object: string
    created: number
    model: string
    choices: Choices[]
    usage: Usage
}

interface OpenAiMessage {
    role: string
    content: string
    finish_reason: string
}

interface Choices {
    index: number
    message: OpenAiMessage
}

interface Usage {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
}

export function fetchOpenAi(content: string) {
    return http
        .request<OpenAiRes, BaseResType<OpenAiRes>>({
            url: '/ai/openai',
            method: 'post',
            data: {
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'assistant',
                        content,
                    },
                ],
            },
        })
        .then((res) => {
            return res.data.choices[0].message.content
        })
        .catch((error) => {
            return null
        })
}

export function fetchKimiAi(content: string) {
    return http
        .request<OpenAiRes, BaseResType<OpenAiRes>>({
            url: '/ai/kimi',
            method: 'post',
            data: {
                model: 'moonshot-v1-8k',
                temperature: 0.3,
                messages: [{ role: 'user', content: content }],
            },
        })
        .then((res) => {
            return res.data.choices[0].message.content
        })
        .catch((error) => {
            return null
        })
}

const wordChangesPrompt = (input: string) => {
    return `
Output the various variations of a word.
Input:optimize
Output: 
[{"label":"optimize","symbol":{"American":"/ˈɑːptɪmaɪz/","British":"/ˈɒptɪmaɪz/"},"meaning":['V',"使...达到最佳状态或效率","优化"],"examples":["We need to optimize the software for better performance."]},{"label":"optimized","symbol":{"American":"/ˈɑːptɪmaɪzd/","British":"/ˈɒptɪmaɪzd/"},"meaning":['V-ed',"已经被优化的"],"examples":["The system has been optimized to run faster."]},{"label":"optimizing","symbol":{"American":"/ˈɑːptɪmaɪzɪŋ/","British":"/ˈɒptɪmaɪzɪŋ/"},"meaning":['V-ing',"正在进行优化"],"examples":["The team is currently optimizing the database structure."]},{"label":"optimization","symbol":{"American":"/ˌɑːptɪmaɪˈzeɪʃn/","British":"/ˌɒptɪmaɪˈzeɪʃn/"},"meaning":['N',"优化过程或结果","最佳化"],"examples":["Optimization of the production process led to significant cost savings."]},{"label":"optimal","symbol":{"American":"/ˈɑːptɪməl/","British":"/ˈɒptɪməl/"},"meaning":['Adj',"最佳的","最理想的"],"examples":["The optimal solution was chosen for its efficiency and effectiveness."]},{"label":"optimally","symbol":{"American":"/ˈɑːptɪməli/","British":"/ˈɒptɪməli/"},"meaning":['Adv',"以最佳方式","最理想地"],"examples":["The algorithm should be used optimally to achieve the desired results."]}]
Input:${input}
Output:
`
}

const phoneticsPrompt = (input: string) => {
    return `
Output the meaning and phonetic symbols of a word.
Input:quote
Output: 
{
    meaning:['v.引述;报价','n.引用'],
    phonetic:'/kwəʊt/'
}
Input:${input}
Output:
`
}

export function fetchWordChanges(word) {
    return fetchKimiAi(wordChangesPrompt(word))
        .then((res) => {
            return eval('(' + res + ')')
        })
        .catch((error) => {
            return []
        })
}

export async function fetchWordPhonetics(word) {
    try {
        const res = await fetchKimiAi(phoneticsPrompt(word))
        return eval('(' + res + ')')
    } catch (e) {
        return null
    }
}
export const useAiWord = (word) => {
    const { isLoading, data } = useQuery({
        queryKey: ['ai-word-en', word],
        queryFn: async () => {
            return await fetchWordPhonetics(word)
        },
        enabled: !!word,
    })
    return { isLoading, data }
}
