"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

import axios from "axios";
import { useEffect, useState } from "react";
import { Input } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getWordInfo } from "@/app/english/apis";

axios.defaults.baseURL = "https://leexiao.site/gk-api";

// 预加载音频文件
function preloadAudio(audios) {
  audios.forEach(function (audioSrc) {
    // 为每个音频文件创建一个新的Audio对象
    var audio = new Audio();
    // 设置音频源
    audio.src = audioSrc;

    // 加载音频文件
    audio.load();
  });
}


export default function QueryWord() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [searchWord, setSearchWord] = useState(searchParams.get("word") || "");
  const [errorMsg,setErrorMsg]=useState('')
  const [enabled, setEnabled] = useState(!!searchWord);
  const { isLoading, data } = useQuery({
    queryKey: ["word", searchWord],
    queryFn: async () => {
      setErrorMsg('')
      const data = await getWordInfo(searchWord);
      if (data) {
        const { soundmark, meaning } = data;
        setSoundMark(soundmark);
        setMeaning(meaning);
        preloadAudio([
          soundMark.uk.sound,
          soundMark.uk.fsound,
          soundMark.us.sound,
          soundMark.us.fsound,
        ]);
      } else {
        setErrorMsg('未找到该单词')
      }
      setEnabled(false);
      return data;
    },
    enabled: enabled&&!!searchWord,
  });


  const [soundMark, setSoundMark] = useState({ uk: null, us: null });
  const [meaning, setMeaning] = useState("");
  const fetchWord = (e) => {
    if (e.key === "Enter") {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  };

  const handleSearch = (e) => {
    setSearchWord(e.target.value);
    router.replace(`${pathname}?word=${e.target.value}`);
  };
  const playSound = (src) => {
    let audio = new Audio(src);
    audio.load();
    audio.play();
  };

  return (
    <div className="query-word">
      <Input
        value={searchWord}
        placeholder="Type the word and press enter"
        onChange={handleSearch}
        onKeyUp={fetchWord}
      />
      {isLoading && <div>loading...</div>}
      {!!errorMsg && <div>{errorMsg}</div>}
      {data && (
        <div className="word-content">
          <div>{meaning}</div>
          {soundMark.uk && (
            <div className="word-item">
              {soundMark.uk.text}
              <span onClick={() => playSound(soundMark.uk.sound)}>👨🏼</span>
              <span onClick={() => playSound(soundMark.uk.fsound)}>👩🏻‍🦳</span>
            </div>
          )}
          {soundMark.us && (
            <div className="word-item">
              {soundMark.us.text}
              <span onClick={() => playSound(soundMark.us.sound)}>👨🏼</span>
              <span onClick={() => playSound(soundMark.us.fsound)}>👩🏻‍🦳</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
