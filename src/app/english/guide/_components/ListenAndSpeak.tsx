'use client'

import styles from '@/app/english/guide/page.module.scss'
import { Card, Timeline } from 'antd'
import {
    DescType,
    Listening,
    ListItemType,
    phoneticChange,
    Phonetics,
    renderList,
    Speaking,
} from '@/app/english/guide/data'
import { ReactNode } from 'react'

export default function ListenAndSpeak() {
    return (
        <section className={styles.section}>
            <h2 id={'听说基础'}>听说基础</h2>
            <Timeline
                className={styles.timelineWrapper}
                items={[
                    {
                        children: (
                            <div className={styles.card}>
                                <Card title={Phonetics.title} bordered={false}>
                                    {Phonetics.descs.map((item, index) => {
                                        if (item.type === DescType.List) {
                                            return renderList(
                                                item.content as ListItemType[],
                                                'Phonetics',
                                            )
                                        } else {
                                            return (
                                                <div
                                                    key={
                                                        Phonetics.title + index
                                                    }
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
                                <Card
                                    title={phoneticChange.title}
                                    bordered={false}
                                >
                                    {phoneticChange.descs.map((item, index) => {
                                        if (item.type === DescType.List) {
                                            return renderList(
                                                item.content as ListItemType[],
                                                'phoneticChange',
                                            )
                                        } else {
                                            return (
                                                <div
                                                    key={
                                                        phoneticChange.title +
                                                        index
                                                    }
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
            <h2 id={'听力'}>听力</h2>
            <Timeline
                className={styles.timelineWrapper}
                items={[
                    {
                        children: (
                            <div>
                                <Card title={Listening.title} bordered={false}>
                                    {Listening.descs.map((item, index) => {
                                        if (item.type === DescType.List) {
                                            return renderList(
                                                item.content as ListItemType[],
                                                'Listening',
                                            )
                                        } else {
                                            return (
                                                <div
                                                    key={
                                                        Listening.title + index
                                                    }
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

            <h2 id={'口语'}>口语</h2>
            <Timeline
                className={styles.timelineWrapper}
                items={[
                    {
                        children: (
                            <div>
                                <Card title={Speaking.title} bordered={false}>
                                    {Speaking.descs.map((item, index) => {
                                        if (item.type === DescType.List) {
                                            return renderList(
                                                item.content as ListItemType[],
                                                'Speaking',
                                            )
                                        } else {
                                            return (
                                                <div
                                                    key={Speaking.title + index}
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
