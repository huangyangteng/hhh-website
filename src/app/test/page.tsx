'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Button } from 'antd'

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    console.log('theme', theme)
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div>
            <Button>hello</Button>
            <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                <option value="system">System</option>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
            </select>
        </div>
    )
}
export default function Page() {
    return <ThemeSwitch />
}
