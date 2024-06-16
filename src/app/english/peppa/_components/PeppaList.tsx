'use client'
import { usePeppaVideos } from '../../_apis'
import { Pagination, Skeleton } from 'antd'
import { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function PeppaList() {
    const { isLoading, data } = usePeppaVideos()
    const search = useSearchParams()
    const total = data ? data.pages.length : 1
    const [current, setCurrent] = useState(
        search.get('page') ? parseInt(search.get('page')) : 1,
    )
    const router = useRouter()
    const pathname = usePathname()
    useEffect(() => {
        if (!data) return
        let cur = data.pages[current - 1]
        if (!cur) return
        router.push(
            `${pathname}?vid=${cur.bvid}&page=${current}&edit=${search.get('edit') ? search.get('edit') : ''}`,
        )
    }, [data, current])
    return (
        <div className="peppa-navbar">
            <Skeleton loading={isLoading} active paragraph={false}>
                <Pagination
                    current={current}
                    onChange={(page) => setCurrent(page)}
                    showSizeChanger={false}
                    pageSize={1}
                    total={total}
                    showQuickJumper={true}
                />
            </Skeleton>
        </div>
    )
}
