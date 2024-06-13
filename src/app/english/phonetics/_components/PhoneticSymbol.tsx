'use client'
import { endMap, symbolList } from '../../_data'
import { useAtom, useAtomValue } from 'jotai'
import { selectedSymbol, splitSymbolAtom } from '@/app/english/_state/english'

export default function PhoneticSymbol() {
    const [symbol, setSymbol] = useAtom(selectedSymbol)
    const splitSymbols = useAtomValue(splitSymbolAtom)
    const select = (item) => {
        setSymbol({
            text: item.text,
            start: item.start,
            end: endMap.get(item.text),
        })
    }
    return (
        <div className="marks">
            <div className="title-1">元音</div>
            <div className="title-1">辅音</div>
            <div className="title-2">长元音</div>
            <div className="title-2">短元音</div>
            <div className="title-2">双元音</div>
            <div className="title-2">清辅音</div>
            <div className="title-2">浊辅音</div>

            {symbolList.map((item, index) => (
                <div
                    onClick={() => select(item)}
                    className={`text text-${item.text} ${symbol && item.text == symbol.text ? 'active' : ''} ${
                        splitSymbols.includes(item.text) ? 'split' : ''
                    }  `}
                    key={item.text}
                >
                    <span className={'text-symbol'}>
                        {item.text}
                        <i className={'order'}>
                            {splitSymbols.findIndex((i) => i == item.text) + 1}
                        </i>
                    </span>
                </div>
            ))}
        </div>
    )
}
