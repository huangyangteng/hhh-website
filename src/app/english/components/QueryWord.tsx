"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

import { useEffect, useRef, useState } from "react";
import { Input, InputRef } from "antd";
import { useWord } from "@/app/english/apis";

import { WordItem } from "@/app/english/components/WordList";


export default function QueryWord() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [searchWord, setSearchWord] = useState(searchParams.get("word") || "");

  const [word, setWord] = useState(searchParams.get("word") || "");
  const { isLoading, data } = useWord(word);

  const fetchWord = (e) => {
    if (e.key === "Enter") {
      setWord(searchParams.get("word"));
    }
  };

  const handleSearch = (e) => {
    setSearchWord(e.target.value);
    router.replace(`${pathname}?word=${e.target.value}`);
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
      {<WordItem info={data} isLoading={isLoading} />}
    </div>
  );
}
