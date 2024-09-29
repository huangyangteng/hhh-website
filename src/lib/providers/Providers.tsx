'use client'
import { ReactNode } from 'react'
import { RecoilRoot } from 'recoil'
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
        <RecoilRoot>
            <AntProvider defaultTheme={defaultTheme}>
                <ReactQueryProvider>{children}</ReactQueryProvider>
            </AntProvider>
        </RecoilRoot>
    )
}
