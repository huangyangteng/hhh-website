"use client"
import {list} from "@/app/english/data";

export default function PhoneticSymbol(){
    return <div className="marks">
        <div className="title-1">元音</div>
        <div className="title-1">辅音</div>
        <div className="title-2">长元音</div>
        <div className="title-2">短元音</div>
        <div className="title-2">双元音</div>
        <div className="title-2">清辅音</div>
        <div className="title-2">浊辅音</div>

        {list.map((item, index) => (
            <div
                // onClick={() => playMark(item, index)}
                className={'text text-' + item.text}
                key={item.text}>
                {item.text}
            </div>
        ))}
    </div>
}
