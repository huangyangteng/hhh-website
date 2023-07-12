import { atom } from 'recoil'

export const positionAtom = atom({
    key: 'positionAtom',
    default: { x: 0, y: 500 }
})

export const sizeAtom = atom({
    key: 'sizeAtom',
    default: { width: 1440, height: 200 }
})
