'use client'
import styles from '@/app/english/guide/page.module.scss'
import { Card, Timeline } from 'antd'
import {
    DescType,
    Grammar,
    ListItemType,
    Reading,
    renderList,
    Word,
    Writing,
} from '@/app/english/guide/data'
import { ReactNode } from 'react'

export default function ReadAndWrite() {
    return (
        <section className={styles.section}>
            <h2>读写基础</h2>
            <Timeline
                className={styles.timelineWrapper}
                items={[
                    {
                        children: (
                            <div className={styles.card}>
                                <Card title={Grammar.title} bordered={false}>
                                    {Grammar.descs.map((item) => {
                                        if (item.type === DescType.List) {
                                            return renderList(
                                                item.content as ListItemType[],
                                            )
                                        } else {
                                            return item.content as ReactNode
                                        }
                                    })}
                                </Card>
                            </div>
                        ),
                    },
                    {
                        children: (
                            <div>
                                <Card title={Word.title} bordered={false}>
                                    {Word.descs.map((item) => {
                                        if (item.type === DescType.List) {
                                            return renderList(
                                                item.content as ListItemType[],
                                            )
                                        } else {
                                            return item.content as ReactNode
                                        }
                                    })}
                                </Card>
                            </div>
                        ),
                    },
                ]}
            />
            <h2>阅读</h2>
            <Timeline
                className={styles.timelineWrapper}
                items={[
                    {
                        children: (
                            <div>
                                <Card title={Reading.title} bordered={false}>
                                    {Reading.descs.map((item) => {
                                        if (item.type === DescType.List) {
                                            return renderList(
                                                item.content as ListItemType[],
                                            )
                                        } else {
                                            return item.content as ReactNode
                                        }
                                    })}
                                </Card>
                            </div>
                        ),
                    },
                ]}
            />

            <h2>写作</h2>
            <Timeline
                className={styles.timelineWrapper}
                items={[
                    {
                        children: (
                            <div>
                                <Card title={Writing.title} bordered={false}>
                                    {Writing.descs.map((item) => {
                                        if (item.type === DescType.List) {
                                            return renderList(
                                                item.content as ListItemType[],
                                            )
                                        } else {
                                            return item.content as ReactNode
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
