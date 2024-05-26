"use client"
import {useEffect} from "react";

export default function Recommend(){
    const list=[
        {text:'纠音-谷歌翻译(新页面打开)',link:'https://translate.google.as/?sl=en&tl=zh-CN&op=translate'},
        {text:'150天，不看字幕听懂英文剧',link:'https://www.bilibili.com/video/BV1n1421q7ZX/?spm_id_from=333.999.0.0&vd_source=6baf3861f0497525dc85a8a0b6bed689'},
        {text:'52天背完小猪佩奇',link: 'https://www.bilibili.com/video/BV1gB4y1B7CC/?spm_id_from=333.999.0.0&vd_source=6baf3861f0497525dc85a8a0b6bed689'}
    ]
    const openTranslate=(e)=>{
        e.preventDefault()
        window.open('https://translate.google.as/?sl=en&tl=zh-CN&op=translate',
            'baidu',
            'top=100,left=100,width=400,height=420');
    }
    return <div className='recommend'>
        <a href='#' onClick={openTranslate}>纠音练习-谷歌翻译(打开小窗口)</a>
        {list.map(item=><a href={item.link} target='_blank' key={item.link}>{item.text}</a>)}
    </div>
}
