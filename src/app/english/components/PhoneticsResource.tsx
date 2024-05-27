"use client"
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import PhoneticsVideo from "@/app/english/components/PhoneticsVideo";
import PhoneticsPdf from "@/app/english/components/PhoneticsPdf";

export default function PhoneticsResource(){
    const items: TabsProps['items'] = [
        {
            key: 'Video',
            label: 'Video',
            children: <PhoneticsVideo/>,
        },
        {
            key: 'Pdf',
            label: 'Pdf',
            children: <PhoneticsPdf/>
        }
    ];
    return <Tabs
        defaultActiveKey="Video"
        items={items}
    />
}
