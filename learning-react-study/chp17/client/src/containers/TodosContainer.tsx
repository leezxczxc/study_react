import React from 'react'
import { Action } from 'redux'
import { useSelector } from 'react-redux'

import { changeInput, insert, toggle, remove } from 'modules/todos'
import Todos from 'components/Todos'
import useActions from 'lib/useActions'
import { AppState } from 'models/default'
import { TodosContainerState } from 'models/todoModel'

const TodosContainer = () => {
  const { input, todos } = useSelector<AppState, TodosContainerState>(state => ({
    input: state.todos.input,
    todos: state.todos.todos
  }))

  const [onChangeInput] = useActions<Action<string>>(
    [changeInput],
    []
  )
  const [onInsert] = useActions(
    [insert],
    []
  )
  const [onToggle, onRemove] = useActions(
    [toggle, remove],
    []
  )
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  )
}

export default TodosContainer
