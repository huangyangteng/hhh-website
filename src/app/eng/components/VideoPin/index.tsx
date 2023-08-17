

import React, { useMemo, useState } from 'react';
import { formatTime } from '../../utils';
interface VideoPinProps {
    videoKey: string;
    videoDom:any;
    goToPinTime:(time:number)=>void;
}
import { useHotkeys } from 'react-hotkeys-hook';
import {pinHistoryAtom} from '../../state/history'
import {useRecoilState} from 'recoil'

export default function VideoPin({videoKey,videoDom,goToPinTime}:VideoPinProps){
  
    // const [pinMap,setPinMap] = useState<any>({})
    const [pinMap,setPinMap] = useRecoilState(pinHistoryAtom)

    const pin=()=>{
        const list = pinMap[videoKey] || []
        const currentTime = videoDom?.current.currentTime
        setPinMap({
            ...pinMap,
            [videoKey]:[...list,currentTime]
        })
    }
    const del=(delIndex:number)=>{
        const list = pinMap[videoKey] || []
        const newList = list.filter((item:number,index:number)=>index!==delIndex)
        setPinMap({
            ...pinMap,
            [videoKey]:newList
        })

    }
    const showPins=useMemo(()=>{
        let list=pinMap[videoKey] || []
        // list先去重，再按升序排序
        return list = [...new Set(list)].sort((a:number,b:number)=>a-b)
         
    },[videoKey,pinMap])

    useHotkeys('p', () => {
        pin()
    });

  
    return (
        <div className={'fixed top-10 flex left-10'}>
            <button className={"mr-4 font-bold whitespace-nowrap "} onClick={pin} >Pin🐔</button>
            <div className={'flex max-w-screen-2xl flex-wrap'}>
                {showPins.map((item:any,index:number)=>{
                    return (
                        <span onClick={()=>goToPinTime(item)} onDoubleClick={()=>del(index)} className={'mr-2 cursor-pointer select-none'} key={index}>{formatTime(item)}</span>
                    )
                })}
            </div>
        </div>
    )
}