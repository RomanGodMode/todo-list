import axios from 'axios'
import { PureTodo, Todo } from '../shared/types/todo'

//  console.log(process.env)
//
// console.log(process.env.REACT_APP_API_DOMAIN)


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
  addTodo(title: string): Promise<Todo> {
    return axiosInstance.post(`todo`, { title }).then(res => res.data)
  },
  setTitle(id: number, title: string): Promise<Todo> {
    return axiosInstance.put(`todo/${id}`, { title }).then(res => res.data)
  },
  deleteTodo(id: number): Promise<PureTodo> {
    return axiosInstance.delete(`todo/${id}`).then(res => res.data)
  },
  toggleCheck(id: number): Promise<Todo> {
    return axiosInstance.patch(`todo/${id}`).then(res => res.data)
  },
}