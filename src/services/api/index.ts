import axios, { type AxiosRequestConfig } from 'axios'

import type { ServerResponse } from '@/types/api'

const createApi = () => {
  const _api = axios.create({
    withCredentials: true,
  })

  return _api
}

export const axiosInstance = createApi()

const api = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    axiosInstance.get<ServerResponse<T>>(url, config).then((res) => res.data),
  post: <T>(url: string, payload?: object, config?: AxiosRequestConfig) =>
    axiosInstance.post<ServerResponse<T>>(url, payload, config).then((res) => res.data),
  put: <T>(url: string, payload?: object, config?: AxiosRequestConfig) =>
    axiosInstance.put<ServerResponse<T>>(url, payload, config).then((res) => res.data),
  patch: <T>(url: string, payload?: object, config?: AxiosRequestConfig) =>
    axiosInstance.patch<ServerResponse<T>>(url, payload, config).then((res) => res.data),
  delete: <T>(url: string, config?: AxiosRequestConfig) =>
    axiosInstance.delete<ServerResponse<T>>(url, config).then((res) => res.data),
}

export default api
