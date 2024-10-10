import SymbolBox from './SymbolBox'
const list = [
    {
        title: '长元音',
        symbols: [
            { text: 'ɑ', start: 131.429802, page: 1 },
            { text: 'i', start: 140.510145, page: 1 },
            { text: 'u', start: 180.654306, page: 1 },
        ],
    },
    {
        title: '短元音',
        symbols: [
            { text: 'ʌ', start: 161.843418, page: 1 },
            { text: 'ɪ', start: 135.602675, page: 1 },
            { text: 'ʊ', start: 175.971786, page: 1 },
            { text: 'ɔ', start: 171.189316, page: 1, same: '' },
            { text: 'ə', start: 185.361191, page: 1 },
            { text: 'ɛ', start: 144.467887, page: 1 },
            { text: 'æ', start: 153.700604, page: 1 },
        ],
    },
    {
        title: '双元音',
        symbols: [
            { text: 'e', start: 94.601669, page: 1, same: 'eɪ' },
            { text: 'aɪ', start: 99.872042, page: 1 },
            { text: 'ɔɪ', start: 104.305814, page: 1 },
            { text: 'oʊ', start: 108.649539, page: 1 },
            { text: 'aʊ', start: 113.771062, page: 1 },
        ],
    },
    {
        title: '卷舌音',
        symbols: [
            { text: 'ɪr', start: 117.030706, page: 1 },
            { text: 'ɛr', start: 120.711356, page: 1 },
            { text: 'ʊr', start: 124.141151, page: 1 },
            { text: 'ɔr', start: 124.141151, page: 1 },
            { text: 'ar', start: 157.692991, page: 1 },
            { text: 'ɝ', start: 149.16148, page: 1 },
        ],
    },
]

export default function VowelUs() {
    return <SymbolBox title={'元音（美式）'} list={list} />
}
