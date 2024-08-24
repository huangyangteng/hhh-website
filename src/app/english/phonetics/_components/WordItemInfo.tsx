import { WordInfoType } from '../../_apis'
import { useAtomValue } from 'jotai'
import { globalVolumeAtom } from '@/app/english/_state/english'
import { Skeleton, Tooltip } from 'antd'
import { copyToBoard, isObject } from '@/utils'
import { useState } from 'react'

function CopyIcon({ text }) {
    const [isCopy, setIsCopy] = useState(false)
    const copyText = () => {
        copyToBoard(
            text
                .replace(/[英美]/g, '')
                .replace('uk', '')
                .replace('us', ''),
        )
        setIsCopy(true)
    }
    return (
        <Tooltip title={isCopy ? 'copied' : 'copy'}>
            <span onClick={copyText}>{isCopy ? '✅' : '📋'}</span>
        </Tooltip>
    )
}

function SoundItem({ item }) {
    const globalVolume = useAtomValue(globalVolumeAtom)
    const playSound = (src) => {
        let audio = new Audio(src)
        audio.volume = globalVolume
        audio.load()
        audio.play()
    }
    return (
        <div className="word-sound-item">
            <b>{item.text}</b>
            <CopyIcon text={item.text} />
            {item.sound && (
                <span onClick={() => playSound(item.sound)}>👨🏼</span>
            )}
            {item.fsound && (
                <span onClick={() => playSound(item.fsound)}>👩🏻‍🦳</span>
            )}
        </div>
    )
}

export default function WordItemInfo({
    info,
    style = {},
    isLoading = false,
}: {
    info: WordInfoType | string | null
    style?: Record<string, any>
    isLoading: boolean
}) {
    if (isLoading)
        return (
            <div style={style}>
                <Skeleton active={true} title={false} />
            </div>
        )
    if (!info) return null
    if (typeof info === 'string') return <p>{info}</p>
    const { meaning, soundmark: soundMark } = info
    return (
        <div style={style}>
            <div className="word-content">
                <div>
                    {meaning
                        .filter((item) => {
                            if (isObject(item)) return true
                            return (
                                typeof item === 'string' && Boolean(item.trim())
                            )
                        })
                        .map((item, index) => (
                            <li key={index}>
                                {isObject(item) ? (
                                    <>
                                        <span>{item.type}</span>
                                        {item.list
                                            .filter(
                                                (item) =>
                                                    typeof item === 'string' &&
                                                    Boolean(item.trim()),
                                            )
                                            .map((child) => (
                                                <ol key={child}>{child}</ol>
                                            ))}
                                    </>
                                ) : (
                                    <span>{item}</span>
                                )}
                            </li>
                        ))}
                </div>
                {soundMark.uk && <SoundItem item={soundMark.uk} />}
                {soundMark.us && <SoundItem item={soundMark.us} />}
            </div>
        </div>
    )
}
