import Link from 'next/link'
import Avatar from 'boring-avatars'

function RecommendItem({ item }) {
    return (
        <Link href={item.link} target={'_blank'} className="recommend-item">
            {item.logo ? (
                <img src={item.logo} alt={item.name} />
            ) : (
                <Avatar width={40} name={item.name} variant={'beam'} />
            )}
            <div>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
            </div>
        </Link>
    )
}

const blogList = [
    {
        name: '酷壳-CoolShell',
        description: '享受编程和技术所带来的快乐 – Coding Your Ambition',
        link: 'https://coolshell.cn/',
        logo: 'https://coolshell.cn/coolshell_logo.png',
    },
    {
        name: '当然我在扯淡',
        description: '王垠的blog',
        link: 'https://www.yinwang.org/',
        logo: 'https://www.yinwang.org/images/Yc.jpg',
    },
    {
        name: 'overreacted',
        description:
            '由Redux的创始人之一Dan Abramov 创立，分享了他关于 React 的技巧',
        link: 'https://overreacted.io/',
    },
    {
        name: 'Coding Horror',
        description: 'StackOverflow创始人之一Jeff Atwood创建的博客 ',
        link: 'https://blog.codinghorror.com/',
    },
    {
        name: 'Joel on Software',
        description: '《软件随想录》的作者',
        link: 'https://www.joelonsoftware.com/',
    },
    {
        name: 'Paul Graham Essays',
        description: '《黑客与画家》的作者，文章写的比较好，可以学习写作。',
        link: 'https://www.paulgraham.com/best.html',
    },
]
const enList = [
    {
        name: '程序员英语学习指南',
        description: '专为程序员编写的英语学习指南。',
        link: 'https://a-programmers-guide-to-english.harryyu.me/',
    },
    {
        name: '小猪佩奇学英语',
        description: '跟着小猪佩奇学习英语表达。',
        link: 'https://www.bilibili.com/video/BV1gB4y1B7CC/',
        logo: '/images/buzhang.jpg',
    },
    {
        name: '150天听懂英文剧',
        description: '跟我150天，保证你不看字幕听懂英文剧',
        link: 'https://www.bilibili.com/video/BV1Gx421U7vV/',
        logo: '/images/buzhang.jpg',
    },
    {
        name: '六个月即能学好英语',
        description: '用6个月把英语学到母语水平',
        link: 'https://www.bilibili.com/video/BV1LK4y147Ho/?spm_id_from=333.337.search-card.all.click&vd_source=6baf3861f0497525dc85a8a0b6bed689',
    },
]
const youtubeList = [
    {
        name: 'Coding Tech',
        description: '编程频道，涵盖各种技术',
        link: 'https://www.youtube.com/@CodingTech/videos',
    },
    {
        name: 'Google Developer',
        description:
            'Google 公司的官方频道，其中包括 Google I/O 大会、教程、新闻、最佳实践、技巧分享',
        link: 'https://www.youtube.com/@GoogleDevelopers/videos',
    },
    {
        name: 'The New Boston',
        description: 'Web和AI相关技术，React,Python等',
        link: 'https://www.youtube.com/@thenewboston/videos',
    },
    {
        name: 'Derek Banas',
        description: '有趣的初学者教程',
        link: 'https://www.youtube.com/@derekbanas/videos',
    },
    {
        name: 'Computerphile',
        description: '有趣的技术方面的科普教程、资讯、见闻等，通俗易懂',
        link: 'https://www.youtube.com/@Computerphile/videos',
    },
]
export default function RecommendedReading() {
    const list = [
        { title: 'Personal Technology  Blog', children: blogList },
        {
            title: 'English Learning',
            children: enList,
        },
        {
            title: 'Youtube Technology Channel',
            children: youtubeList,
        },
    ]
    return (
        <section className="recommend-reading">
            <header>
                <i></i>
                <h3>Recommended Learning Resources</h3>
                <i></i>
            </header>
            {list.map((item) => (
                <>
                    <h4 className={'recommend-section-title'}>{item.title}</h4>
                    <div className="recommend-reading-list">
                        {item.children.map((c) => (
                            <RecommendItem key={c.name} item={c} />
                        ))}
                    </div>
                </>
            ))}
        </section>
    )
}
