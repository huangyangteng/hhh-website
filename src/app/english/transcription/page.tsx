import styles from './styles.module.scss'
import Consonant from '@/app/english/transcription/_components/Consonant'
import { Metadata } from 'next'
import VowelUk from '@/app/english/transcription/_components/VowelUk'
import VowelUs from '@/app/english/transcription/_components/VowelUs'

export const metadata: Metadata = {
    title: 'hhh | Phonetics Symbols',
}
export default function Page() {
    return (
        <div className={`${styles.wrapper} page-container`}>
            <h1>音标</h1>
            <VowelUk />
            <VowelUs />
            <Consonant />
        </div>
    )
}
