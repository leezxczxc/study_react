import { CounterStoreState } from './counterModel'
import { TodoStoreState } from './todoModel'

export type AppStoreState = {
  counter: CounterStoreState,
  todos: TodoStoreState
}
export default AppStoreState