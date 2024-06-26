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
        {
            link: '/english/phonetics',
            tooltip: '音标',
            icon: <span>👄</span>,
        },
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
    ]
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
                            <Link href={item.link}>{item.icon}</Link>
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
