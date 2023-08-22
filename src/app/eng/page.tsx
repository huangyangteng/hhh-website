'use client'
import { DragEvent, useEffect, useMemo, useRef, useState } from 'react'
import styles from './page.module.scss'
import { Segment, PlayMode } from '@/types'
import { useRecoilState } from 'recoil'
import { historyListState } from '@/store/history'
import VideoOverlay from './components/VideoOverlay'
import { count } from 'console'
import DropBox from './components/DropBox'
import VideoAside from './components/VideoAside'
import VideoConfig from './components/VideoConfig'
import VideoPin from './components/VideoPin'
import {
    fullScreenAtom,
    showOverLayAtom,
    controlsAtom,
    stepAtom,
    speedAtom,
    playModeAtom
} from './state/config'
export default function Home() {
    const videoDom = useRef<HTMLVideoElement>(null)

    const [videoSrc, setVideoSrc] = useState('')
    const [videoName, setVideoName] = useState('')
    const [segments, setSegments] = useState<Segment[]>([])
    const [curVideoIndex, setCurVideoIndex] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    const [historyList, setHistoryList] = useRecoilState(historyListState)

    const curVideo = useMemo(() => {
        return segments[curVideoIndex]
    }, [curVideoIndex, segments])

    const progress = useMemo(() => {
        if (!curVideo) return 0
        return (currentTime - curVideo.start) / (curVideo.end - curVideo.start)
    }, [currentTime, curVideo])

    const progressOnChange = (percent: number) => {
        if (!curVideo) return
        const time = curVideo.start + (curVideo.end - curVideo.start) * percent
        setCurrentTime(time)
        videoDom.current!.currentTime = time
    }

    const seekVideo = (isLeft = true) => {
        if (isLeft) {
            if (videoDom.current!.currentTime > curVideo.start) {
                videoDom.current!.currentTime -= step
            }
        } else {
            if (videoDom.current!.currentTime < curVideo.end) {
                videoDom.current!.currentTime += step
            }
        }
    }
    const seedCurrentTime=(time:number)=>{
        if (videoDom.current) {
            videoDom.current.currentTime = time
        }
    }
    

    const onDrop = (e: DragEvent) => {
        e.preventDefault()
        const videoFile = e.dataTransfer.files[0]
        //通过file生成url
        setVideoSrc(URL.createObjectURL(videoFile))
        setVideoName(videoFile.name)
    }
   
    const onLoad = () => {
        const duration = videoDom.current!.duration
        const shortVideoLength = 60 * 30
        if (duration < shortVideoLength) {
            // 平均分为四段
            let segmentDuration = duration / 4 // 每段的持续时间

            let arr: Segment[] = []
            for (let i = 0; i < 4; i++) {
                let start = i * segmentDuration
                let end = start + segmentDuration
                arr.push({ start, end })
            }
            setSegments(arr)
        } else {
            let segmentDuration = 5 * 60 // 每段的持续时间
            let arr = []
            for (let start = 0; start < duration; start += segmentDuration) {
                let end = Math.min(start + segmentDuration, duration)
                arr.push({ start, end })
            }
            setSegments(arr)
        }
    }

    const playVideo = (index: number) => {
        const { start } = segments[index]
        setCurVideoIndex(index)
        videoDom.current!.currentTime = start
        videoDom.current!.play()
    }

    const onTimeUpdate = () => {
        if (!videoDom.current) return
        if (!curVideo) {
            setCurVideoIndex(0)
            return
        }
        setCurrentTime(videoDom.current.currentTime)
        setHistoryList([
            ...historyList.filter((item) => item.name !== videoName),
            { name: videoName, time: new Date().toLocaleString(), currentTime }
        ])
        if (videoDom.current!.currentTime >= curVideo.end) {
            if (playMode === PlayMode.Normal) {
                videoDom.current!.pause()
            } else if (playMode === PlayMode.LoopOne) {
                videoDom.current!.currentTime = curVideo.start
            } else if (playMode === PlayMode.Sequence) {
                let nextIndex = curVideoIndex + 1
                if (nextIndex >= segments.length) {
                    videoDom.current!.pause()
                } else {
                    setCurVideoIndex(nextIndex)
                }
            }
        }
    }

    const clickVideo = (e: any) => {
        if (controls) return
        //点击左半区域，快退，点击右半区域，快进
        if (e.clientX < e.target.clientWidth / 2) {
            seekVideo(true)
        } else {
            seekVideo(false)
        }
    }
    const onContextMenu = (e: any) => {
        e.preventDefault()
        seekVideo(true)
    }

    const onUploadSuccess = (file: File) => {
        setVideoSrc(URL.createObjectURL(file))
        setVideoName(file.name)
    }

    const [fullScreen] = useRecoilState(fullScreenAtom)
    const [showOverlay,setShowOverlay] = useRecoilState(showOverLayAtom)
    const [controls] = useRecoilState(controlsAtom)
    const [playMode] = useRecoilState(playModeAtom)
    const [step] = useRecoilState(stepAtom)
    const [speed] = useRecoilState(speedAtom)
    useEffect(() => {
        if (videoDom.current) {
            videoDom.current.playbackRate = speed
        }
    }, [speed])

    // 绑定快捷键
    useEffect(() => {
        const onKeyup = (e: KeyboardEvent) => {
            if(e.key==='a'){
                e.preventDefault()
                setShowOverlay(!showOverlay)
            }
            if( e.key==='ArrowUp'){
                e.preventDefault()
                let nextIndex = curVideoIndex - 1
                if (nextIndex < 0) {
                    nextIndex=segments.length-1
                }
                playVideo(nextIndex)
            }
            if( e.key==='ArrowDown'){
                e.preventDefault()
                let nextIndex = curVideoIndex + 1
                if (nextIndex >= segments.length) {
                    nextIndex=0
                }
                playVideo(nextIndex)

            }
            if (e.key === 'ArrowLeft') seekVideo(true)
            if (e.key === 'ArrowRight') seekVideo(false)
            //监听空格键，控制视频播放暂停
            if (e.key === ' ') {
                console.log('click space')
                if (videoDom.current!.paused) {
                    videoDom.current!.play()
                } else {
                    videoDom.current!.pause()
                }
            }
        }

        window.addEventListener('keyup', onKeyup)
        return () => window.removeEventListener('keyup', onKeyup)
    }, [curVideoIndex, segments, step,showOverlay])

    return (
        <main
            className={styles.main}
            onDrop={onDrop}
            onDragOver={(e) => e.preventDefault()}>
            {videoSrc ? (
                <>  
                <section className={styles.videoWrapper}>
                    <div className={'flex-1 mr-4'}>
                        <video
                            ref={videoDom}
                            src={videoSrc}
                            className={fullScreen ? styles.fullVideo : ''}
                            playsInline
                            onLoadedMetadata={onLoad}
                            onClick={clickVideo}
                            onContextMenu={onContextMenu}
                            onTouchStart={clickVideo}
                            controls={controls}
                            onTimeUpdate={onTimeUpdate}></video>
                    </div>
                    <VideoPin videoDom={videoDom}   videoKey={videoName+'__'+curVideoIndex} goToPinTime={seedCurrentTime}></VideoPin>
                    <VideoAside
                        videoName={videoName}
                        curVideoIndex={curVideoIndex}
                        segments={segments}
                        progress={progress}
                        progressOnChange={progressOnChange}
                        playVideo={playVideo}></VideoAside>
                    <VideoConfig videoDom={videoDom} curVideo={curVideo} />
                    {/* overlay */}
                  
                </section>
                {showOverlay && <VideoOverlay />}
                </>
            ) : (
                <DropBox uploadSuccess={onUploadSuccess}></DropBox>
            )}
        </main>
    )
}
