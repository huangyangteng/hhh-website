'use client'
import { AutoComplete, AutoCompleteProps } from 'antd'
import { useState } from 'react'
import styles from './styles.module.scss'
import { useRouter } from 'next/navigation'
import {
    CloseSquareFilled,
    FileTextOutlined,
    FunctionOutlined,
    LinkOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons'
import { openPage } from '@/utils'

enum SuggestOptionType {
    Link,
    Fn,
    Video,
    Column,
}
interface SuggestOptionItem {
    type: SuggestOptionType
    value: string
    onSelect: (value: string) => void
}
const IconMap = {
    [SuggestOptionType.Link]: <LinkOutlined />,
    [SuggestOptionType.Video]: <VideoCameraOutlined />,
    [SuggestOptionType.Fn]: <FunctionOutlined />,
    [SuggestOptionType.Column]: <FileTextOutlined />,
}
function OptionItem({ type, children }) {
    return (
        <div className={styles.optionItem}>
            {IconMap[type]}
            <span>{children}</span>
        </div>
    )
}

export default function SearchEverything({ sx = {} }) {
    const pageOptionList = [
        {
            type: SuggestOptionType.Link,
            value: 'ai',
            onSelect: () => {
                openPage('/ai')
            },
        },
        {
            type: SuggestOptionType.Link,
            value: 'day',
            onSelect: () => {
                openPage('/day')
            },
        },
        {
            type: SuggestOptionType.Link,
            value: 'english guide',
            onSelect: () => {
                openPage('/english/guide')
            },
        },
        {
            type: SuggestOptionType.Link,
            value: 'etf',
            onSelect: () => {
                openPage('https://leexiao.site/g/etf')
            },
        },
        {
            type: SuggestOptionType.Link,
            value: 'projects',
            onSelect: () => {
                openPage('https://leexiao.site/projects')
            },
        },
        {
            type: SuggestOptionType.Link,
            value: 'work',
            onSelect: () => {
                openPage('https://leexiao.site/english')
            },
        },
    ]

    const map = new Map(
        pageOptionList.map((item) => [item.value, item.onSelect]),
    )

    const options = pageOptionList.map((item) => {
        return {
            ...item,
            label: <OptionItem type={item.type}>{item.value}</OptionItem>,
        }
    })

    const onSelect = (data: string) => {
        let fn = map.get(data)
        typeof fn === 'function' && fn()
    }
    const handleFilter = (inputValue, option) => {
        return (
            option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        )
    }
    return (
        <div className={styles.wrapper} style={sx}>
            <AutoComplete
                options={options}
                filterOption={(inputValue, option) =>
                    handleFilter(inputValue, option)
                }
                style={{ width: 200 }}
                onSelect={onSelect}
                allowClear={{ clearIcon: <CloseSquareFilled /> }}
                placeholder="Search Everything..."
            />
        </div>
    )
}
