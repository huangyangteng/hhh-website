import Link from "next/link";
const PREFIX=process.env.NEXT_PUBLIC_API_PREFIX
async function getColumns(){
    const res = await fetch(`${PREFIX}/column`);
    const data = await res.json();
    return data.data;
}
export default async function Page(){
    const list=await getColumns()
    return <div className={'max-w-5xl mx-auto'}>
          <h1 className={'text-9xl text-center m-10'}>专栏</h1>
          <div className={'max-w-xl mx-auto'}>
        {list.map((item:any)=>{
            return <div key={item.cid} className="mb-2 text-lg">
                {/* <span className={"m-5"}>{item.cid}</span> */}
                <Link  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/read/${item.cid}`} className={"m-5"}>{item.title}</Link>
                <span className={"m-5"}>{item.authorname}</span>
                </div>
        })}
        </div>
    </div>
}