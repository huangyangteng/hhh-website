'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Tooltip } from 'antd'
import './layout.css'

function EnSidebar() {
    const [expand, setExpand] = useState(true)
    const list = [
        {
            link: '/',
            tooltip: '回到首页',
            icon: (
                <Image src={'/logo.png'} alt={'home'} width={20} height={20} />
            ),
            line: <span className={'en-sidebar-divide'}></span>,
        },
        {
            link: '/english/',
            tooltip: 'Home',
            icon: <span>🏠</span>,
        },
        // {
        //     link: '/english/phonetics',
        //     tooltip: '音标',
        //     icon: <span>👄</span>,
        // },
        // {
        //     link: '/english/listen',
        //     tooltip: '听力',
        //     icon: <span>👂</span>,
        // },
        {
            link: '/english/peppa?vid=BV113411F7ME',
            tooltip: '小猪佩奇练口语',
            icon: <span>🐽</span>,
        },
        {
            link: 'https://translate.google.as/?sl=en&tl=zh-CN&op=translate',
            tooltip: '谷歌翻译纠音',
            icon: <span>🦜</span>,
            type: 'open',
        },
    ]
    const openNewPage = (e, item) => {
        if (item.type === 'open') {
            e.preventDefault()
            window.open(
                item.link,
                'google',
                'top=100,left=100,width=400,height=420',
            )
        }
    }
    return (
        <div className={`en-sidebar ${expand ? '' : 'fold'}`}>
            <div className="en-sidebar-menus">
                {list.map((item) => (
                    <li key={item.link}>
                        <Tooltip
                            key={item.link}
                            title={item.tooltip}
                            placement={'right'}
                        >
                            <Link
                                onClick={(e) => openNewPage(e, item)}
                                href={item.link}
                            >
                                {item.icon}
                            </Link>
                        </Tooltip>
                        {!!item.line && item.line}
                    </li>
                ))}
            </div>
            <div className="en-sidebar-toggle">
                <div
                    className="en-toggle-icon"
                    onClick={() => setExpand(!expand)}
                >
                    <div className="line1"></div>
                    <div className="line2"></div>
                </div>
            </div>
        </div>
    )
}

export default function EnLayout({ children }) {
    return (
        <>
            <EnSidebar />
            {children}
        </>
    )
}
