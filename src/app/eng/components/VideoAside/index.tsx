import {useState} from 'react'
import VideoList from '../VideoList'
export default function VideoAside({videoName,curVideoIndex,segments,playVideo,progress,progressOnChange}:any) {
    const [showVideoList, setShowVideoList] = useState(true)
    return (
        <div className={'fixed w-40 right-10 top-10'}>
                <h2
                    style={{
                        opacity: showVideoList ? 1 : 0.1
                    }}
                    onDoubleClick={() => setShowVideoList(!showVideoList)}>
                    {videoName}
                </h2>
                {showVideoList && (
                    <>
                        <div>
                            <span onClick={() => playVideo(curVideoIndex)}>
                                part{curVideoIndex + 1}
                            </span>
                            : {Math.floor(progress * 100)}%
                            <input
                                type="range"
                                value={progress}
                                step="0.01"
                                onInput={(e: any) =>
                                    progressOnChange(e.target.value)
                                }
                                max="1"></input>
                        </div>
                        <div>lastRead:</div>
                        <VideoList
                            active={curVideoIndex}
                            segments={segments}
                            handleClick={playVideo}
                        />
                    </>
                )}
            </div>
    )
}