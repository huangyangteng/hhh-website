'use client'
import { ReactNode } from 'react'
import AntProvider from './AntdRegistry'
import ReactQueryProvider from './ReactQueryRegistry'

export function Providers({
    children,
    defaultTheme,
}: {
    children: ReactNode
    defaultTheme: string
}) {
    return (
        <AntProvider defaultTheme={defaultTheme}>
            <ReactQueryProvider>{children}</ReactQueryProvider>
        </AntProvider>
    )
}
