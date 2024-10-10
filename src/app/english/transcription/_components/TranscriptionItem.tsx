'use client'
import styles from './styles.module.scss'
interface Props {
    info: {
        text: string
        start: number
        page: number
    }
}
export default function TranscriptionItem({ info }: Props) {
    return <div className={styles.transcriptionItem}>{info.text}</div>
}
