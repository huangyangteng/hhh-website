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
            <h2 id={'读写基础'}>读写基础</h2>
            <Timeline
                className={styles.timelineWrapper}
                items={[
                    {
                        children: (
                            <div className={styles.card}>
                                <Card title={Grammar.title} bordered={false}>
                                    {Grammar.descs.map((item, index) => {
                                        if (item.type === DescType.List) {
                                            return renderList(
                                                item.content as ListItemType[],
                                                'Grammar',
                                            )
                                        } else {
                                            return (
                                                <div
                                                    key={Grammar.title + index}
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
                    {
                        children: (
                            <div>
                                <Card title={Word.title} bordered={false}>
                                    {Word.descs.map((item, index) => {
                                        if (item.type === DescType.List) {
                                            return renderList(
                                                item.content as ListItemType[],
                                                'Word',
                                            )
                                        } else {
                                            return (
                                                <div key={Word.title + index}>
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
            <h2 id={'阅读'}>阅读</h2>
            <Timeline
                className={styles.timelineWrapper}
                items={[
                    {
                        children: (
                            <div>
                                <Card title={Reading.title} bordered={false}>
                                    {Reading.descs.map((item, index) => {
                                        if (item.type === DescType.List) {
                                            return renderList(
                                                item.content as ListItemType[],
                                                'Reading',
                                            )
                                        } else {
                                            return (
                                                <div
                                                    key={Reading.title + index}
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

            <h2 id={'写作'}>写作</h2>
            <Timeline
                className={styles.timelineWrapper}
                items={[
                    {
                        children: (
                            <div>
                                <Card title={Writing.title} bordered={false}>
                                    {Writing.descs.map((item, index) => {
                                        if (item.type === DescType.List) {
                                            return renderList(
                                                item.content as ListItemType[],
                                                'Writing',
                                            )
                                        } else {
                                            return (
                                                <div
                                                    key={Writing.title + index}
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
