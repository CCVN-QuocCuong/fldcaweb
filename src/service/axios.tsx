import axios from 'axios'

axios.defaults.baseURL = 'https://rlv0w5qdt1.execute-api.us-east-1.amazonaws.com/dev'

axios.interceptors.request.use(function (axios_config: any) {
    axios_config.headers.Authorization = localStorage.getItem('token')
    return axios_config
}, function (error) {
    // Do something with request error
    return Promise.reject(error)
})

export default axios
