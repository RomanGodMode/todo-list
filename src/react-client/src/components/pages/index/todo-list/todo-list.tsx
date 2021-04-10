import React, { useEffect, useState } from 'react'
import s from './todo-list.module.scss'
import { Todo } from '../../../../shared/types/todo'
import { todoApi } from '../../../../api/todo-api'


const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    todoApi.getTodos().then(t => setTodos(t))
  }, [])

  return (
    <div className={s.todoList}>
      {todos.length
        ? todos.map(t => <div key={t.id}>
          {t.title}
        </div>)
        : <div>Пуста</div>
      }
    </div>
  )
}

export default TodoList