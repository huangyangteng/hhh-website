import React, { useState, useEffect, useRef } from 'react'
import { Segment, PlayMode } from '@/types'
import styles from './styles.module.scss'
import { useRecoilState } from 'recoil'
import {
    fullScreenAtom,
    showOverLayAtom,
    controlsAtom,
    stepAtom,
    speedAtom,
    playModeAtom,
} from '../../state/config'
export default function Config({ videoDom, curVideo }: any) {
    // config
    const [showConfig, setShowConfig] = useState(true)
    const [controls, setControls] = useRecoilState(controlsAtom)

    const [fullScreen, setFullScreen] = useRecoilState(fullScreenAtom)

    const [showOverlay, setShowOverlay] = useRecoilState(showOverLayAtom)
    const [step, setStep] = useRecoilState(stepAtom)
    const [playMode, setPlayMode] = useRecoilState<PlayMode>(playModeAtom)
    const [speed, setSpeed] = useRecoilState(speedAtom)
    const [countdown, setCountdown] = useState(30 * 60)
    useEffect(() => {
        if (videoDom.current) {
            videoDom.current.playbackRate = speed
        }
    }, [speed])
    const clickPlayVideo = () => {
        videoDom.current!.play()
    }
    const clickPauseVideo = () => {
        videoDom.current!.pause()
    }
    const handleFullScreen = (flag: boolean) => {
        setFullScreen(flag)
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
    return (
        <div className={fullScreen ? styles.bottomSettings : ''}>
            <div className={styles.videoAside}>
                <h2
                    style={{
                        opacity: showConfig ? 1 : 0.1,
                        userSelect: 'none',
                    }}
                    onDoubleClick={() => {
                        setShowConfig(!showConfig)
                    }}
                    className={'text-2xl mr-4'}
                >
                    config:
                </h2>
                {showConfig && (
                    <>
                        <div className={styles.configItem}>
                            <button className={'mr-2'} onClick={clickPlayVideo}>
                                播放
                            </button>
                            <button
                                className={'mr-2'}
                                onClick={clickPauseVideo}
                            >
                                暂停
                            </button>
                            <button
                                className={'mr-2'}
                                onClick={() => {
                                    seekVideo(true)
                                }}
                            >
                                快退
                            </button>
                            <button
                                className={'mr-2'}
                                onClick={() => {
                                    seekVideo(false)
                                }}
                            >
                                快进
                            </button>
                        </div>
                        <div className={styles.configItem}>
                            <label htmlFor="controls">fullscreen</label>
                            <input
                                id="fullscreen"
                                type="checkbox"
                                checked={fullScreen}
                                onChange={(e) =>
                                    handleFullScreen(e.target.checked)
                                }
                            />
                        </div>
                        <div className={styles.configItem}>
                            <label htmlFor="controls">controls</label>
                            <input
                                id="controls"
                                type="checkbox"
                                checked={controls}
                                onChange={(e) => setControls(e.target.checked)}
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
                                value={speed}
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
                                }
                            >
                                <option value={PlayMode.Normal}>Normal</option>
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
                                }
                            ></input>
                            <button onClick={startCountDown}>start</button>
                            <button onClick={resetCountDown}>reset</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
