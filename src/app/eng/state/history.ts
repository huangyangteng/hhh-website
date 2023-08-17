import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

export const pinHistoryAtom = atom({
    key: 'history',
    default: {},
    effects_UNSTABLE: [persistAtom]
})
