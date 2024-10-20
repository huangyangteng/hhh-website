'use client'
import styles from '@/app/english/guide/page.module.scss'
import { Card, Timeline } from 'antd'
import {
    DescType,
    ListItemType,
    Methods,
    renderList,
} from '@/app/english/guide/data'
import { ReactNode } from 'react'

export default function EnMethods() {
    return (
        <section className={styles.section}>
            <h2 id={'英语学习方法论'}>英语学习方法论</h2>
            <Timeline
                className={styles.timelineWrapper}
                items={[
                    {
                        children: (
                            <div className={styles.card}>
                                <Card title={Methods.title} bordered={false}>
                                    {Methods.descs.map((item, index) => {
                                        if (item.type === DescType.List) {
                                            return renderList(
                                                item.content as ListItemType[],
                                                'Methods',
                                            )
                                        } else {
                                            return (
                                                <div
                                                    key={Methods.title + index}
                                                >
                                                    {item.content as ReactNode}
                                                </div>
                                            )
                                        }
                                    })}
                                </Card>
                            </div>
                        ),
                    },
                ]}
            />
        </section>
    )
}
