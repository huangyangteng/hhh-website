"use client";
import { DayInfo } from "../types";
import { Input, InputRef } from "antd";
import { useState, useRef, useImperativeHandle, forwardRef } from "react";

const { TextArea } = Input;

interface DayDetailProp {
  info: DayInfo;
  onDoubleClick?: () => void;
}

import styles from "./styles.module.scss";
import { useReminders } from "@/app/day/state";

const getHoliday = (holiday) => {
  if (holiday) {
    const h = holiday[0].name;
    return h.replace("清明節", "").replace("六一", "");
  } else {
    return "";
  }
};
const EditTextarea = ({ lastRemark = "", onBlur }, ref) => {
  const [remark, setRemark] = useState(lastRemark);
  const onChange = (e) => {
    setRemark(e.target.value);
  };
  const onSubmit = () => {
    // 提交请求
    onBlur(remark);
  };
  return (
    <TextArea
      ref={ref}
      rows={4}
      className={styles.textarea}
      onBlur={() => onSubmit()}
      value={remark}
      onChange={onChange}
    ></TextArea>
  );
};
const EditView = forwardRef(EditTextarea);

const RenderView = ({ info, onDoubleClick }: DayDetailProp) => {
  const holiday = getHoliday(info.holiday);
  const { getRemind } = useReminders();

  return (
    <div
      onDoubleClick={onDoubleClick}
      className={styles.detail}
      style={{
        opacity: info.timePassed ? 0.4 : 1,
      }}
    >
      <span
        style={{
          fontSize: "13px",
          fontWeight: 700,
        }}
      >
        {info.day}
        <span
          style={{
            fontSize: "10px",
            fontWeight: 400,
          }}
        >
          {info.dayOfWeek}
        </span>
      </span>
      <span>{info.lunar}</span>
      <span>{holiday}</span>
      {info.isToday && (
        <span
          style={{
            fontSize: "20px",
          }}
        >
          🎯
        </span>
      )}
      <span
        style={{
          color: "#EEA433",
        }}
      >
        {getRemind(info.date) || ""}
      </span>
    </div>
  );
};
export default function DayDetail({ info }: DayDetailProp) {
  const { getRemind, setRemind } = useReminders();
  const [isEditing, setIsEditing] = useState(false);

  const onBlur = (text) => {
    setIsEditing(false);
    setRemind({
      key: info.date,
      value: text,
    });
  };
  const onDoubleClick = () => {
    setIsEditing(true);
    setTimeout(() => {
      textRef.current?.focus();
    }, 0);
  };
  const textRef = useRef(null);
  return isEditing ? (
    <EditView lastRemark={getRemind(info.date)} onBlur={onBlur} ref={textRef} />
  ) : (
    <RenderView
      info={Object.assign(info, {
        remark: getRemind(info.date)||'',
      })}
      onDoubleClick={onDoubleClick}
    />
  );
}
