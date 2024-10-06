import styles from '@/app/english/guide/page.module.scss'
import { Avatar, Card, List } from 'antd'

/**
 * desc中的元素
 *  如果是jsx，直接渲染
 *  如果是数组，渲染timeline
 */
export enum DescType {
    Jsx,
    List,
}

export interface ListItemType {
    title: string
    link: string
    desc: string
}

export function renderList(content: ListItemType[]) {
    return (
        <List
            itemLayout="horizontal"
            dataSource={content}
            renderItem={(item, index) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={
                            <Avatar
                                src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                            />
                        }
                        title={<a href={item.link}>{item.title}</a>}
                        description={item.desc}
                    />
                </List.Item>
            )}
        />
    )
}

export const Phonetics = {
    title: '音标',
    descs: [
        {
            type: DescType.Jsx,
            content: (
                <>
                    <div>音标要刷到熟练为止。</div>
                    <div>
                        音标分为英音和美音，其实二者的差别只是个别音标不同，初学时不必在意，任选一种学习即可。
                    </div>
                    <div>学习主线:</div>
                </>
            ),
        },

        {
            type: DescType.List,
            content: [
                {
                    title: 'The American Accent Course 50 Rules You Must Know',
                    link: 'https://www.bilibili.com/video/BV1wS4y177p8/?p=1&vd_source=6baf3861f0497525dc85a8a0b6bed689',
                    desc: '基础的音标发音教程,美音,需要完整过完一遍，然后练习',
                },
                {
                    title: '纠音',
                    link: 'https://translate.google.as/',
                    desc: '练习音标的过程中需要纠音，推荐使用谷歌翻译纠音，具体方法',
                },
                {
                    title: 'American pronunciation workshop',
                    link: 'https://www.bilibili.com/video/BV1WW411A73Z/',
                    desc: '英语纠音(美式)，纠正音标，口型等，在学完所有的音标之后再看这个',
                },
            ],
        },
    ],
}

export const phoneticChange = {
    title: '音变',
    descs: [
        {
            type: DescType.Jsx,
            content: (
                <>
                    <div>
                        音变是指音标在读音上发生改变，例如连读、弱读、吞音等
                    </div>
                    <div>
                        音变是听力能听懂的的基础,先大概掌握音变的规则，然后去大量输入听力内容，在真实场景中去体验。
                    </div>
                </>
            ),
        },
        {
            type: DescType.List,
            content: [
                {
                    title: '全到吐血的英语连读音变大合集',
                    link: 'https://www.bilibili.com/video/BV1cT4y1L7Y9',
                    desc: '音变规则',
                },
            ],
        },
    ],
}

export const Listening = {
    title: '精听为主,泛听为辅',
    descs: [
        {
            type: DescType.Jsx,
            content: (
                <>
                    <div>精听和泛听是扩展听力语料库的重要方法,其中精听为主</div>
                    <div>
                        需要每天拿出1个小时练习听力，大概1年左右听力水平就会大大提升。
                    </div>
                </>
            ),
        },
        {
            type: DescType.List,
            content: [
                {
                    title: '跟我150天，保证你不看字幕听懂英文剧',
                    link: 'https://www.bilibili.com/video/BV1C1421R7TD/',
                    desc: '这个课程作为听力学习的主线。听力基础阶段可以全程跟这个课程，跟完之后会发现听力水平大大提升。',
                },
                {
                    title: '每日英语听写 Daily English Dictation',
                    link: 'https://www.bilibili.com/video/BV1U7411a7xG',
                    desc: '支线教程，学有余力的时候听几个。',
                },
                {
                    title: 'Learn English with Bob the Canadian',
                    link: 'https://www.bilibili.com/video/BV1ji421Y7y7',
                    desc: '生活场景英语，用词简单，作为支线教程使用，有时间可以每天听一个',
                },
            ],
        },
    ],
}

