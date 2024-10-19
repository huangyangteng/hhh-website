import { Button, Space } from 'antd'
import CopyBtn from '@/app/(tool)/work/_components/CopyBtn'

export default function ProjectOperations() {
    return (
        <Space>
            <Button size={'small'} color="primary" variant="outlined">
                提测单
            </Button>
            <Button size={'small'} color="primary" variant="outlined">
                发布单
            </Button>
            <CopyBtn text={'hello'} />
        </Space>
    )
}
