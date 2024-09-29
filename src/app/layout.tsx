import './theme.css'
import './globals.css'
import { ReactNode } from 'react'
export const metadata = {
    title: 'hhh-website',
    description: 'blog',
}

import { Providers } from '@/lib/providers/Providers'
import { cookies } from 'next/headers'

export default function RootLayout({ children }: { children: ReactNode }) {
    const cookieStore = cookies()
    const defaultTheme = cookieStore.get('theme')?.value || 'dark'
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body suppressHydrationWarning={true}>
                <Providers defaultTheme={defaultTheme}>{children}</Providers>
            </body>
        </html>
    )
}
