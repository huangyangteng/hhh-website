"use client";
import { Slider, SliderSingleProps } from "antd";
import { globalVolumeAtom } from "@/app/english/state/english";
import { useAtom } from "jotai";

export default function VolumeControl() {
  const [globalVolume, setGlobalVolume] = useAtom(globalVolumeAtom);
  const formatter: NonNullable<SliderSingleProps["tooltip"]>["formatter"] = (
    value,
  ) => `${Math.floor(value * 100)}`;

  return (
    <div className={"volume-wrapper"}>
      <span>volume</span>
      <Slider
        onChange={setGlobalVolume}
        tooltip={{ formatter }}
        value={globalVolume}
        min={0}
        max={1}
        step={0.01}
      />
    </div>
  );
}
