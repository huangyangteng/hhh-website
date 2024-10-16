'use client'
import { useSearchParams } from 'next/navigation'

import { useEffect, useRef, useState, memo } from 'react'
import { Input, InputRef, Divider } from 'antd'
import { EnWordType, useHaiCiWord, useWordEn, WordInfoType } from '../../_apis'

import WordItemInfo from '@/app/english/phonetics/_components/WordItemInfo'
import { splitSymbolAtom } from '@/app/english/_state/english'
import { useSetAtom } from 'jotai'
import { isWord, splitPhoneticsSymbol } from '@/app/english/_utils/english'
import { readClipboard } from '@/utils'
import { useAiWord } from '@/app/english/_apis/ai'

function HaiCiWord({ word }) {
    const { isLoading, data } = useHaiCiWord(word)
    useActiveSymbols(data)
    return <WordItemInfo info={data} isLoading={isLoading} />
}
const HaiciMemo = memo(HaiCiWord)
const formatEn = (data: EnWordType): WordInfoType | string => {
    if (!data) return 'en-en:word not found'
    const [uk, us] = data.phonetics
    return {
        meaning: data.meanings.map((item) => {
            return {
                type: item.partOfSpeech,
                list: item.definitions
                    .map((item) => item.definition)
                    .slice(0, 1),
            }
        }),
        soundmark: {
            uk: uk
                ? {
                      text: uk.text ? 'uk' + uk.text : 'uk:empty😭',
                      sound: uk.audio,
                      fsound: uk.audio,
                  }
                : null,
            us: us
                ? {
                      text: us.text ? 'us' + us.text : 'us:empty😭',
                      sound: us.audio,
                      fsound: us.audio,
                  }
                : null,
        },
    }
}
function EnWord({ word }) {
    const { isLoading, data } = useWordEn(word)
    const info = formatEn(data)
    if (!word) return null
    return <WordItemInfo info={info} isLoading={isLoading} />
}
const EnWordMemo = memo(EnWord)

function formatAiWord(data) {
    if (!data) return 'ai-word:word not found'
    return {
        meaning: data.meaning,
        soundmark: {
            uk: {
                text: String(data.phonetic),
            },
        },
    } as WordInfoType
}

function AiWord({ word }) {
    const { isLoading, data } = useAiWord(word)
    const info = formatAiWord(data)
    console.log(info)
    if (!word) return null
    return <WordItemInfo info={info} isLoading={isLoading} />
}
const AiWordMemo = memo(AiWord)
// 高亮音标
function useActiveSymbols(data) {
    const setSplitSymbol = useSetAtom(splitSymbolAtom)
    useEffect(() => {
        if (data && typeof data !== 'string') {
            const text = data.soundmark.us.text.replace(/[英美\[\]]/g, '')
            setSplitSymbol(splitPhoneticsSymbol(text))
        }
    }, [data])
}

export default function QueryWord() {
    const searchParams = useSearchParams()
    const [inputWord, setInputWord] = useState(searchParams.get('word') || '')
    const [submitWord, setSubmitWord] = useState(searchParams.get('word') || '')

    // 页面获得焦点时，从剪贴板中取单词
    useEffect(() => {
        window.onfocus = function () {
            readClipboard().then((text) => {
                if (isWord(text)) {
                    setInputWord(text.toLowerCase())
                    setSubmitWord(text.toLowerCase())
                }
            })
        }
    }, [])

    const inputRef = useRef<InputRef>(null)
    // 自动选中所有文本
    const onFocus = () => {
        inputRef.current!.focus({
            cursor: 'all',
        })
    }
    // 查询单词
    const fetchWord = (e) => {
        if (e.key === 'Enter') {
            setSubmitWord(inputWord)
        }
    }

    return (
        <div className="query-word">
            <Input
                ref={inputRef}
                value={inputWord}
                placeholder="Type the word and press enter"
                onChange={(e) => setInputWord(e.target.value)}
                onKeyUp={fetchWord}
                onFocus={onFocus}
            />
            <HaiciMemo word={submitWord} />
            <Divider />
            <EnWordMemo word={submitWord} />
            <Divider />
            <AiWordMemo word={submitWord} />
        </div>
    )
}
