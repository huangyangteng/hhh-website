import './home.css'
import Wave from '@/app/home/components/Wave'
import Header from '@/app/home/components/Header'
import Content from '@/app/home/components/Content'
import Bottom from '@/app/home/components/Bottom'
import Redirect from '@/app/home/components/Redirect'
import SearchEverything from '@/app/home/components/SearchEveryThing'

export default function Home() {
    return (
        <section className="home-wrapper">
            <Header />
            <Content />
            <Wave />
            <Bottom />
            <Redirect />
            <SearchEverything />
        </section>
    )
}
