import { useState, useEffect } from 'react'

export const usePageVisibility = () => {
    const [isPageVisible, setIsPageVisible] = useState(
        document.visibilityState === 'visible',
    )

    const handleVisibilityChange = () => {
        setIsPageVisible(document.visibilityState === 'visible')
    }

    useEffect(() => {
        document.addEventListener('visibilitychange', handleVisibilityChange)
        return () => {
            document.removeEventListener(
                'visibilitychange',
                handleVisibilityChange,
            )
        }
    }, [])

    return isPageVisible
}
