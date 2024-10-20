'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { setCookie } from 'cookies-next'
import { MoonOutlined, SunOutlined } from '@ant-design/icons'
import styles from './styles.module.scss'
const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    const handleSetTheme = (theme: string) => {
        setTheme(theme)
        setCookie('theme', theme)
    }
    return theme !== 'light' ? (
        <span
            className={styles.themeToggle}
            onClick={() => handleSetTheme('light')}
        >
            <MoonOutlined />
        </span>
    ) : (
        <span
            className={styles.themeToggle}
            style={{
                transform: 'rotate(90deg)',
            }}
            onClick={() => handleSetTheme('dark')}
        >
            <SunOutlined />
        </span>
    )
}
export default ThemeSwitch
