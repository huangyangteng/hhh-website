import { phoneticList } from '../_data'

export const splitPhoneticsSymbol = (str: string) => {
    let ans: string[] = []
    for (let i = 0; i < str.length; i++) {
        let double = str[i] + (i + 1 < str.length ? str[i + 1] : '')
        let result = phoneticList.find((item) => item == double)
        if (result) {
            ans.push(double)
            i++
        } else {
            if (phoneticList.find((item) => item == str[i])) {
                ans.push(str[i])
            }
        }
    }
    return ans
}
