import styles from './page.module.css'
import ColumnLeft from '@/app/english/test/_components/ColumnLeft'
import ColumnRight from '@/app/english/test/_components/ColumnRight'
export default function Test() {
    return (
        <div className={styles.wrapper}>
            <ColumnLeft></ColumnLeft>
            <ColumnRight></ColumnRight>
        </div>
    )
}
