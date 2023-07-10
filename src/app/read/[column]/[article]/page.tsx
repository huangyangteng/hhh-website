import { Suspense } from "react";

const PREFIX=process.env.NEXT_PUBLIC_API_PREFIX
async function getColumn(id:string){
    const res = await fetch(`${PREFIX}/column`);
    const data = await res.json();
    return data;
}
async function getArticle(id:string){
    const res = await fetch(`${PREFIX}/gkarticle/${id}`);
    const data = await res.json();
    if(data && data.code===2000){
        return data.data
    }else{
        return null
    }
}

interface Params{
    column:string;
    article:string;
}

export default async function Page({params}:{params:Params}){
    // const info=await getColumn(params.column);
    const article=await getArticle(params.article);
    if(!article){
        return <div className={'text-xl'}>error</div>
    }
    const {title,content,audio}=article;
    return <div>
        <Suspense fallback={<div>loading...</div>}>
            <div className={'read-box max-w-[960px] mx-auto p-4'}  dangerouslySetInnerHTML={{__html:content}}></div>
        </Suspense>
    </div>
}