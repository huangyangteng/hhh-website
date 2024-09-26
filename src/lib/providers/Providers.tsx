'use client'
import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { RecoilRoot } from 'recoil'
import AntProvider from './AntdRegistry'
import ReactQueryProvider from './ReactQueryRegistry'

export function Providers({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider defaultTheme={'dark'}>
            <RecoilRoot>
                <AntProvider>
                    <ReactQueryProvider>{children}</ReactQueryProvider>
                </AntProvider>
            </RecoilRoot>
        </ThemeProvider>
    )
}
