import SymbolBox from './SymbolBox'
// 英国
const list = [
    {
        title: '长元音',
        symbols: [
            { text: 'ɑː', start: 131.429802, page: 1 },
            { text: 'ɔː', start: 171.189316, page: 1 }, //TODO:
            { text: 'ɜː', start: 149.16148, page: 1 },
            { text: 'iː', start: 140.510145, page: 1 },
            { text: 'uː', start: 180.654306, page: 1 },
        ],
    },
    {
        title: '短元音',
        symbols: [
            { text: 'ʌ', start: 161.843418, page: 1 },
            { text: 'ɒ', start: 171.189316, page: 1 },
            { text: 'ə', start: 185.361191, page: 1 },
            { text: 'ɪ', start: 135.602675, page: 1 },
            { text: 'ʊ', start: 175.971786, page: 1 },
            { text: 'e', start: 94.601669, page: 1 },
            { text: 'æ', start: 94.601669, page: 1 },
        ],
    },
    {
        title: '双元音',
        symbols: [
            { text: 'eɪ', start: 94.601669, page: 1 },
            { text: 'aɪ', start: 99.872042, page: 1 },
            { text: 'ɒɪ', start: 104.305814, page: 1 },
            { text: 'əʊ', start: 0, page: 1 },
            { text: 'aʊ', start: 113.771062, page: 1 },
            { text: 'ɪə', start: 0, page: 1 },
            { text: 'eə', start: 0, page: 1 },
            { text: 'ʊə', start: 0, page: 1 },
        ],
    },
]

export default function VowelUk() {
    return <SymbolBox title={'元音（英式）'} list={list} />
}
