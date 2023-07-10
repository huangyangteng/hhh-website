import Link from "next/link";
const PREFIX=process.env.NEXT_PUBLIC_API_PREFIX

async function getColumn(id:string){
    const res = await fetch(`${PREFIX}/column/${id}`);
    const data = await res.json();
    return data.data;
}
export default async function({params}:{params:any}){
    const info=await getColumn(params.column);
    console.log(JSON.parse(info.articles)[0])
    return <div>
        <h1 className={'text-9xl text-center m-10'}>{info.title}</h1>
        <h4 className={'text-2xl text-center m-8'}>{info.authorname}</h4>
        <div className={'max-w-xl mx-auto'}>
        {
          
          JSON.parse(info.articles).map((article:any)=>{
                return <div className="mb-2 text-lg" data-id={article.id}>
                    {/* <span className={"m-5"}>{article.id}</span> */}
                    <Link href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/read/${params.column}/${article.id}`} className={"m-5"}>{article.article_title}</Link>
                </div>
            })
        }
        </div>
        </div>
}