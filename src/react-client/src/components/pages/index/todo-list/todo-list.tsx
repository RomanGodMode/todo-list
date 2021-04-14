import React, { useCallback, useEffect, useRef, useState } from 'react'
import s from './todo-list.module.scss'
import { Todo } from '../../../../shared/types/todo'
import { todoApi } from '../../../../api/todo-api'
import { TodoItem } from './todo-item/todo-item'
import { Container } from '../../../common/container/container'
import { replaceByIndex } from '../../../../shared/functions/replace-by-index'


const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [error, setError] = useState<string | undefined>()

  const newTodoInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    todoApi.getTodos().then(t => setTodos(t))
  }, [])

  useEffect(() => setError(undefined), [todos])

  const setTodoTitle = useCallback((id: number, title: string) => {
    todoApi.setTitle(id, title)
      .then(_ => setTodos(todos => {
        const idx = todos.findIndex(t => t.id === id)
        return replaceByIndex(todos, idx, { ...todos[idx], title })
      }))
      .catch(e => setError(e.response.data.message))
  }, [])

  const toggleTodoChecked = useCallback((id: number) => {
    todoApi.toggleCheck(id)
      .then(_ => setTodos(todos => {
        const idx = todos.findIndex(t => t.id === id)
        return replaceByIndex(todos, idx, { ...todos[idx], checked: !todos[idx].checked })
      }))
      .catch(e => setError(e.response.data.message))
  }, [])

  const deleteTodo = useCallback((id: number) => {
    todoApi.deleteTodo(id)
      .then(_ => setTodos(todos => todos.filter(t => t.id !== id)))
      .catch(e => setError(e.response.data.message))
  }, [])


  return (
    <div className={s.todoListApp + ' TodoList'}>
      <Container>
        <div className={s.errorArea}>
          {error}
        </div>
        <form className={s.addTodoForm}>
          <input ref={newTodoInput} type='text' />
          <button onClick={e => {
            e.preventDefault()
            todoApi.addTodo(newTodoInput.current?.value ?? 'Как Так?!')
              .then(t => {
                if (newTodoInput.current) {
                  newTodoInput.current.value = ''
                }
                setTodos(prev => [...prev, t])
              })
              .catch(e => {
                setError(e.response.data.message)
              })
          }}>
            Добавить todo
          </button>
        </form>

        <div className={s.todoList}>
          {
            !todos.length
              ? <div style={{ color: '#fff', fontSize: 20 }}>Пока нет напоминаний</div>
              : todos.map(t => <TodoItem
                toggleTodo={toggleTodoChecked}
                setTodoTitle={setTodoTitle}
                key={t.id}
                todo={t}
                deleteTodo={deleteTodo}
              />)
          }
        </div>
      </Container>
    </div>
  )
}

export default TodoList