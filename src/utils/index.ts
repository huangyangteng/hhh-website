/**
 * 对象转化为url参数
 * @param {*} obj
 */
export function qs(obj: any) {
    return Object.keys(obj)
        .map(function (k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])
        })
        .join('&')
}

export const readClipboard = async () => {
    try {
        return await navigator.clipboard.readText()
    } catch (error) {
        console.error('Failed to read clipboard contents: ', error)
    }
}

export function isObject(obj: any) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}
