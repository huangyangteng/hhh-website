import './globals.css'
import RecoilRootWrapper from './RecoilRootWrapper.js'
export const metadata = {
    title: 'hhh-website',
    description: 'hhh website'
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body suppressHydrationWarning={true}>
                <RecoilRootWrapper>
                {children}
                </RecoilRootWrapper>
            </body>
        </html>
    )
}
