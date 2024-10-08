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

export default function SearchEverything() {
    const router = useRouter()
    const pageOptionList = [
        {
            type: SuggestOptionType.Link,
            value: 'ai',
            onSelect: () => {
                router.push('/ai')
            },
        },
        {
            type: SuggestOptionType.Link,
            value: 'day',
            onSelect: () => {
                router.push('/day')
            },
        },
        {
            type: SuggestOptionType.Link,
            value: 'english guide',
            onSelect: () => {
                router.push('/english/guide')
            },
        },
        {
            type: SuggestOptionType.Link,
            value: 'etf',
            onSelect: () => {
                router.push('https://leexiao.site/g/etf')
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
        <div className={styles.wrapper}>
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
