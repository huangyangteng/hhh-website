"use client";
import { useAtomValue } from "jotai";
import { globalVolumeAtom, selectedSymbol } from "@/app/english/state/english";
import { words } from "@/app/english/data/word";
import { useEffect, useState } from "react";
import { useWord, WordInfo } from "@/app/english/apis";
import { Skeleton } from "antd";

export function WordItem({
  info,
  style = {},
  isLoading = false,
}: {
  info: WordInfo | string | null;
  style?: Record<string, any>;
  isLoading: boolean;
}) {
  const globalVolume = useAtomValue(globalVolumeAtom);

  const playSound = (src) => {
    let audio = new Audio(src);
    audio.volume = globalVolume;
    audio.load();
    audio.play();
  };
  if (isLoading)
    return (
      <div style={style}>
        <Skeleton active={true} title={false} />
      </div>
    );
  if (!info) return null;
  if (typeof info === "string") return <p>{info}</p>;
  const { meaning, soundmark: soundMark } = info;
  return (
    <div style={style}>
      <div className="word-content">
        <div>{meaning.filter((item) => Boolean(item.trim())).join(" | ")}</div>
        {soundMark.uk && (
          <div className="word-sound-item">
            <b>{soundMark.uk.text}</b>
            <span onClick={() => playSound(soundMark.uk.sound)}>👨🏼</span>
            <span onClick={() => playSound(soundMark.uk.fsound)}>👩🏻‍🦳</span>
          </div>
        )}
        {soundMark.us && (
          <div className="word-sound-item">
            <b>{soundMark.us.text}</b>
            <span onClick={() => playSound(soundMark.us.sound)}>👨🏼</span>
            <span onClick={() => playSound(soundMark.us.fsound)}>👩🏻‍🦳</span>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * 获取单词含义的接口封装成hooks  useWord(word)
 * onClick index,show word   map.set(index,obj)
 */
export default function WordList() {
  const select = useAtomValue(selectedSymbol);
  if (!select) return null;
  return <WordListContent select={select} />;
}

function WordListContent({ select }) {
  let [map, setMapState] = useState<Map<number, WordInfo>>(new Map());
  const list = words.filter((item) => item.s.indexOf(select.text) >= 0);
  useEffect(()=>{
    if(select){
      setMapState(new Map())
    }
  },[select])
  const [translateIndex, setIndex] = useState(-1);
  const word = translateIndex == -1 ? "" : list[translateIndex].w;
  const { data, isLoading } = useWord(word);
  useEffect(() => {
    setMapState(new Map(map.set(translateIndex, data)));
  }, [data, translateIndex]);

  const translateWord = (index) => {
    setIndex(index);
  };
  return (
    <div className="word-list">
      {list.map((item, index) => (
        <>
          <div className={"word-item"} key={item.w}>
            <span>{item.w}</span>
            <span>{item.s}</span>
            {isLoading && index === translateIndex ? (
              "🤯"
            ) : (
              <b onClick={() => translateWord(index)}>💭</b>
            )}
          </div>
          {map.has(index) ? (
            <WordItem
              isLoading={isLoading && index === translateIndex}
              style={{
                paddingLeft: "1em",
              }}
              info={map.get(index)}
            />
          ) : (
            ""
          )}
        </>
      ))}
    </div>
  );
}
