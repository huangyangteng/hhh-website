import { Metadata } from 'next'
import Phonetics from './phonetics/page'
export const metadata: Metadata = {
    title: '🍎🍎🍎English Learning',
}

export default function English() {
    return <Phonetics />
}
