import React, {FunctionComponent} from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
import { TodoListProps } from 'models/TodoModel';

const TodoList: FunctionComponent<TodoListProps> = ({todos, onRemove, onToggle}) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem
          todo={todo}
          key={todo.id.toString()}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
