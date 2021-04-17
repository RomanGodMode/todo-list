export type Todo = {
  'id': number,
  'title': string,
  'checked': boolean
}

export type PureTodo = Omit<Todo, 'id'>
