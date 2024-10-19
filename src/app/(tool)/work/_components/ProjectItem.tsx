import { ItemType, Project, ProjectInfoType } from '@/app/(tool)/work/type'
import { Card, Flex, Space } from 'antd'
import CopyBtn from '@/app/(tool)/work/_components/CopyBtn'
import ProjectOperations from '@/app/(tool)/work/_components/ProjectOperations'
import styles from '../styles.module.scss'
interface Props {
    project: Project
}
const ItemSection = ({ info }: { info: ProjectInfoType }) => {
    return (
        <div className={styles.projectSection}>
            <h3>{info.label}</h3>
            <ul>
                {info.list.map((item) => (
                    <li key={item.label}>
                        <Space>
                            {item.type === ItemType.Link ? (
                                <a href={item.link}>{item.label}</a>
                            ) : (
                                item.text
                            )}
                            <CopyBtn text={item.link ? item.link : item.text} />
                        </Space>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default function ProjectItem({ project }: Props) {
    const { title, info } = project
    return (
        <div>
            <Card title={<h2>{title}</h2>} extra={<ProjectOperations />}>
                <Flex gap={'middle'} vertical>
                    {info.map((item, index) => (
                        <>
                            <ItemSection key={item.label} info={item} />
                            {/*{index < info.length - 1 && <Divider />}*/}
                        </>
                    ))}
                </Flex>
            </Card>
        </div>
    )
}
