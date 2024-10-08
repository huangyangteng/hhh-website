import styles from './page.module.scss'
import ListenAndSpeak from '@/app/english/guide/_components/ListenAndSpeak'
import ReadAndWrite from '@/app/english/guide/_components/ReadAndWrite'
import EnMethods from '@/app/english/guide/_components/EnMethods'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'hhh | English Learning Guide',
}

export default function Guide() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                {/*<ThemeSwitch />*/}
                <h1>英语学习指南</h1>
                <section className={styles.section}>
                    <h2>原则</h2>
                    <ul className={styles.ul}>
                        <li>
                            学习英语没有捷径，只有一步一个脚印，慢慢从量变达到质变。
                        </li>
                        <li>
                            使用固定的英语素材(听力、阅读、写作等)，重复刷多遍，直到烂熟于心
                        </li>
                        <li>
                            听说不分家，读写不分家，这两部分其实是相对独立的能力，可以分开学习。
                            <br />
                            对于应试英语，例如四六级、考研等，阅读是关键。对于实际交流，听说更为重要。
                        </li>
                        <li>
                            <span>练习时明确听说读写的输入和输出。</span>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>能力</th>
                                        <th>输入</th>
                                        <th>输出</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>听力</td>
                                        <td>音波</td>
                                        <td>脑海中的画面</td>
                                    </tr>
                                    <tr>
                                        <td>口语</td>
                                        <td>表达的欲望</td>
                                        <td>音波</td>
                                    </tr>
                                    <tr>
                                        <td>阅读</td>
                                        <td>眼睛看到的句子或者单词</td>
                                        <td>脑海中的画面</td>
                                    </tr>
                                    <tr>
                                        <td>写作</td>
                                        <td>表达欲</td>
                                        <td>脑海中的画面</td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                    </ul>
                </section>
                {/*听说*/}
                <ListenAndSpeak />
                {/*读写*/}
                <ReadAndWrite />
                {/*方法论*/}
                <EnMethods />
            </div>
        </div>
    )
}
