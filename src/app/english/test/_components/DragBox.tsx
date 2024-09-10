import styles from '../page.module.css'
import React from 'react'
export function DragBox({ children }) {
    return (
        <div className={styles.dragBox}>
            <div className="handle">🍎</div>
            {children}
        </div>
    )
}

export default React.memo(DragBox)
