import React, { ChangeEvent, FormEvent } from 'react'
import { TodoItemProps, TodosProps } from 'models/todoModel'

const DefaultTodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onRemove }) => {
  console.group('todo component')
  console.log('todo', todo)
  console.groupEnd()
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done.valueOf()}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  )
}

// React.memo로 component 렌더링 최적화
  // TodoIte의 Props가 변하지 않는 한 재렌더링 되지 않음
const TodoItem = React.memo(DefaultTodoItem)

const Todos: React.FC<TodosProps> = ({
  input, // 인풋에 입력되는 텍스트
  todos, // 할 일 목록이 들어있는 객체
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onInsert(input)
    onChangeInput('') // 등록 후 인풋 초기화
  }
  const onChange = (e: ChangeEvent<HTMLInputElement>) => onChangeInput(e.target.value)
  console.group('todos component')
  console.log('input', input)
  console.log('todos', todos)
  console.groupEnd()
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input.toString()} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map(todo => (
          <TodoItem
            todo={todo}
            key={todo.id.valueOf()}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  )
}

// React.memo로 component 렌더링 최적화
  // 즉, Todos의 props가 변하지 않는 한 리렌더링 되지 않음
export default React.memo(Todos)
