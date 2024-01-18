import { useMemo } from 'react'
import styles from './box.module.scss'

export default function DragBox({ info = { content: '双击编辑文字' } }) {
    const style = useMemo(() => {
        const { x, y, w, h, fontSize } = info
        return {
            ...info,
            left: x + 'px',
            top: y + 'px',
            width: w + 'px',
            height: h + 'px'
        }
    }, [info])
    return (
        <div className={styles.dragBox} style={style}>
            {info?.content}
        </div>
    )
}
