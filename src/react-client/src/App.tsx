import React from 'react'
import './shared/styles/App.scss'
import Header from './components/common/header/header'
import TodoList from './components/pages/index/todo-list/todo-list'

function App() {
  return (
    <div className='App'>
      <Header />
      <TodoList />
    </div>
  )
}

export default App
