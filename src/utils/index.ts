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

export function copyToBoard(text: string) {
    if (navigator.clipboard) {
        // clipboard api 复制
        navigator.clipboard.writeText(text)
    } else {
        let textarea = document.createElement('textarea')
        document.body.appendChild(textarea)
        // 隐藏此输入框
        textarea.style.position = 'fixed'
        textarea.style.clip = 'rect(0 0 0 0)'
        textarea.style.top = '10px'
        // 赋值
        textarea.value = text
        // 选中
        textarea.select()
        // 复制
        document.execCommand('copy', true)
        // 移除输入框
        document.body.removeChild(textarea)
    }
}
