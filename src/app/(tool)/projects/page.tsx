import { Metadata } from 'next'
import { ItemType, Project } from '@/app/(tool)/projects/type'
import ProjectItem from '@/app/(tool)/projects/_components/ProjectItem'
import { Space } from 'antd'

export const metadata: Metadata = {
    title: 'Projects',
}
const projects: Project[] = [
    {
        title: '黑客松WEB端',
        info: [
            {
                label: '需求',
                list: [
                    {
                        type: ItemType.Link,
                        label: 'JIRA',
                        link: 'https://gateio.atlassian.net/browse/GROWTH-5659',
                    },
                    {
                        type: ItemType.Link,
                        label: 'PRD',
                        link: 'https://gtglobal.jp.larksuite.com/docx/QjoYd3HXlorwAtxNIdZjIFdHpJb',
                    },
                    {
                        type: ItemType.Link,
                        label: '任务映射',
                        link: 'https://gtglobal.jp.larksuite.com/docx/Rc9XdEE4poJKPyxOL5vjbBkzpEJ',
                    },
                    {
                        type: ItemType.Link,
                        label: '文案',
                        link: 'https://gtglobal.jp.larksuite.com/sheets/PUnFsiekbhrAMttjMXVjjHQepUb?from=from_copylink&disposable_login_token=eyJ1c2VyX2lkIjoiNzM5NDI5MzEzMTY3NzUzMjE5NCIsImRldmljZV9sb2dpbl9pZCI6IjczOTY2NjE5MDIxNjk4NjYyNzMiLCJ0aW1lc3RhbXAiOjE3MjkwNzExNTQsInVuaXQiOiJsYXJranBhd3MiLCJwd2RfbGVzc19sb2dpbl9hdXRoIjoiMSIsInZlcnNpb24iOiJ2MyIsInRlbmFudF9icmFuZCI6ImxhcmsiLCJwa2dfYnJhbmQiOiJMYXJrIn0=.11b0eac99ecf93583f057fecaa3cfe4d9e6d4a8053296a82897cc798388a2f79',
                    },
                    {
                        type: ItemType.Link,
                        label: 'UI稿',
                        link: 'https://www.figma.com/design/1qxYUPnHUw4X2LrnQrTvFU/Telegram%E8%BF%90%E8%90%A5%E6%B4%BB%E5%8A%A8%E9%A1%B5%E9%9D%A2?node-id=0-1&node-type=canvas&t=X1LSVI09na30YBwC-0',
                    },
                    {
                        type: ItemType.Link,
                        label: '排期',
                        link: 'https://gtglobal.jp.larksuite.com/wiki/C5fOwYHwBi5rMkkdYlhj1qIkpZg?table=tblUB60pY3TzqkPc&view=vewtgB0OVB',
                    },
                    {
                        type: ItemType.Link,
                        label: '发布单',
                        link: 'https://gateio.atlassian.net/browse/GROWTH-6007',
                    },
                ],
            },
            {
                label: '开发',
                list: [
                    {
                        type: ItemType.Text,
                        label: '分支:',
                        text: 'feature/GROWTH-5659-hackathon',
                    },
                    {
                        type: ItemType.Text,
                        label: '翻译文件',
                        text: 'messages/tg_miniapp_hackathon.json',
                    },
                ],
            },
            {
                label: '环境',
                list: [
                    {
                        type: ItemType.Link,
                        label: '测试',
                        link: 'https://124.156.145.198:13471/competition/activities/hackathon',
                    },
                    {
                        type: ItemType.Link,
                        label: '预发',
                        link: 'https://web03.gatedata.org/competition/activities/hackathon',
                    },
                    {
                        type: ItemType.Link,
                        label: '生产',
                        link: 'https://www.gate.io/competition/activities/hackathon',
                    },
                ],
            },
        ],
    },
    {
        title: '黑客松TG端',
        info: [
            {
                label: '需求',
                list: [
                    {
                        type: ItemType.Link,
                        label: 'JIRA',
                        link: 'https://gateio.atlassian.net/browse/GROWTH-5659',
                    },
                    {
                        type: ItemType.Link,
                        label: 'PRD',
                        link: 'https://gtglobal.jp.larksuite.com/docx/QjoYd3HXlorwAtxNIdZjIFdHpJb',
                    },
                    {
                        type: ItemType.Link,
                        label: '任务映射',
                        link: 'https://gtglobal.jp.larksuite.com/docx/Rc9XdEE4poJKPyxOL5vjbBkzpEJ',
                    },
                    {
                        type: ItemType.Link,
                        label: '文案',
                        link: 'https://gtglobal.jp.larksuite.com/sheets/PUnFsiekbhrAMttjMXVjjHQepUb?from=from_copylink&disposable_login_token=eyJ1c2VyX2lkIjoiNzM5NDI5MzEzMTY3NzUzMjE5NCIsImRldmljZV9sb2dpbl9pZCI6IjczOTY2NjE5MDIxNjk4NjYyNzMiLCJ0aW1lc3RhbXAiOjE3MjkwNzExNTQsInVuaXQiOiJsYXJranBhd3MiLCJwd2RfbGVzc19sb2dpbl9hdXRoIjoiMSIsInZlcnNpb24iOiJ2MyIsInRlbmFudF9icmFuZCI6ImxhcmsiLCJwa2dfYnJhbmQiOiJMYXJrIn0=.11b0eac99ecf93583f057fecaa3cfe4d9e6d4a8053296a82897cc798388a2f79',
                    },
                    {
                        type: ItemType.Link,
                        label: 'UI稿',
                        link: 'https://www.figma.com/design/1qxYUPnHUw4X2LrnQrTvFU/Telegram%E8%BF%90%E8%90%A5%E6%B4%BB%E5%8A%A8%E9%A1%B5%E9%9D%A2?node-id=0-1&node-type=canvas&t=X1LSVI09na30YBwC-0',
                    },
                    {
                        type: ItemType.Link,
                        label: '排期',
                        link: 'https://gtglobal.jp.larksuite.com/wiki/C5fOwYHwBi5rMkkdYlhj1qIkpZg?table=tblUB60pY3TzqkPc&view=vewtgB0OVB',
                    },
                ],
            },
            {
                label: '开发',
                list: [
                    {
                        type: ItemType.Text,
                        label: '分支:',
                        text: 'feature/activities-hackathon',
                    },
                    {
                        type: ItemType.Text,
                        label: '翻译文件',
                        text: 'messages/tg_miniapp_hackathon.json',
                    },
                ],
            },
            {
                label: '环境',
                list: [
                    {
                        type: ItemType.Link,
                        label: '测试',
                        link: 'https://t.me/Gateio_bot/test',
                    },
                    {
                        type: ItemType.Link,
                        label: '预发',
                        link: 'https://t.me/Gateio_bot/pre',
                    },
                    {
                        type: ItemType.Link,
                        label: '生产',
                        link: 'https://t.me/gate_official_bot/miniapp',
                    },
                ],
            },
        ],
    },
]
export default function Page() {
    return (
        <section className={'page-container'}>
            <h1>Projects</h1>
            <Space
                direction="vertical"
                size="middle"
                style={{ display: 'flex', marginTop: '2em' }}
            >
                {projects.map((project, index) => (
                    <ProjectItem project={project} key={project.title} />
                ))}
            </Space>
        </section>
    )
}
