import React, { useReducer, useRef, useCallback, FunctionComponent } from 'react';
import { Todo } from 'models/TodoModel';
import { createBulkTodos } from 'repositories/TodoRepository'
import { TodoReducer } from 'reduce/index'
import TodoTemplate from 'components/TodoTemplate';
import TodoList from 'components/TodoList';
import TodoInsert from 'components/TodoInsert';

const App: FunctionComponent = () => {
  const count: Number = 2500
  // const [todos, setTodos] = useState<Array<Todo>>(() => createBulkTodos(count));
  const [todos, todoDispatch] = useReducer(TodoReducer, undefined, () => createBulkTodos(count))

  // 고유 값으로 사용 될 id
  // ref 를 사용하여 변수 담기
  const nextId = useRef<Number>(count.valueOf() + 1);

  const onInsert = useCallback<((arg0: String) => void)> (
    text => {
      const todo: Todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      todoDispatch({type: 'INSERT', todo})
      nextId.current = nextId.current.valueOf() + 1; // nextId 1 씩 더하기
    },
    [],
  );

  const onRemove = useCallback<(arg0: Todo) => void> (
    todo => {
      todoDispatch({type: 'REMOVE', todo})
    },
    [],
  );

  const onToggle = useCallback<(args0: Todo) => void> (
    todo => {
      todoDispatch({type: 'TOGGLE', todo})
    },
    [],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
