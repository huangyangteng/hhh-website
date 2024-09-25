'use client'
import styles from './page.module.scss'
import { Timeline } from 'antd'
const roadmap = [
    {
        title: '听力基础',
        timelines: [],
    },
]
export default function Guide() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h1>English Learning Guide</h1>
                <h2>听说基础</h2>
                <Timeline
                    className={styles.timelineWrapper}
                    items={[
                        {
                            children: (
                                <div>
                                    <h4>音标</h4>
                                    <p>课程1 xxx</p>
                                    <p>课程2 xxx</p>
                                    <p>课程3 xxx</p>
                                </div>
                            ),
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
            </div>
        </div>
    )
}
