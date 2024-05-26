"use client";

import { useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import { selectedSymbol } from "@/app/english/state/english";
import { getVideoUrl } from "@/app/english/apis";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";

export default function PhoneticsVideo() {
  const videoDom = useRef<HTMLVideoElement>(null);
  const [phonetics, setPhonetics] = useAtom(selectedSymbol);
  const [endTime, setEndTime] = useState(0);
  const { isLoading, data: videoUrl } = useQuery({
    queryKey: ["videoUrl"],
    queryFn: () => getVideoUrl("https://www.bilibili.com/video/BV1sp4y1z74P/"),
  });
  useEffect(() => {
    if (!phonetics) return;
    videoDom.current.currentTime = phonetics.start;
    videoDom.current.play();
    videoDom.current.volume = 0.5;
    setEndTime(phonetics.end);
  }, [phonetics]);
  const onTimeUpdate = () => {
    if (endTime !== 0 && videoDom.current.currentTime >= endTime) {
      videoDom.current.pause();
      setEndTime(null);
      if (phonetics) {
        videoDom.current.currentTime = phonetics.start;
      }
    }
  };
  return (
    <div className="phonetics-video-wrapper">
      {isLoading ? (
        <Spin  ></Spin>
      ) : (
        <video
          className="example-video"
          ref={videoDom}
          controls={false}
          onTimeUpdate={onTimeUpdate}
          src={videoUrl}
        ></video>
      )}
    </div>
  );
}
