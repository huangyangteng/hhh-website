import SymbolBox from './SymbolBox'
const list = [
    {
        title: '清辅音',
        symbols: [
            { text: 'p', start: 0, page: 1 },
            { text: 't', start: 6.851234, page: 1 },
            { text: 'k', start: 19.802917, page: 1 },
            { text: 'f', start: 25.657559, page: 1 },
            { text: 'θ', start: 34.408206, page: 1 },
            { text: 's', start: 44.453561, page: 1 },
            { text: 'ʃ', start: 54.226019, page: 1 },
            { text: 'tʃ', start: 12.873553, page: 1 },
            { text: 'h', start: 63.074822, page: 1 },
        ],
    },
    {
        title: '浊辅音',
        symbols: [
            { text: 'b', start: 3.807495, page: 1 },
            { text: 'd', start: 9.965973, page: 1 },
            { text: 'ɡ', start: 22.464428, page: 1 },
            { text: 'v', start: 30.054787, page: 1 },
            { text: 'ð', start: 38.422541, page: 1 },
            { text: 'z', start: 49.527625, page: 1 },
            { text: 'ʒ', start: 58.539761, page: 1 },
            { text: 'dʒ', start: 16.307223, page: 1 },
            { text: 'r', start: 83.630749, page: 1 },
        ],
    },
    {
        title: '鼻音',
        symbols: [
            { text: 'm', start: 66.174372, page: 1 },
            { text: 'n', start: 70.522094, page: 1 },
            { text: 'ŋ', start: 75.155253, page: 1 },
        ],
    },
    {
        title: '半元音',
        symbols: [
            { text: 'j', start: 91.418903, page: 1 },
            { text: 'w', start: 88.323028, page: 1 },
        ],
    },
    {
        title: '边音',
        symbols: [{ text: 'l', start: 79.148829, page: 1 }],
    },
]

export default function Consonant() {
    return <SymbolBox title={'辅音'} list={list} />
}
