import {
    AxiosRequestConfig,
    InternalAxiosRequestConfig,
    AxiosResponse,
    AxiosError,
} from 'axios'
/**
 * 请求拦截
 * @param {*} config  {_data,headers,method,url}
 * @returns
 */
export function beforeRequest(config: InternalAxiosRequestConfig) {
    // 添加自定义头
    // config.headers.xxx = 'xxx'

    // 转换数据类型
    // const isFormData = config._data instanceof FormData
    // if (!isFormData && config._data) {
    //     config._data = qs(config._data)
    // }

    // 处理特殊请求

    return config
}
/**
 * 响应拦截
 */
export function beforeResponse(axiosRes: AxiosResponse<any>) {
    let res = axiosRes.data //{code:'',_data:''}
    // 如果是流，直接返回
    if (res instanceof Blob) {
        if (res.type === 'application/json') {
            // 报错
            res.text().then((text) => {
                const json = JSON.parse(text)
            })
            return false
        } else {
            //请求成功，返回数据
            return res
        }
    }
    if (res.code) {
        if (res.code == 200) {
            return res.data
        } else {
            //出错
            // 弹出报错信息
            return res

            // return { _data: res._data, success: false }
        }
    } else {
        return res
    }
}

/**
 * 处理错误
 * @param {*} error:AxiosError {code:"ERR_BAD_RESPONSE",config:{url,_data,headers,method},message:'',name:'',request:
XMLHttpRequest,response:{}}
 * error.response._data 是后端返回的数据
 */
export function handleError(error: AxiosError<any>) {
    const isSilent = error.config!.url!.includes('silent')
    const { url, data } = error.config as AxiosRequestConfig
    if (!isSilent) {
        console.log(url, data)
        // ElMessage({
        //     message: `服务器端错误:${error.response._data.message}  url:${url},_data:${_data}`,
        //     type: 'error',
        // })
    }
}
