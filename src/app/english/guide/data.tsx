import { Avatar, List } from 'antd'

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
                        title={
                            <a target={'_blank'} href={item.link}>
                                {item.title}
                            </a>
                        }
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
                        音变是指音标在读音上发生改变，例如连读、弱读、吞音等,音变是听力能听懂的的关键,初学时先大概掌握音变的规则，然后去大量输入听力内容，在真实场景中去体验。
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
                    <div>
                        精听和泛听是扩展听力语料库的重要方法,其中精听为主,精听的素材要重复听N次，直到彻底听懂,并且不断复习。
                    </div>
                    <div>
                        需要每天拿出1个小时练习听力,听力没有捷径，只能慢慢培养。
                    </div>
                    <div>
                        听力的输入是
                        【音频】或者【音频+画面】，不要搞错了输入，否则练习将没有作用。
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
                    desc: '精听材料。这个课程作为听力学习的主线。听力基础阶段可以全程跟这个课程，跟完之后会发现听力水平大大提升。',
                },
                {
                    title: '每日英语听写 Daily English Dictation',
                    link: 'https://www.bilibili.com/video/BV1U7411a7xG',
                    desc: '精听材料支线教程，学有余力的时候听几个。',
                },
                {
                    title: 'Learn English with Bob the Canadian',
                    link: 'https://www.bilibili.com/video/BV1ji421Y7y7',
                    desc: '泛听材料。生活场景英语，用词简单，作为泛听材料使用，有时间听几个。',
                },
                {
                    title: '【沉浸式英语播客】初学者篇',
                    link: 'https://www.bilibili.com/video/BV1tjtoeiEe6',
                    desc: '泛听材料。比较简单,偏商务英语。',
                },
                {
                    title: '美中小学精选课程',
                    link: 'https://www.bilibili.com/video/BV1c7411Z78e/?spm_id_from=333.337.search-card.all.click&vd_source=6baf3861f0497525dc85a8a0b6bed689',
                    desc: '泛听材料。无字幕，但是发音准确，用词简单盲听基本可以完全听懂。',
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
                    title: '老友记影子跟读',
                    link: 'https://www.bilibili.com/video/BV1dUsMezE9T',
                    desc: '老友记影子跟读，听一遍，讲解一遍，跟读一遍',
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

export const Methods = {
    title: '方法论',
    descs: [
        {
            type: DescType.Jsx,
            content: (
                <>
                    <div>条条大道通罗马，找到适合自己的方法即可。</div>
                    <div>
                        什么是适合自己的方法?能让你持续坚持下去的方法就是适合自己的方法。
                    </div>
                </>
            ),
        },

        {
            type: DescType.List,
            content: [
                {
                    title: '《找对英语学习方法的第一本书》',
                    link: 'https://book.douban.com/subject/11522125/',
                    desc: '该书最大的作用是让你明白一些学习英语的误区，初看时可以颠覆认知。',
                },
                {
                    title: '程序员英语学习指南',
                    link: 'https://a-programmers-guide-to-english.harryyu.me/',
                    desc: '专为程序员编写的英语学习指南',
                },
                {
                    title: '6个月即能学会英语-堪称最快速的英语学习法',
                    link: 'https://www.bilibili.com/video/BV1LK4y147Ho',
                    desc: '提供了一些英语学习的技巧',
                },
                {
                    title: '汉英对比与英语学习',
                    link: 'https://book.douban.com/subject/26828212/',
                    desc: '通过对比来学习英语',
                },
                {
                    title: '学习观-YJango',
                    link: 'https://www.zhihu.com/column/c_1247256938867068928',
                    desc: '学习观',
                },
            ],
        },
    ],
}
