import './globals.css'
import RecoilRootWrapper from './RecoilRootWrapper.js'
export const metadata = {
    title: 'hhh-website',
    description: 'hhh website'
}
import StyledComponentsRegistry from '../lib/AntdRegistry';
import ReactQueryRegistry from '@/lib/ReactQueryRegistry';

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body suppressHydrationWarning={true}>
                <RecoilRootWrapper>
                    <StyledComponentsRegistry>
                        <ReactQueryRegistry>
                        {children}
                        </ReactQueryRegistry>
                    </StyledComponentsRegistry>
                </RecoilRootWrapper>
            </body>
        </html>
    )
}
