'use client'
import { Layout } from 'antd'
import { useState } from 'react'
import DragBox from './DragBox'
const { Header, Footer, Sider, Content } = Layout
export default function CssText() {
    const [textStyle, setTextStyle] = useState({
        x: 200,
        y: 200,
        w: 400,
        h: 100,
        fontSize: 24,
        content: '双击编辑文字',
        color: '#000',
        textAlign: 'center'
    })
    return (
        <Layout
            style={{
                height: '600px'
            }}>
            <Sider>111</Sider>
            <Content
                style={{
                    position: 'relative'
                }}>
                <DragBox info={textStyle} />
            </Content>
        </Layout>
    )
}
