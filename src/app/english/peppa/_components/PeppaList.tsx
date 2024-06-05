'use client'
import { usePeppaVideos } from '@/app/english/apis'
import { Pagination } from 'antd'
import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export default function PeppaList() {
    const { isLoading, data } = usePeppaVideos()
    const total = data ? data.pages.length : 1
    const [current, setCurrent] = useState(1)
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if (!data) return
        let cur = data.pages[current - 1]
        router.push(`${pathname}?vid=${cur.bvid}`)
    }, [data, current])
    return (
        <div className="peppa-navbar">
            <Pagination
                current={current}
                onChange={(page) => setCurrent(page)}
                showSizeChanger={false}
                pageSize={1}
                total={total}
                showQuickJumper={true}
            />
        </div>
    )
}
