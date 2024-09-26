'use client'

import React from 'react'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'
import type Entity from '@ant-design/cssinjs/es/Cache'
import { useServerInsertedHTML } from 'next/navigation'
import { ConfigProvider, theme } from 'antd'
import { useTheme } from 'next-themes'
const darkComponents = {
    Progress: {
        circleTextColor: '#333',
    },
}
const StyledComponentsRegistry = ({ children }: React.PropsWithChildren) => {
    const isLight = useTheme().theme === 'light'
    const cache = React.useMemo<Entity>(() => createCache(), [])
    const isServerInserted = React.useRef<boolean>(false)
    useServerInsertedHTML(() => {
        // 避免 css 重复插入
        if (isServerInserted.current) {
            return
        }
        isServerInserted.current = true
        return (
            <style
                id="antd"
                dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
            />
        )
    })
    return (
        <ConfigProvider
            theme={{
                algorithm: isLight
                    ? theme.defaultAlgorithm
                    : theme.darkAlgorithm,
                components: isLight ? {} : darkComponents,
            }}
        >
            <StyleProvider cache={cache}>{children}</StyleProvider>
        </ConfigProvider>
    )
}

export default StyledComponentsRegistry
