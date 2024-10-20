import styles from './styles.module.scss'
import VariableNaming from '@/app/(tool)/ai/components/VariableNaming'
import { Metadata } from 'next'
import NumberDistance from '@/app/(tool)/ai/components/NumberDistance'
import { Divider } from 'antd'
export const metadata: Metadata = {
    title: 'Ai Tools',
}
export default function AiPage() {
    return (
        <div className={styles.wrapper}>
            <h1>AI 工具箱</h1>
            <VariableNaming />
            <Divider />
            <NumberDistance />
        </div>
    )
}
