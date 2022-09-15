import React from 'react';
import styles from './TodoItem.module.css';

type Props = {
  todoText: string;
  id: string;
  onRemoveTodo: (todoId: string) => void;
};

const TodoItem: React.FC<Props> = (props) => {
  const removeTodo = () => {
    props.onRemoveTodo(props.id);
  };

  return (
    <li
      style={{ cursor: 'pointer' }}
      onClick={removeTodo}
      className={styles.item}
    >
      {props.todoText}
    </li>
  );
};

export default TodoItem;
