'use client'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'

import { useEffect, useRef, useState } from 'react'
import { Input, InputRef } from 'antd'
import { useWord, useWordEn } from '../../_apis'

import WordItemInfo from '@/app/english/phonetics/_components/WordItemInfo'
import { splitSymbolAtom } from '@/app/english/_state/english'
import { useAtomValue, useSetAtom } from 'jotai'
import { splitPhoneticsSymbol } from '@/app/english/_utils/english'

function HaiCiWord({ word }) {
    const { isLoading, data } = useWord(word)
    return <WordItemInfo info={data} isLoading={isLoading} />
}

function EnWord({ word }) {
    const { isLoading, data } = useWordEn(word)
    console.log(isLoading, data)

    return <div>word en</div>
}

export default function QueryWord() {
    const searchParams = useSearchParams()
    const [inputWord, setInputWord] = useState(searchParams.get('word') || '')
    const [submitWord, setSubmitWord] = useState(searchParams.get('word') || '')

    // const { isLoading, data } = useWord(submitWord)
    // const setSplitSymbol = useSetAtom(splitSymbolAtom)
    //
    // useEffect(() => {
    //     if (inputWord == '') {
    //         setSplitSymbol([])
    //     }
    // }, [inputWord])
    //
    // useEffect(() => {
    //     if (data && typeof data !== 'string') {
    //         const text = data.soundmark.us.text.replace(/[英美\[\]]/g, '')
    //         setSplitSymbol(splitPhoneticsSymbol(text))
    //     }
    // }, [data])

    const fetchWord = (e) => {
        if (e.key === 'Enter') {
            setSubmitWord(inputWord)
        }
    }

    const handleSearch = (e) => {
        setInputWord(e.target.value)
    }
    const inputRef = useRef<InputRef>(null)
    const onFocus = () => {
        inputRef.current!.focus({
            cursor: 'all',
        })
    }

    return (
        <div className="query-word">
            <Input
                ref={inputRef}
                value={inputWord}
                placeholder="Type the word and press enter"
                onChange={handleSearch}
                onKeyUp={fetchWord}
                onFocus={onFocus}
            />
            <HaiCiWord word={submitWord} />
            {/*<EnWord word={submitWord} />*/}
        </div>
    )
}
