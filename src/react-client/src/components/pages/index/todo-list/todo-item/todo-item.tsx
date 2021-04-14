import React, { FC, useState } from 'react'
import s from '../todo-list.module.scss'
import { Todo } from '../../../../../shared/types/todo'

const crossIcon = '/close.svg'
const pencilIcon = '/draw.svg'

type Props = {
  todo: Todo,
  deleteTodo: (id: number) => void
  setTodoTitle: (id: number, title: string) => void
  toggleTodo: (id: number) => void
}

export const TodoItem: FC<Props> = ({ todo, deleteTodo, setTodoTitle, toggleTodo }) => {

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [newText, setNewText] = useState<string>(todo.title)

  return (
    <div className={`${s.todoItem} ${todo.checked ? s.checked : ''}`}>
      {
        !isEdit
          ? <span onClick={() => toggleTodo(todo.id)} className={s.title}>{todo.title}</span>
          : <input className={s.editableTitle} value={newText} onChange={e => setNewText(e.target.value)} type='text' />
      }
      <div className={s.editTodo}>
        <img className={s.pencilIcon} src={pencilIcon} alt='Изменить' onClick={() => {
          if (isEdit) {
            setTodoTitle(todo.id, newText)
          }
          setIsEdit(p => !p)
        }} />
        <img className={s.crossIcon} src={crossIcon} alt='Удалить' onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  )
}
