import './phonetics.css'
import PhoneticSymbol from '@/app/english/phonetics/_components/PhoneticSymbol'
import Recommend from '@/app/english/phonetics/_components/Recommend'
import QueryWord from '@/app/english/phonetics/_components/QueryWord'
import dynamic from 'next/dynamic'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'English Learning',
}

const PhoneticsResource = dynamic(
    // @ts-ignore
    () => import('@/app/english/phonetics/_components/PhoneticsResource'),
    { ssr: false },
)
const WordList = dynamic(
    // @ts-ignore
    () => import('@/app/english/phonetics/_components/WordList'),
    { ssr: false },
)
const VolumeControl = dynamic(
    // @ts-ignore
    () => import('@/app/english/_components/VolumeControl'),
    {
        ssr: false,
    },
)

export default function Phonetics() {
    return (
        <div className="phonetics-wrapper">
            <QueryWord />
            <PhoneticSymbol />
            <PhoneticsResource />
            <WordList />
            <Recommend />
            <VolumeControl />
        </div>
    )
}
