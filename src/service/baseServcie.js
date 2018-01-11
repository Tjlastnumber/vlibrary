// axios 中文使用文档地址：
// https://segmentfault.com/a/1190000008470355
import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000
})

service.interceptors.response.use(
  response => {
    console.info('axios response' + response)
    return response
  },
  error => {
    console.info('axios error' + error)
    return Promise.reject(error)
  }
)

export default service
