"use client"
import { useAtomValue } from "jotai";
import { selectedSymbol } from "@/app/english/state/english";
import { words } from "@/app/english/data/word";

export default function WordList() {
  const select = useAtomValue(selectedSymbol);
  if (!select) return null;
  const list = words.filter((item) => item.s.indexOf(select.text) >= 0);
  return (
    <div className='word-list'>
      {list.map((item) => (
        <div className={'word-item'} key={item.w}>
          <span>{item.w}</span>
          <span>{item.s}</span>
        </div>
      ))}
    </div>
  );
}
