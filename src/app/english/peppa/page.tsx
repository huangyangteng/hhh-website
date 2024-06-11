import './puppa.css'
import VideoPlayer from '@/app/english/components/VideoPlayer'
import PeppaList from '@/app/english/peppa/_components/PeppaList'
import PeppaVideo from '@/app/english/peppa/_components/PeppaVideo'
import PeppaLines from '@/app/english/peppa/_components/PeppaLines'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: '挑战52天背完小猪佩奇',
}
export default function Peppa() {
    return (
        <div className="peppa-wrapper">
            <h1>挑战52天背完小猪佩奇(52集)</h1>
            <PeppaVideo />
            <PeppaList />
            <PeppaLines />
        </div>
    )
}
