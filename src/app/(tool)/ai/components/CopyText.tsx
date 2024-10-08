import { useState } from 'react'
import { copyToBoard } from '@/utils'

export function CopyText({ text }) {
    const [isCopy, setIsCopy] = useState(false)
    const copyText = () => {
        copyToBoard(text)
        setIsCopy(true)
        setTimeout(() => {
            setIsCopy(false)
        }, 1000)
    }
    return <span onClick={copyText}>{isCopy ? text + ' ✅' : text}</span>
}
