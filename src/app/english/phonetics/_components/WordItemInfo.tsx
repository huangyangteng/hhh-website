import { WordInfoType } from '../../_apis'
import { useAtomValue } from 'jotai'
import { globalVolumeAtom } from '@/app/english/_state/english'
import { Skeleton } from 'antd'
import { isObject } from '@/utils'

export default function WordItemInfo({
    info,
    style = {},
    isLoading = false,
}: {
    info: WordInfoType | string | null
    style?: Record<string, any>
    isLoading: boolean
}) {
    const globalVolume = useAtomValue(globalVolumeAtom)

    const playSound = (src) => {
        let audio = new Audio(src)
        audio.volume = globalVolume
        audio.load()
        audio.play()
    }
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
                {soundMark.uk && (
                    <div className="word-sound-item">
                        <b>{soundMark.uk.text}</b>
                        {soundMark.uk.sound && (
                            <span onClick={() => playSound(soundMark.uk.sound)}>
                                👨🏼
                            </span>
                        )}
                        {soundMark.uk.fsound && (
                            <span
                                onClick={() => playSound(soundMark.uk.fsound)}
                            >
                                👩🏻‍🦳
                            </span>
                        )}
                    </div>
                )}
                {soundMark.us && (
                    <div className="word-sound-item">
                        <b>{soundMark.us.text}</b>
                        {soundMark.us.sound && (
                            <span onClick={() => playSound(soundMark.us.sound)}>
                                👨🏼
                            </span>
                        )}
                        {soundMark.us.fsound && (
                            <span
                                onClick={() => playSound(soundMark.us.fsound)}
                            >
                                👩🏻‍🦳
                            </span>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
