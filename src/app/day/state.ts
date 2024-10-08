import { atom, useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

interface NoteItem {
    key: string
    value: string
}
// 创建一个 atom 状态 [{key:'2024-05-24',value:'xxx']
const remindersAtom = atomWithStorage<NoteItem[]>('h-days', [])

// 创建一个用于管理提醒的自定义 hook
export const useReminders = () => {
    // 使用 useAtom 来获取状态和更新状态的函数
    const [list, setList] = useAtom(remindersAtom)

    // 将数组转换为 Map，以便通过 key 快速访问
    const map = new Map(list.map((obj) => [obj.key, obj.value]))

    // 设置提醒的函数
    const setRemind = (value: NoteItem) => {
        setList([...list, value])
    }

    // 获取提醒的函数
    const getRemind = (key) => {
        return map.get(key)
    }

    // 返回自定义 hook 的 API
    return { getRemind, setRemind }
}
