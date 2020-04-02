import { FunctionComponent } from "react"

export type Todo = {
  id: Number,
  text: String,
  checked: Boolean
}

export type TodoProps = {
  todo: Todo,
  onRemove: (arg: Number) => void,
  onToggle: (arg: Number) => void
}

export type TodoListProps = {
  todos: Array<Todo>,
  onRemove: (arg: Number) => void,
  onToggle: (arg: Number) => void
}

export type TodoInsertProps = {
  onInsert: (args: String) => void
}