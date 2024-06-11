import './english.css'
import PhoneticSymbol from '@/app/english/components/PhoneticSymbol'
import Recommend from '@/app/english/components/Recommend'
import QueryWord from '@/app/english/components/QueryWord'
import WordList from '@/app/english/components/WordList'
import PhoneticsResource from '@/app/english/components/PhoneticsResource'
import dynamic from 'next/dynamic'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'English Learning',
}
const VolumeControl = dynamic(
    // @ts-ignore
    () => import('@/app/english/components/VolumeControl'),
    {
        ssr: false,
    },
)

export default function English() {
    return (
        <div className="english-wrapper">
            <QueryWord />
            <PhoneticSymbol />
            <PhoneticsResource />
            <WordList />
            <Recommend />
            <VolumeControl />
        </div>
    )
}
