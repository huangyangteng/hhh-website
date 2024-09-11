'use client'
import styles from './page.module.css'
import DragList from '@/app/english/test/_components/DragList'

export default function Test() {
    return (
        <>
            <div className={styles.wrapper}>
                <DragList></DragList>
            </div>
        </>
    )
}
