import './styles.scss'
export default function Layout({children}:{children:any}){
    return <div>
        <nav className={'h-10'}></nav>
        <section>
            {children}
        </section>
        </div>
}