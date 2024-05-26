"use client";
import { endMap, list } from "@/app/english/data";
import { useAtom } from "jotai";
import { selectedSymbol } from "@/app/english/state/english";

export default function PhoneticSymbol() {
  const [phonetics, setPhonetics] = useAtom(selectedSymbol);
  const select = (item) => {
    setPhonetics({
      text: item.text,
      start: item.start,
      end: endMap.get(item.text),
    });
  };
  return (
    <div className="marks">
      <div className="title-1">元音</div>
      <div className="title-1">辅音</div>
      <div className="title-2">长元音</div>
      <div className="title-2">短元音</div>
      <div className="title-2">双元音</div>
      <div className="title-2">清辅音</div>
      <div className="title-2">浊辅音</div>

      {list.map((item, index) => (
        <div
          onClick={() => select(item)}
          // className={"text text-" + item.text}
          className={`text text-${item.text} ${phonetics && item.text==phonetics.text?'active':''} `}
          key={item.text}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}
