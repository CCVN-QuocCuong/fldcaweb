import axios from "./axios"

const API: any = async ({
  url,
  method,
  responseType,
  data,
  cancelToken,
  // baseUrlType,
  params,
  headers
}) => {
  //REQUEST JSON

  let axiosRequestObject = {
    method,
    url,
    // baseURL: getBaseUrl(baseUrlType),
    data,
    headers,
    responseType,
    params,
    ...(cancelToken
      ? {
        cancelToken,
      }
      : ""),
  }

  //REQUEST

  let request = await axios.request(axiosRequestObject)
    .then(handleSuccessRequest)
    .catch(handleErrorRequest)

  return request
}

const handleSuccessRequest = (response) => ({
  status: response.status,
  data: response.data
})

const handleErrorRequest = (err) => {
  if (!err.response) {
    return Promise.reject()
  }
  else if (err.response?.status === 401) {
    localStorage.removeItem('token')
    window.location.reload()
    return Promise.reject()
  }
  else return Promise.reject(err.response)
}


export default API