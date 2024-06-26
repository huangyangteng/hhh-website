import {
    GEEK_TIME_ARTICLES_LINK,
    LEARNING_VIDEO_LINKS,
    NOTION_LINK,
} from '@/app/home/data'
import Link from 'next/link'

function BlockBox({
    item,
}: {
    item: {
        name: string
        content: string
        link: string
        cover: string
    }
}) {
    return (
        <div className={'block-box-item'}>
            <img src={item.cover} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.content}</p>
            <Link href={item.link} target={'_blank'}>
                {'Visit Website '}💭
            </Link>
        </div>
    )
}
//  .block-bg .section-content .projects-wrapper
//                             .recommend-reading .recommend-reading-list
export default function Projects() {
    let projects = [
        {
            link: NOTION_LINK,
            name: 'Knowledge Architecture',
            content:
                'The knowledge system I built through notion, including all the knowledge I learnt, records of problems I encountered in my work, etc.',
            cover: '/images/banner.png',
        },
        {
            link: '/english',
            name: 'English Learning',
            content:
                'Helps me learn English, including phonetics, speaking, programmer documentation reading, etc.',
            cover: '/images/en-cover.png',
        },
        {
            link: GEEK_TIME_ARTICLES_LINK,
            name: 'Geek Time Articles',
            content:
                'Technical articles from Geek Time, of high quality, collected from the web using a crawler as input to my knowledge.',
            cover: '/images/article-cover.png',
        },
        {
            link: LEARNING_VIDEO_LINKS,
            name: 'Learning Videos',
            content:
                'A collection of learning videos hosted on sites such as Blibli and Acfun on programming techniques, humanities, music, and more!',
            cover: '/images/video-cover.png',
        },
        {
            link: '/day',
            name: 'One-year Schedule',
            content:
                "A timetable to record a year's time to record important points, currently under development",
            cover: '/images/schedule-cover.png',
        },
    ]
    return (
        <div className="projects-wrapper">
            {projects.map((item) => {
                return <BlockBox key={item.name} item={item}></BlockBox>
            })}
        </div>
    )
}
