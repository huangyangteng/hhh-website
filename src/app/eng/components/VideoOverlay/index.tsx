"use client"
import { Rnd } from 'react-rnd'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
export default function VideoOverlay() {
    const [rect, setRect] = useState({ x: 0, y: 500, width: 1430, height: 120 })
    useEffect(()=>{

    },[])
    return (
        // <div className={styles.videoOverlay}>
            <Rnd
            className={styles.overlayBox}
                default={rect}>
            </Rnd>
        // </div>
    )
}
