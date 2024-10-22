import styles from './styles.module.scss'
import VariableNaming from '@/app/(tool)/ai/components/VariableNaming'
import { Metadata } from 'next'
import NumberDistance from '@/app/(tool)/ai/components/NumberDistance'
import { Flex } from 'antd'
import DecodeStartapp from '@/app/(tool)/ai/components/DecodeStartapp'
import GenStartapp from '@/app/(tool)/ai/components/GenStartapp'
export const metadata: Metadata = {
    title: 'Ai Tools',
}
export default function AiPage() {
    return (
        <div className={styles.wrapper}>
            <h1>工具箱</h1>
            <Flex gap={'large'} vertical>
                <VariableNaming />
                <NumberDistance />
                <GenStartapp />
                <DecodeStartapp />
            </Flex>
        </div>
    )
}
