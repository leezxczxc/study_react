import React, {useCallback, FunctionComponent} from 'react'
import { List, ListRowRenderer } from 'react-virtualized'
import { TodoListProps } from 'models/TodoModel'
import TodoListItem from './TodoListItem'
import './TodoList.scss'

const TodoList: FunctionComponent<TodoListProps> = ({todos, onRemove, onToggle}) => {
  const rowRenderer = useCallback<ListRowRenderer>(
    ({index, key, style}) => {
      const todo = todos[index.valueOf()]
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  )

  return (
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      style={{ outline: 'none' }}
    />
  )
};

export default React.memo(TodoList)
