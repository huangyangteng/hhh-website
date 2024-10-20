import './theme.css'
import './globals.css'
import { ReactNode } from 'react'

import { Providers } from '@/lib/providers/Providers'
import { cookies } from 'next/headers'
export const metadata = {
    title: 'HHH-Website',
    description: 'HHH‘s Blog',
}

export default function RootLayout({ children }: { children: ReactNode }) {
    const cookieStore = cookies()
    const defaultTheme = cookieStore.get('theme')?.value || 'dark'
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body>
                <Providers defaultTheme={defaultTheme}>{children}</Providers>
            </body>
        </html>
    )
}
