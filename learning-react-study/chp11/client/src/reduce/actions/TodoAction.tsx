import { Todo } from "models/TodoModel";

export type TodoTypes = 'INSERT' |'REMOVE' | 'TOGGLE'

export type TodoAction = {
  type: TodoTypes,
  todo: Todo
}
