import './globals.css'
import RecoilRootWrapper from './RecoilRootWrapper.js'
export const metadata = {
    title: 'Learning English',
    description: 'Learning English with videos'
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <RecoilRootWrapper>
                {children}
                </RecoilRootWrapper>
            </body>
        </html>
    )
}