export const Speaking = {
    title: '先听后说,先背再说',
    descs: [
        {
            type: DescType.Jsx,
            content: (
                <>
                    <div>
                        根据语言学习规律，需要先听后说，等输入大量听力内容之后，再开口说话。
                    </div>
                    <div>
                        学好口语，需要大量背诵，背诵一些常用表达作为自己的语料库。
                    </div>
                </>
            ),
        },
        {
            type: DescType.List,
            content: [
                {
                    title: '北外英语口语网课',
                    link: 'https://www.bilibili.com/video/BV1DL4y1u734',
                    desc: '主线教程，30天背诵30篇短文，作为基础的语料库输入，建议先过这个课程，把30篇短文作为最基础的语料库,后续再根据不同的场景去拓宽语料库。',
                },
                {
                    title: '一些口语技巧',
                    link: 'https://www.bilibili.com/video/BV1Y4421Z7rt',
                    desc: '支线教程，了解即可，关键还是背诵',
                },
                {
                    title: '会让你在IELTS写作与口语中更像一个Native speaker',
                    link: 'https://www.bilibili.com/video/BV1cM4y1C78z',
                    desc: '如何地道表达，进阶',
                },
            ],
        },
    ],
}

//语法  单词  阅读  写作
export const Grammar = {
    title: '语法',
    descs: [
        {
            type: DescType.Jsx,
            content: (
                <>
                    <div>语法是构建起句子的基础，是阅读的基础。</div>
                    <div>
                        语法推荐看书学习，不建议看视频。另外语法需要在阅读中多加练习。
                    </div>
                </>
            ),
        },

        {
            type: DescType.List,
            content: [
                {
                    title: '英语魔法师',
                    link: 'https://book.douban.com/subject/1014914/',
                    desc: '非传统的语法书，在理解的基础上学习语法',
                },
            ],
        },
    ],
}

export const Word = {
    title: '单词',
    descs: [
        {
            type: DescType.Jsx,
            content: (
                <>
                    <div>一般情况下不需要单独背单词，要在句子中记忆单词。</div>
                    <div>
                        如果非要单独背单词(大量提升词汇量时)，推荐根据场景来背。
                    </div>
                </>
            ),
        },

        {
            type: DescType.List,
            content: [
                {
                    title: '最好の单词记忆课 | 20000+词汇场景',
                    link: 'https://www.bilibili.com/video/BV1hx4fe5EH8/',
                    desc: '根据场景背诵单词，每天可以背诵一个场景，用于大量输入英语词汇。',
                },
                {
                    title: 'Business Vocabulary in Use',
                    link: 'https://www.bilibili.com/video/BV1EZ4y1E7dw/',
                    desc: '商务英语词汇，有配套教材。',
                },
            ],
        },
    ],
}

export const Reading = {
    title: '阅读',
    descs: [
        {
            type: DescType.Jsx,
            content: (
                <>
                    <div>固定材料，精读，多次复习</div>
                    <div>
                        阅读的基础是语法和单词，其中语法为句子的骨架，要在熟悉骨架的基础上去理解句子。
                    </div>
                    <div>
                        要大量、重复阅读相同的材料。根据自己学习的场景选择材料，考研就选考研真题，程序员就选技术文档。
                    </div>
                </>
            ),
        },

        {
            type: DescType.List,
            content: [
                {
                    title: '于慧真题100篇',
                    link: 'https://book.douban.com/subject/30417750/',
                    desc: '考研用的资料，其中的方法论值得学习，即:基于结构理解句意的基础上反复研读一定量的高品质文章并适量练习',
                },
                {
                    title: '汉英对比与英语学习',
                    link: 'https://book.douban.com/subject/26828212/',
                    desc: '英语和汉语是不同的，例如英语总是先说重点。这种学习方法是借助翻译来对比学习英语。',
                },
                // {
                //     title: 'American pronunciation workshop',
                //     link: 'https://www.bilibili.com/video/BV1WW411A73Z/',
                //     desc: '英语纠音(美式)，纠正音标，口型等，在学完所有的音标之后再看这个',
                // },
            ],
        },
    ],
}

export const Writing = {
    title: '写作',
    descs: [
        {
            type: DescType.Jsx,
            content: (
                <>
                    <div>英语写作要在理解中英文的差异的基础上进行。</div>
                </>
            ),
        },

        {
            type: DescType.List,
            content: [
                {
                    title: '英文写作有诀窍 - 刘美君',
                    link: 'https://www.bilibili.com/video/BV1rb4y1b7Ke',
                    desc: '如何建立英文式的思考习惯？如何避免中式英文？',
                },
            ],
        },
    ],
}
