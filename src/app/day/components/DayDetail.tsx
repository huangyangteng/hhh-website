'use client'
import { DayInfo } from '../types'
import { useState, useRef, useImperativeHandle, forwardRef } from 'react'
interface DayDetailProp {
    info: DayInfo
    onDoubleClick?: () => void
}
import styles from './styles.module.scss'
const getHoliday = (holiday) => {
    if (holiday) {
        const h = holiday[0].name
        return h.replace('清明節', '').replace('六一', '')
    } else {
        return ''
    }
}
const EditTextarea = ({ lastRemark = '', onBlur }, ref) => {
    const [remark, setRemark] = useState(lastRemark)
    const onChange = (e) => {
        setRemark(e.target.value)
    }
    const onSubmit = () => {
        // 提交请求
        onBlur(remark)
    }
    return (
        <textarea
            ref={ref}
            className={styles.textarea}
            onBlur={() => onSubmit()}
            value={remark}
            onChange={onChange}></textarea>
    )
}
const EditView = forwardRef(EditTextarea)

const RenderView = ({ info, onDoubleClick }: DayDetailProp) => {
    const holiday = getHoliday(info.holiday)
    return (
        <div
            onDoubleClick={onDoubleClick}
            className={styles.detail}
            style={{
                opacity: info.timePassed ? 0.4 : 1
            }}>
            <span
                style={{
                    fontSize: '13px',
                    fontWeight: 700
                }}>
                {info.day}
                <span
                    style={{
                        fontSize: '10px',
                        fontWeight: 400
                    }}>
                    {info.dayOfWeek}
                </span>
            </span>
            <span>{info.lunar}</span>
            <span>{holiday}</span>
            {info.isToday && (
                <span
                    style={{
                        fontSize: '20px'
                    }}>
                    🎯
                </span>
            )}
            <span
                style={{
                    color: '#EEA433'
                }}>
                {info?.remark}
            </span>
        </div>
    )
}
export default function DayDetail({ info }: DayDetailProp) {
    const [isEditing, setIsEditing] = useState(false)
    const [remark, setRemark] = useState(info?.remark)
    const onBlur = (text) => {
        console.log(text)
        setRemark(text)
        setIsEditing(false)
    }
    const onDoubleClick = () => {
        setIsEditing(true)
        setTimeout(() => {
            textRef.current?.focus()
        }, 0)
    }
    const textRef = useRef(null)
    return isEditing ? (
        <EditView lastRemark={info?.remark} onBlur={onBlur} ref={textRef} />
    ) : (
        <RenderView
            info={Object.assign(info, {
                remark: remark
            })}
            onDoubleClick={onDoubleClick}
        />
    )
}
