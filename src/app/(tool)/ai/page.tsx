import styles from './styles.module.scss'
import VariableNaming from '@/app/(tool)/ai/components/VariableNaming'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'hhh | Ai Tools',
}
export default function AiPage() {
    return (
        <div className={styles.wrapper}>
            <h1>AI 工具箱</h1>
            <VariableNaming />
        </div>
    )
}
