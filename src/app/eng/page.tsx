'use client'
import { DragEvent, useEffect, useMemo, useRef, useState } from 'react'
import styles from './page.module.scss'
import { Segment, PlayMode } from '@/types'
import VideoList from './components/VideoList'
import { useRecoilState } from 'recoil'
import { historyListState } from '@/store/history'
import VideoOverlay from './components/VideoOverlay'
import { count } from 'console'
export default function Home() {
    const videoDom = useRef<HTMLVideoElement>(null)

    const [videoSrc, setVideoSrc] = useState('')
    const [videoName, setVideoName] = useState('')
    const [segments, setSegments] = useState<Segment[]>([])
    const [curVideoIndex, setCurVideoIndex] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const fileInputRef = useRef<HTMLInputElement>(null)

    // config
    const [controls, setControls] = useState(true)

    const [showOverlay, setShowOverlay] = useState(false)
    const [step, setStep] = useState(1)
    const [playMode, setPlayMode] = useState<PlayMode>(PlayMode.LoopOne)
    const [countdown, setCountdown] = useState(30 * 60)
    const [historyList, setHistoryList] = useRecoilState(historyListState)
    const countdownRef = useRef<any>(0)
    const startCountDown = () => {
        clearInterval(countdownRef.current)
        countdownRef.current = setInterval(() => {
            setCountdown((countdown) => countdown - 1)
        }, 1000)
    }
    const resetCountDown = () => {
        clearInterval(countdownRef.current)
        setCountdown(30 * 60)
    }
    useEffect(() => {
        if (countdown <= 0) {
            videoDom.current?.pause()
            clearInterval(countdownRef.current)
        }
    }, [countdown])

    const [speed, setSpeed] = useState(1)
    useEffect(() => {
        if (videoDom.current) {
            videoDom.current.playbackRate = speed
        }
    }, [speed])

    const curVideo = useMemo(() => {
        return segments[curVideoIndex]
    }, [curVideoIndex, segments])
    const progress = useMemo(() => {
        if (!curVideo) return 0
        return (currentTime - curVideo.start) / (curVideo.end - curVideo.start)
    }, [currentTime, curVideo])

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

    useEffect(() => {
        const onKeyup = (e: KeyboardEvent) => {
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
    }, [curVideoIndex, segments, step])

    const onDrop = (e: DragEvent) => {
        e.preventDefault()
        const videoFile = e.dataTransfer.files[0]
        //通过file生成url
        setVideoSrc(URL.createObjectURL(videoFile))
        setVideoName(videoFile.name)
    }
    const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('on change file')
        if (!e.target.files) return
        const videoFile = e.target.files[0]
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
        if (videoDom.current!.currentTime > curVideo.end) {
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

    const clickUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
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
    return (
        <main
            className={styles.main}
            onDrop={onDrop}
            onDragOver={(e) => e.preventDefault()}>
            {videoSrc ? (
                <section className={styles.videoWrapper}>
                    <div className={'flex-1 mr-4'}>
                        <video
                            ref={videoDom}
                            src={videoSrc}
                            playsInline
                            onLoadedMetadata={onLoad}
                            onClick={clickVideo}
                            onTouchStart={clickVideo}
                            controls={controls}
                            onTimeUpdate={onTimeUpdate}></video>
                    </div> 
                    <div>
                        <div className={'flex items-center p-4 flex-wrap flex-col lg:flex-row '}>
                            <h2 className={'text-2xl mr-4'}>config:</h2>
                            <div className={styles.configItem}>
                                <label htmlFor="controls">controls</label>
                                <input
                                    id="controls"
                                    type="checkbox"
                                    checked={controls}
                                    onChange={(e) =>
                                        setControls(e.target.checked)
                                    }
                                />
                            </div>
                            <div className={styles.configItem}>
                                <label htmlFor="overlay">overlay</label>
                                <input
                                    id="overlay"
                                    type="checkbox"
                                    checked={showOverlay}
                                    onChange={(e) =>
                                        setShowOverlay(e.target.checked)
                                    }
                                />
                            </div>
                            <div className={styles.configItem}>
                                step
                                <input
                                    type="number"
                                    step={0.1}
                                    value={step}
                                    onChange={(e) =>
                                        setStep(Number(e.target.value))
                                    }
                                />
                            </div>
                            <div className={styles.configItem}>
                                speed
                                <input
                                    type="number"
                                    step={0.1}
                                    value={step}
                                    onChange={(e) =>
                                        setSpeed(Number(e.target.value))
                                    }
                                />
                            </div>
                            <div className={styles.configItem}>
                                play mode
                                <select
                                    value={playMode}
                                    onChange={(e) =>
                                        setPlayMode(Number(e.target.value))
                                    }>
                                    <option value={PlayMode.Normal}>
                                        Normal
                                    </option>
                                    <option value={PlayMode.LoopOne}>
                                        LoopOne
                                    </option>
                                    <option value={PlayMode.Sequence}>
                                        Sequence
                                    </option>
                                </select>
                            </div>
                            <div className={styles.configItem}>
                                <input
                                    value={countdown}
                                    onChange={(e) =>
                                        setCountdown(Number(e.target.value))
                                    }></input>
                                <button onClick={startCountDown}>start</button>
                                <button onClick={resetCountDown}>reset</button>
                            </div>
                        </div>
                        <div className={'fixed w-40 right-10 top-10'}>
                        <h2>{videoName}</h2>
                        <div>
                            <span onClick={() => playVideo(curVideoIndex)}>
                                part{curVideoIndex + 1}
                            </span>
                            : {Math.floor(progress * 100)}%
                            <input
                                type="range"
                                value={progress}
                                max="1"></input>
                        </div>
                        <div>lastRead:</div>
                        <VideoList
                            active={curVideoIndex}
                            segments={segments}
                            handleClick={playVideo}
                        />
                        </div>
                     
                    </div>
                    {/* overlay */}
                    {showOverlay && <VideoOverlay />}
                </section>
            ) : (
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
            )}
        </main>
    )
}
