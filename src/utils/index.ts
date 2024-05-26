/**
 * 对象转化为url参数
 * @param {*} obj
 */
export function qs(obj: any) {
    return Object.keys(obj)
        .map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k])
        })
        .join("&")
}
