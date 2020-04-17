import { CounterState } from './counterModel'
import { TodosState } from './todoModel'

export type AppState = {
  counter: CounterState,
  todos: TodosState
}
export default AppState