"use client"

import {useRef} from "react";

export default function  PhoneticsVideo(){
    const videoDom = useRef<HTMLVideoElement>(null)
    return <div className='phonetics-video-wrapper'>
        <video
            className="example-video"
            ref={videoDom}
            controls={false}
            src="https://leexiao.site/file/en.mp4"></video>
    </div>
}
