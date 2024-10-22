'use client'
import { Input, Card, Flex, Tooltip } from 'antd'
const { TextArea } = Input
import CopyBtn from '@/app/(tool)/projects/_components/CopyBtn'
import { useMemo, useState } from 'react'
import { encodeStr } from '../base62'
import Link from 'next/link'

const DEV_TG_URL = 'https://t.me/Gateio_bot/dev'
const TEXT_TG_URL = 'https://t.me/Gateio_bot/test'
const PRE_TG_URL = 'https://t.me/Gateio_bot/pre'
const PROD_TG_URL = 'https://t.me/gate_official_bot/miniapp'

const getFullLink = (url: string, startApp: string) => {
    return url + '?startapp=' + startApp
}

export default function GenStartapp() {
    const [value, setValue] = useState(
        JSON.stringify(
            {
                router: 'reward-hub',
            },
            null,
            2,
        ),
    )
    const startApp = useMemo(() => {
        try {
            return encodeStr(JSON.stringify(JSON.parse(value)))
        } catch (e) {
            return 'error:JSON解析失败'
        }
    }, [value])

    const devLink = getFullLink(DEV_TG_URL, startApp)
    const testLink = getFullLink(TEXT_TG_URL, startApp)
    const preLink = getFullLink(PRE_TG_URL, startApp)
    const prodLink = getFullLink(PROD_TG_URL, startApp)
    const list = [
        {
            label: 'TG Dev环境链接 点击跳转',
            value: devLink,
        },
        {
            label: 'TG Test环境链接 点击跳转',
            value: testLink,
        },
        {
            label: 'TG Pre环境链接 点击跳转',
            value: preLink,
        },
        {
            label: 'TG Prod环境链接 点击跳转',
            value: prodLink,
        },
    ]
    return (
        <Card title={'base62编码'}>
            <TextArea
                value={value}
                autoSize
                onChange={(e) => setValue(e.target.value)}
            />
            <Flex gap={'middle'} vertical>
                <Flex gap={'middle'} align={'center'}>
                    startApp: {startApp} <CopyBtn text={startApp} />
                </Flex>
                {list.map((item) => {
                    return (
                        <Flex gap={'sm'} align={'center'} key={item.value}>
                            <Tooltip title={item.value}>
                                <Link target={'_blank'} href={item.value}>
                                    {item.label}
                                </Link>
                            </Tooltip>
                            <CopyBtn text={item.value} />
                        </Flex>
                    )
                })}
            </Flex>
        </Card>
    )
}
