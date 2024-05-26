import axios, {
    AxiosRequestConfig,
    InternalAxiosRequestConfig,
    AxiosResponse,
    AxiosError,
} from 'axios'
import { beforeRequest, beforeResponse, handleError } from './interceptor'

let instance = axios.create({
    timeout: 1000 * 150, //超时时间
    // withCredentials: true, //跨域时携带cookie
    baseURL:'https://leexiao.site/gk-api'
})
// 请求拦截
instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return beforeRequest(config)
    },
    (error) => Promise.reject(error)
)

// 响应拦截
instance.interceptors.response.use(
    // 请求成功
    (res: AxiosResponse<any>) => {
        return beforeResponse(res)
    },
    // 请求失败
    (error: AxiosError<any>) => {
        return handleError(error)
    }
)

export default instance
