import { Segment } from "@/types"
import styles from './styles.module.scss'
//输入时间：300 输出：05:00
function formatTime(time: number) {
    let minutes = Math.floor(time / 60)
    let seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}`
}
interface VideoListProps {
    segments: Segment[]
    handleClick: (index: number) => void
    active: number
}
export default function VideoList({ segments, active, handleClick }: VideoListProps) {
    if (segments.length === 0) return null
    return (
        <aside className={styles.videoList}>
            {segments.map((segment, index) => {
                return (
                    <div
                        className={`${styles.videoItem} ${
                            index === active ? styles.active : ''
                        }`}
                        key={index}
                    >
                        <h4
                            onClick={() => {
                                handleClick(index)
                            }}
                        >
                            part{index + 1}
                        </h4>
                        <div className={styles.time}>
                            {formatTime(segment.start)} -{' '}
                            {formatTime(segment.end)}
                        </div>
                    </div>
                )
            })}
        </aside>
    )
}
