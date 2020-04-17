import { createAction, handleActions, handleAction, ReducerMapValue } from 'redux-actions'
import produce from 'immer'
import { Todo, TodoActionType, TodosState } from 'models/todoModel'

const CHANGE_INPUT: TodoActionType = 'todos/CHANGE_INPUT' // 인풋 값을 변경함
const INSERT: TodoActionType = 'todos/INSERT' // 새로운 todo 를 등록함
const TOGGLE: TodoActionType = 'todos/TOGGLE' // todo 를 체크/체크해제 함
const REMOVE: TodoActionType = 'todos/REMOVE' // todo 를 제거함

let id = 3 // insert 가 호출 될 때마다 1씩 더해집니다.

// createAction<(함수의) 리탄타입, (함수의) 파라미터타입>
  // createAction(type: String, T: SomeType)
// example
/* type insertActionPayloadCreatorType = (v: String) => Todo
const insertActionPayloadCreator: insertActionPayloadCreatorType = text => ({ id: id++, text, done: false })
export const insert = createAction<Todo, String>(INSERT.toString(), insertActionPayloadCreator) */

export const changeInput = createAction<String, String>(CHANGE_INPUT.toString(), input => input)
export const insert = createAction<Todo, String>(INSERT.toString(), text => ({ id: id++, text, done: false }))
export const toggle = createAction<Number, Number>(TOGGLE.toString(), id => id)
export const remove = createAction<Number, Number>(REMOVE.toString(), id => id)

const initialState: TodosState = {
  input: '',
  id,
  todos: []
}

// payload 값은 위의 createAction에서 만든 함수가 리턴하는 값임
  // payload: xx에서 xx는 payload에 이름을 부여하는 것
  // 따라서 생략하고 그냥 payload로 사용해도 됨
/* const todos = handleActions<TodosState, any>(
  {
    [CHANGE_INPUT.toString()]: (state, { payload: input }) =>
      produce(state, draft => {
        draft.input = input
      }
    ),
    [INSERT.toString()]: (state, { payload: todo }) =>
      produce(state, draft => {
        draft.todos.push(todo)
      }
    ),
    [TOGGLE.toString()]: (state, { payload: id }) =>
      produce(state, draft => {
        const todo: Todo | undefined = draft.todos.find(todo => todo.id === id)
        if(todo) {
          todo.done = !todo.done
        }
      }
    ),
    [REMOVE.toString()]: (state, { payload: id }) =>
      produce(state, draft => {
        const index = draft.todos.findIndex(todo => todo.id === id)
        draft.todos.splice(index, 1)
      }
    ),
  },
  initialState,
) */
const handleChangeInputAction: ReducerMapValue<TodosState, String> = (state, { payload: input }) =>
  produce(state, draft => {
    draft.input = input
  }
)
const handleInsertAction: ReducerMapValue<TodosState, Todo> = (state, { payload: todo }) =>
  produce(state, draft => {
    draft.todos.push(todo)
  }
)
const handleToggleAction: ReducerMapValue<TodosState, Number> = (state, { payload: id }) =>
  produce(state, draft => {
    const todo: Todo | undefined = draft.todos.find(todo => todo.id === id)
    if(todo) {
      todo.done = !todo.done
    }
  }
)
const handleRemoveAction: ReducerMapValue<TodosState, Number> = (state, { payload: id }) =>
  produce(state, draft => {
    const index = draft.todos.findIndex(todo => todo.id === id)
    draft.todos.splice(index, 1)
  }
)

const todos = handleActions<TodosState, any>(
  {
    [CHANGE_INPUT.toString()]: handleChangeInputAction,
    [INSERT.toString()]: handleInsertAction,
    [TOGGLE.toString()]: handleToggleAction,
    [REMOVE.toString()]: handleRemoveAction,

  }
  , initialState
)
export default todos
