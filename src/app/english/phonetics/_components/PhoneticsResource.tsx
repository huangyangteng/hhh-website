'use client'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import PhoneticsVideo from '@/app/english/phonetics/_components/PhoneticsVideo'
import PhoneticsPdf from '@/app/english/phonetics/_components/PhoneticsPdf'
import PhoneticsLearn from '@/app/english/phonetics/_components/PhoneticsLearn'

export default function PhoneticsResource() {
    const items: TabsProps['items'] = [
        {
            key: 'Video',
            label: 'Video',
            children: <PhoneticsVideo />,
        },
        {
            key: 'Pdf',
            label: 'Pdf',
            children: <PhoneticsPdf />,
        },
        {
            key: 'Learn',
            label: 'Learn',
            children: <PhoneticsLearn />,
        },
    ]
    return <Tabs defaultActiveKey="Video" items={items} />
}
