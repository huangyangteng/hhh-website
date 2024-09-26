import './theme.css'
import './globals.css'
import { ReactNode } from 'react'
export const metadata = {
    title: 'hhh-website',
    description: 'blog',
}

import { Providers } from '@/lib/providers/Providers'

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body suppressHydrationWarning={true}>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
