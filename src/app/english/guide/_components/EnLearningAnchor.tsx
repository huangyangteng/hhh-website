'use client'

import { Anchor } from 'antd'
import styles from '../page.module.scss'
export default function EnLearningAnchor() {
    return (
        <div className={styles.enLearningAnchor}>
            <Anchor
                affix
                bounds={20}
                items={[
                    {
                        key: 'part-1',
                        href: '#原则',
                        title: '原则',
                    },
                    {
                        key: 'part-2',
                        href: '#听说基础',
                        title: '听说基础',
                    },
                    {
                        key: 'part-3',
                        href: '#听力',
                        title: '听力',
                    },
                    {
                        key: 'part-4',
                        href: '#口语',
                        title: '口语',
                    },
                    {
                        key: '读写基础',
                        href: '#读写基础',
                        title: '读写基础',
                    },
                    {
                        key: '阅读',
                        href: '#阅读',
                        title: '阅读',
                    },
                    {
                        key: '写作',
                        href: '#写作',
                        title: '写作',
                    },
                    {
                        key: '英语学习方法论',
                        href: '#英语学习方法论',
                        title: '英语学习方法论',
                    },
                ]}
            />
        </div>
    )
}
