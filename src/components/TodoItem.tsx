import React, { useContext } from 'react';

import styles from './TodoItem.module.css';

import { TodosContext } from '../store/todos-context';

type Props = {
  todoText: string;
  id: string;
};

const TodoItem: React.FC<Props> = (props) => {
  const { removeTodo } = useContext(TodosContext);

  const removeTodoHandler = () => {
    removeTodo(props.id);
  };

  return (
    <li
      style={{ cursor: 'pointer' }}
      onClick={removeTodoHandler}
      className={styles.item}
    >
      {props.todoText}
    </li>
  );
};

export default TodoItem;
