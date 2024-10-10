import styles from '@/app/english/transcription/_components/styles.module.scss'
import TranscriptionItem from '@/app/english/transcription/_components/TranscriptionItem'
import { SymbolList } from '@/app/english/transcription/type'

interface Props {
    list: SymbolList[]
    title: string
}
export default function SymbolBox({ title, list }: Props) {
    return (
        <div className={styles.symbolBox}>
            <aside>
                <h2>{title}</h2>
            </aside>
            <section>
                {list.map((item, index) => (
                    <div key={index} className={styles.consonantItem}>
                        <h4>{item.title}</h4>
                        {item.symbols.map((symbol) => (
                            <TranscriptionItem
                                key={symbol.text}
                                info={symbol}
                            />
                        ))}
                    </div>
                ))}
            </section>
        </div>
    )
}
