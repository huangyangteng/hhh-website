import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();
import { HistoryItem } from "@/types";

export const historyListState=atom<HistoryItem[]>({
    key:'@historyList',
    default:[],
    effects_UNSTABLE: [persistAtom],
})