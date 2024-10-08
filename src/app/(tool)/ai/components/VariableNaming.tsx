'use client'
import AiCardItem from '@/app/(tool)/ai/components/AiCardItem'
import { CopyText } from '@/app/(tool)/ai/components/CopyText'
import styles from '../styles.module.scss'
import { PromptType } from '@/app/(tool)/ai/prompt'

export default function VariableNaming() {
    const renderResult = (data: string[]) => {
        if (!data) return null
        return data.map((item) => (
            <div className={styles.outputItem} key={item}>
                <CopyText text={item} />
            </div>
        ))
    }
    return (
        <AiCardItem
            title={'变量命名'}
            type={PromptType.VariableNaming}
            renderResult={renderResult}
        ></AiCardItem>
    )
}
