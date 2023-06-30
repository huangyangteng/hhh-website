"use client"
export default function Test(){
    const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log('on change file')
        if(!e.target.files)return
    }        
    return <>
        <input type="file" onChange={onChange} />
    </>
}