import http from '@/apis/http'
import { BaseResType, ResCode } from '@/apis/type'

/** play words
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
