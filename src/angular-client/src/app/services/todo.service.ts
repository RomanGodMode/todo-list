import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Todo } from '../shared/types/todo'
import { BehaviorSubject } from 'rxjs'


@Injectable()
export class TodoService {
  private readonly BASE_URL = `${environment.backendUrl}/`

  constructor(private readonly http: HttpClient) {
    this.error$.subscribe(e => console.log(e + ' Игорб'))
  }

  public todos: Todo[] = []

  private _error = new BehaviorSubject<string>('')
  public readonly error$ = this._error.asObservable()


  public handleError = (error: any) => {
    this._error.next(error.error.message[0])
  }


  getTodos() {
    this._error.next('')
    this.http.get<Todo[]>(this.BASE_URL + 'todo')
      .subscribe((d: any) => this.todos = d, this.handleError)
  }

  addTodo(title: string) {
    this._error.next('')
    this.http.post<Todo>(this.BASE_URL + 'todo', { title })
      .subscribe(newTodo => this.todos.push(newTodo), this.handleError)
  }

  deleteTodo(id: number) {
    this._error.next('')
    this.http.delete(this.BASE_URL + `todo/${id}`)
      .subscribe(_ => this.todos.splice(this.todos.findIndex(t => t.id === id), 1), this.handleError)
  }

  setTodoTitle(id: number, title: string) {
    this._error.next('')
    this.http.put(this.BASE_URL + `todo/${id}`, { title })
      .subscribe(_ => this.todos.find(t => t.id === id)!.title = title, this.handleError)
  }

  toggleTodoChecked(id: number) {
    this._error.next('')
    this.http.patch<Todo>(this.BASE_URL + `todo/${id}`, {})
      .subscribe(toggledTodo => this.todos.find(t => t.id === id)!.checked = toggledTodo.checked, this.handleError)
  }
}
