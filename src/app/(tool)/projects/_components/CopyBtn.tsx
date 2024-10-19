'use client'

import { CheckOutlined, CopyOutlined } from '@ant-design/icons'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Button } from 'antd'
import { useState } from 'react'

export default function CopyBtn({ text }: { text: string }) {
    const [copied, setCopied] = useState(false)
    const handleCopy = () => {
        setCopied(true)
        setTimeout(() => setCopied(false), 1000)
    }

    return (
        <CopyToClipboard text={text} onCopy={handleCopy}>
            <Button
                size={'small'}
                color={'primary'}
                icon={copied ? <CheckOutlined /> : <CopyOutlined />}
            >
                {/*{copied ? 'Copied' : 'Copy'}*/}
            </Button>
        </CopyToClipboard>
    )
}
