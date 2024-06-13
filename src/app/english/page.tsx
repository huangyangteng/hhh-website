import { Metadata } from 'next'
import All from './all/page'

export const metadata: Metadata = {
    title: 'English Learning',
}

export default function English() {
    return <All />
}
