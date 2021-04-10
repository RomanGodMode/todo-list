import axios from 'axios'
import { Todo } from '../shared/types/todo'

console.log(process.env)

console.log(process.env.REACT_APP_API_DOMAIN)


const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN + '/',
})

export const todoApi = {
  getTodos(): Promise<Todo[]> {
    return axiosInstance.get('todo').then(res => res.data)
  },
  getTodo(id: number): Promise<Todo> {
    return axiosInstance.get(`todo/${id}`).then(res => res.data)
  },
}