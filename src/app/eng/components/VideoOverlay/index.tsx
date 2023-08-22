'use client'
import { Rnd } from 'react-rnd'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { useRecoilState } from 'recoil'
import { sizeAtom, positionAtom } from '../../state/rnd'
import { fullScreenAtom } from '../../state/config'
export default function VideoOverlay() {
    const [position, setPosition] = useRecoilState(positionAtom)
    const [size, setSize] = useRecoilState(sizeAtom)
    const [isFullScreen] = useRecoilState(fullScreenAtom)
    const handleDrag = (e: any, d: any) => {
        const { x, y } = d
        setPosition({ x, y })
    }

    const handleResize = (
        e: any,
        direction: any,
        ref: any,
        delta: any,
        position: any
    ) => {
        const { width, height } = ref.style
        setSize({ width, height })
    }
    useEffect(() => {
        const handleWindowResize = () => {
            if (isFullScreen) {
                const y = window.innerHeight - 150
                setPosition({ x: 0, y:y })
                setSize({ width: window.innerWidth, height: 150 })
            }
        }
        window.addEventListener('resize', handleWindowResize)
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])
    return (
        <Rnd
            className={styles.overlayBox}
            position={position}
            size={size}
            default={{
                x: position.x,
                y: position.y,
                width: size.width,
                height: size.height
            }}
            onDrag={handleDrag}
            onResize={handleResize}></Rnd>
    )
}
