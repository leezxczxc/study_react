import React, { useState, useRef, useCallback } from 'react';
import { Todo } from 'models/TodoModel';
import TodoTemplate from 'components/TodoTemplate';
import TodoList from 'components/TodoList';
import TodoInsert from 'components/TodoInsert';

const App = () => {
  const [todos, setTodos] = useState<Array<Todo>>([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  // 고유 값으로 사용 될 id
  // ref 를 사용하여 변수 담기
  const nextId = useRef<Number>(4);

  const onInsert = useCallback<((arg0: String) => void)> (
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current = nextId.current.valueOf() + 1; // nextId 1 씩 더하기
    },
    [todos],
  );

  const onRemove = useCallback<(arg0: Number) => void> (
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback<(args0: Number) => void> (
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
