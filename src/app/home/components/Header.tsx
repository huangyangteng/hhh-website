import Link from 'next/link'
import { GEEK_TIME_ARTICLES_LINK, NOTION_LINK } from '@/app/home/data'

export default function Header() {
    let list = [
        { path: '/english', name: 'English' },
        { path: GEEK_TIME_ARTICLES_LINK, name: 'Programming' },
        { path: NOTION_LINK, name: 'Blog' },
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
                <Link
                    href={'https://github.com/huangyangteng/hhh-website'}
                    target={'_blank'}
                    className={'link-btn'}
                >
                    <span>GITHUB</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        className="vt-link-icon"
                    >
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path>
                    </svg>
                </Link>
            </div>
        </div>
    )
}
