'use client'
import { useAtomValue } from 'jotai'
import { selectedSymbol } from '@/app/english/_state/english'
import { words } from '@/app/english/_data/big-data/word'
import { useEffect, useState } from 'react'
import { useWord, WordInfoType } from '../../_apis'
import WordItemInfo from '@/app/english/phonetics/_components/WordItemInfo'
import { Virtuoso } from 'react-virtuoso'

interface WordInfoExtend {
    w: string
    s: string
    r: string
    info?: WordInfoType
}

export default function WordList() {
    const select = useAtomValue(selectedSymbol)
    if (!select) return null
    return <WordListContent select={select} />
}

export function WordItem({ item }) {
    const [word, setWord] = useState('')
    const { isLoading, data } = useWord(word)
    const translateWord = () => {
        setWord(item.w)
    }
    return (
        <>
            <div className={'word-item'} key={item.w}>
                <span>{item.w}</span>
                <span>{item.s}</span>
                {isLoading ? '🤯' : <b onClick={() => translateWord()}>💭</b>}
            </div>
            <WordItemInfo
                isLoading={isLoading}
                style={{
                    paddingLeft: '1em',
                }}
                info={data}
            />
        </>
    )
}

function WordListContent({ select }) {
    const [wordList, setWordList] = useState<WordInfoExtend[]>(
        words.filter((item) => {
            return item.s.includes(select.text)
        }),
    )
    useEffect(() => {
        setWordList(words.filter((item) => item.s.includes(select.text)))
    }, [select.text])

    return (
        <div className="word-list">
            <Virtuoso
                style={{ height: '280px' }}
                data={wordList}
                itemContent={(index, item) => (
                    <WordItem item={item} key={item.w} />
                )}
            />
        </div>
    )
}
