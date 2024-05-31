"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

import { useEffect, useRef, useState } from "react";
import { Input, InputRef } from "antd";
import { useWord } from "@/app/english/apis";

import WordItemInfo from "@/app/english/components/WordItemInfo";
import {splitSymbolAtom} from "@/app/english/state/english";
import {useAtomValue, useSetAtom} from "jotai";
import {splitPhoneticsSymbol} from "@/app/english/utils/english";


export default function QueryWord() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [searchWord, setSearchWord] = useState(searchParams.get("word") || "");

  const [word, setWord] = useState(searchParams.get("word") || "");
  const { isLoading, data } = useWord(word);
  const setSplitSymbol = useSetAtom(splitSymbolAtom);

  useEffect(()=>{
    if(searchWord==''){
      setSplitSymbol([])
    }
  },[searchWord])

  useEffect(()=>{
    if(data&& typeof data !== 'string'){
      const text=data.soundmark.us.text.replace(/[英美\[\]]/g,'')
        setSplitSymbol(splitPhoneticsSymbol(text))
    }
  },[data])

  const fetchWord = (e) => {
    if (e.key === "Enter") {
      setWord(searchWord);
      router.replace(`${pathname}?word=${e.target.value}`);
    }
  };

  const handleSearch = (e) => {
    setSearchWord(e.target.value);
  };
  const inputRef = useRef<InputRef>(null);
  const onFocus = () => {
    inputRef.current!.focus({
      cursor: 'all',
    });
  };

  return (
    <div className="query-word">
      <Input
        ref={inputRef}
        value={searchWord}
        placeholder="Type the word and press enter"
        onChange={handleSearch}
        onKeyUp={fetchWord}
        onFocus={onFocus}
      />
      {<WordItemInfo info={data} isLoading={isLoading} />}
    </div>
  );
}
