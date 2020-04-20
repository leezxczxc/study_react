export interface TodoActionType extends String {}

export type Todo = {
  id: Number,
  done: Boolean,
  text: String
}

export type TodoStoreState = {
  input: String,
  id: Number,
  todos: Array<Todo>
}

export type TodoItemProps = {
  todo: Todo,
  onToggle: (v: Number) => void
  onRemove: (v: Number) => void
}
export type TodosProps = {
  input: String,
  todos: Array<Todo>,
  onChangeInput:  (v: String) => void,
  onInsert: (v: String) => void,
  onToggle: (v: Number) => void,
  onRemove: (v: Number) => void,
}

export type TodosContainerState = {
  input: String,
  todos: Array<Todo>
}