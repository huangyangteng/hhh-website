'use client'
import styles from './page.module.scss'
import { Card, Timeline } from 'antd'
import ThemeSwitch from '@/components/ToggleTheme'
import {
    DescType,
    Grammar,
    Listening,
    ListItemType,
    phoneticChange,
    Phonetics,
    Reading,
    renderList,
    Speaking,
    Word,
    Writing,
} from '@/app/english/guide/data'
import { ReactNode } from 'react'

export default function Guide() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                {/*<ThemeSwitch />*/}
                <h1>英语学习指南</h1>
                <section className={styles.section}>
                    <h2>原则</h2>
                    <ul className={styles.ul}>
                        <li>
                            学习英语没有捷径，只有一步一个脚印，慢慢从量变达到质变。
                        </li>
                        <li>
                            固定的英语素材(听力、阅读、写作等)，重复刷多遍，直到烂熟于心
                        </li>
                        <li>
                            听说不分家，读写不分家，这两部分其实是相对独立的能力，可以分开学习。
                        </li>
                    </ul>
                </section>
                {/*听说*/}
                <section className={styles.section}>
                    <h2>听说基础</h2>
                    <Timeline
                        className={styles.timelineWrapper}
                        items={[
                            {
                                children: (
                                    <div className={styles.card}>
                                        <Card
                                            title={Phonetics.title}
                                            bordered={false}
                                        >
                                            {Phonetics.descs.map((item) => {
                                                if (
                                                    item.type === DescType.List
                                                ) {
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
                                        <Card
                                            title={phoneticChange.title}
                                            bordered={false}
                                        >
                                            {phoneticChange.descs.map(
                                                (item) => {
                                                    if (
                                                        item.type ===
                                                        DescType.List
                                                    ) {
                                                        return renderList(
                                                            item.content as ListItemType[],
                                                        )
                                                    } else {
                                                        return item.content as ReactNode
                                                    }
                                                },
                                            )}
                                        </Card>
                                    </div>
                                ),
                            },
                        ]}
                    />
                    <h2>听力</h2>
                    <Timeline
                        className={styles.timelineWrapper}
                        items={[
                            {
                                children: (
                                    <div>
                                        <Card
                                            title={Listening.title}
                                            bordered={false}
                                        >
                                            {Listening.descs.map((item) => {
                                                if (
                                                    item.type === DescType.List
                                                ) {
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

                    <h2>口语</h2>
                    <Timeline
                        className={styles.timelineWrapper}
                        items={[
                            {
                                children: (
                                    <div>
                                        <Card
                                            title={Speaking.title}
                                            bordered={false}
                                        >
                                            {Speaking.descs.map((item) => {
                                                if (
                                                    item.type === DescType.List
                                                ) {
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
                {/*读写*/}
                <section className={styles.section}>
                    <h2>读写基础</h2>
                    <Timeline
                        className={styles.timelineWrapper}
                        items={[
                            {
                                children: (
                                    <div className={styles.card}>
                                        <Card
                                            title={Grammar.title}
                                            bordered={false}
                                        >
                                            {Grammar.descs.map((item) => {
                                                if (
                                                    item.type === DescType.List
                                                ) {
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
                                        <Card
                                            title={Word.title}
                                            bordered={false}
                                        >
                                            {Word.descs.map((item) => {
                                                if (
                                                    item.type === DescType.List
                                                ) {
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
                                        <Card
                                            title={Reading.title}
                                            bordered={false}
                                        >
                                            {Reading.descs.map((item) => {
                                                if (
                                                    item.type === DescType.List
                                                ) {
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
                                        <Card
                                            title={Writing.title}
                                            bordered={false}
                                        >
                                            {Writing.descs.map((item) => {
                                                if (
                                                    item.type === DescType.List
                                                ) {
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
            </div>
        </div>
    )
}
