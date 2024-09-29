'use client'
import styles from './page.module.scss'
import { Card, List, Timeline, Avatar, Button } from 'antd'
import ThemeSwitch from '@/components/ToggleTheme'
const roadmap = [
    {
        title: '听力基础',
        timelines: [],
    },
]
export default function Guide() {
    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ]
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <ThemeSwitch />
                <h1>English Learning Guide</h1>
                <section className={styles.section}>
                    <h2>Principles</h2>
                    <ul className={styles.ul}>
                        <li>没有捷径</li>
                        <li>重复、重复再重复</li>
                    </ul>
                </section>
                <section className={styles.section}>
                    <h2>听说基础</h2>
                    <Timeline
                        className={styles.timelineWrapper}
                        items={[
                            {
                                children: (
                                    <div className={styles.card}>
                                        <Card title="音标" bordered={false}>
                                            <List
                                                itemLayout="horizontal"
                                                dataSource={data}
                                                renderItem={(item, index) => (
                                                    <List.Item>
                                                        <List.Item.Meta
                                                            title={
                                                                <a href="https://ant.design">
                                                                    {item.title}
                                                                </a>
                                                            }
                                                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                                        />
                                                    </List.Item>
                                                )}
                                            />
                                        </Card>
                                    </div>
                                ),
                            },
                            {
                                children: (
                                    <div>
                                        <Card
                                            title="音变"
                                            bordered={false}
                                            style={{ width: 300 }}
                                        >
                                            <p>Card content</p>
                                            <p>Card content</p>
                                            <p>Card content</p>
                                        </Card>
                                    </div>
                                ),
                            },
                            {
                                children: (
                                    <div>
                                        <h3>音标</h3>
                                        <p>课程1 xxx</p>
                                        <p>课程2 xxx</p>
                                        <p>课程3 xxx</p>
                                    </div>
                                ),
                            },
                            {
                                children:
                                    'Network problems being solved 2015-09-01',
                            },
                        ]}
                    />
                    <h2>听力</h2>
                    <Timeline
                        className={styles.timelineWrapper}
                        items={[
                            {
                                children: 'Create a services site 2015-09-01',
                            },
                            {
                                children:
                                    'Solve initial network problems 2015-09-01',
                            },
                            {
                                children: 'Technical testing 2015-09-01',
                            },
                            {
                                children:
                                    'Network problems being solved 2015-09-01',
                            },
                        ]}
                    />

                    <h2>口语</h2>
                </section>
            </div>
        </div>
    )
}
