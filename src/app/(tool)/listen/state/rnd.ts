import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()
export const positionAtom = atom({
    key: 'positionAtom',
    default: { x: 0, y: 500 },
    effects_UNSTABLE: [persistAtom]
})

export const sizeAtom = atom({
    key: 'sizeAtom',
    default: { width: 1440, height: 200 },
    effects_UNSTABLE: [persistAtom]
})
