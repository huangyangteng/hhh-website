import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import { Segment, PlayMode } from '@/types'

const { persistAtom } = recoilPersist()
export const fullScreenAtom = atom({
    key: 'fullScreenConfig',
    default: false,
    effects_UNSTABLE: [persistAtom]
})

export const showOverLayAtom = atom({
    key: 'showOverLay',
    default: false,
    effects_UNSTABLE: [persistAtom]
})

export const controlsAtom = atom({
    key: 'controls',
    default: true,
    effects_UNSTABLE: [persistAtom]
})

export const stepAtom = atom({
    key: 'step',
    default: 1,
    effects_UNSTABLE: [persistAtom]
})

export const playModeAtom = atom({
    key: 'playMode',
    default: PlayMode.LoopOne,
    effects_UNSTABLE: [persistAtom]
})
export const speedAtom = atom({
    key: 'speed',
    default: 1,
    effects_UNSTABLE: [persistAtom]
})
