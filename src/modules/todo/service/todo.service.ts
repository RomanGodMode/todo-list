import { Injectable, NotFoundException } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Todo } from '../model/todo.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}

  async getAll(): Promise<Todo[]> {
    return await this.todoRepository.find()
  }

  async getById(id: number): Promise<Todo> {
    const todo = await this.todoRepository.findOne(id)
    if (!todo) {
      throw new NotFoundException()
    }
    return todo
  }

  async addTodo(newTitle: string): Promise<Todo> {
    return await this.todoRepository.save({ title: newTitle })
  }

  async deleteTodo(id: number): Promise<Todo> {
    const todo: Todo = await this.todoRepository.findOne(id)
    if (!todo) {
      throw new NotFoundException()
    }
    return await this.todoRepository.remove(todo)
  }

  async editTodoTitle(id: number, newTitle: string): Promise<Todo> {
    const todo: Todo = await this.todoRepository.findOne(id)
    if (!todo) {
      throw new NotFoundException()
    }
    todo.title = newTitle
    return this.todoRepository.save(todo)
  }

  async toggleTodoChecked(id: number): Promise<Todo> {
    const todo: Todo = await this.todoRepository.findOne(id)
    if (!todo) {
      throw new NotFoundException()
    }
    todo.checked = !todo.checked
    return this.todoRepository.save(todo)
  }

  async isUniqueTitle(title: string): Promise<boolean> {
    const todo = await this.todoRepository.findOne({ title })
    return !todo //Уникальный если такого нет
  }
}
