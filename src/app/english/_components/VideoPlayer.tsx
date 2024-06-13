'use client'
import { useAtomValue } from 'jotai'
import { globalVolumeAtom } from '@/app/english/_state/english'

interface VideoProps {
    src: string
    controls?: boolean
}

export default function VideoPlayer({
    src,
    controls = true,
    ...restProps
}: VideoProps & Record<string, any>) {
    const globalVolume = useAtomValue(globalVolumeAtom)
    const onLoad = (e) => {
        e.target.volume = globalVolume
    }
    return (
        <video
            style={{ width: '100%', borderRadius: '4px' }}
            onLoadedMetadata={onLoad}
            controls={controls}
            src={src}
            playsInline
            {...restProps}
        ></video>
    )
}
