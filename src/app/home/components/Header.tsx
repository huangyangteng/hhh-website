import Link from 'next/link'
import { GEEK_TIME_ARTICLES_LINK, NOTION_LINK } from '@/app/home/data'

export default function Header() {
    let list = [
        { path: '/english', name: 'English Learning' },
        { path: GEEK_TIME_ARTICLES_LINK, name: 'Programming Learning' },
        { path: NOTION_LINK, name: 'Knowledge Architecture' },
    ]
    return (
        <div className="home-header">
            <div className="home-header-inner">
                <Link href={'/'}>
                    <img src={'/logo.png'} alt="logo" />
                </Link>
                <div className="link-list">
                    {list.map((item) => (
                        <Link href={item.path} key={item.name}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
