import {atom, useRecoilState} from 'recoil'
import {recoilPersist} from 'recoil-persist'

const {persistAtom} = recoilPersist()
export const remindersState = atom({
    key: 'reminderList',
    default: [],
    effects_UNSTABLE: [persistAtom]
})


export const useReminders = () => {
    const [list, setList] = useRecoilState(remindersState)
    const map = list.reduce((accumulator, obj) => {
        return accumulator.set(obj.key, obj.value);
    }, new Map());
    const setRemind = (value) => {
        setList([...list, value])
    }
    const getRemind = (key) => {
        return map[key]
    }
    return {getRemind, setRemind}
}