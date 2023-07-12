'use client'
import { Rnd } from 'react-rnd'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { useRecoilState } from 'recoil'
import { sizeAtom, positionAtom } from '../../state/rnd'
export default function VideoOverlay() {
    const [position, setPosition] = useRecoilState(positionAtom)
    const [size, setSize] = useRecoilState(sizeAtom)
    const handleDrag = (e:any, d:any) => {
        const { x, y } = d
        setPosition({ x, y })
    }

    const handleResize = (e:any, direction:any, ref:any, delta:any, position:any) => {
        const { width, height } = ref.style
        setSize({ width, height })
    }
    return (
        <Rnd className={styles.overlayBox} default={{
            x: position.x,
            y: position.y,
            width: size.width,
            height: size.height,
          }}
        onDrag={handleDrag}
        onResize={handleResize}>
           
        </Rnd>
    )
}
