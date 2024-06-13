import { WordInfoType } from '../../_apis'
import { useAtomValue } from 'jotai'
import { globalVolumeAtom } from '@/app/english/_state/english'
import { Skeleton } from 'antd'

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
                    {meaning.filter((item) => Boolean(item.trim())).join(' | ')}
                </div>
                {soundMark.uk && (
                    <div className="word-sound-item">
                        <b>{soundMark.uk.text}</b>
                        <span onClick={() => playSound(soundMark.uk.sound)}>
                            👨🏼
                        </span>
                        <span onClick={() => playSound(soundMark.uk.fsound)}>
                            👩🏻‍🦳
                        </span>
                    </div>
                )}
                {soundMark.us && (
                    <div className="word-sound-item">
                        <b>{soundMark.us.text}</b>
                        <span onClick={() => playSound(soundMark.us.sound)}>
                            👨🏼
                        </span>
                        <span onClick={() => playSound(soundMark.us.fsound)}>
                            👩🏻‍🦳
                        </span>
                    </div>
                )}
            </div>
        </div>
    )
}
