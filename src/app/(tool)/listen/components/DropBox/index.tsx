import styles from './styles.module.scss'
import {useRef} from 'react'

export default function DropBox({uploadSuccess}: {uploadSuccess: (file: File) => void}){
    const fileInputRef = useRef<HTMLInputElement>(null)
    const clickUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }
    const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
        const videoFile = e.target.files[0]
        uploadSuccess(videoFile)
       
    }
    return (
        <section className={styles.dragBox}>
        <h1 className={'text-4xl'} onClick={clickUpload}>
            drop here
        </h1>
        <input
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={onUpload}
            type="file"
        />
    </section>
    )
}