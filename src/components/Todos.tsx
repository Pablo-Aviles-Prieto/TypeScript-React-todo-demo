import React, { useContext } from 'react';

import TodoItem from './TodoItem';
import styles from './Todos.module.css';
import { TodosContext } from '../store/todos-context';

// type Props = {
//   items?: TodoClass[];
//   onRemoveTodo: (todoId: string) => void;
// };

// React.FC is a type definition (from @types/react package). It makes clear that there is a Fn working as a component (FC means Functional Component).
// After defining the generic type with React.FC, we can set our own types for the props, passing <{}> (a type configuration obj), so it merges our typed props with the generic ones from React.FC.
// We can tell to react that might be no there an items prop (also, we have to handle the case that there are not items props passed from the parent comp).
// We can pass a class typed like Todo. So in this case, it expects a prop called items, and that items will be an array of Todo (and we defined in Todo, an id as string, and a text as string).
const Todos: React.FC = () => {
  // todosCtx is already typed with the TodoContextType from store/todos-context.tsx
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem key={item.id} id={item.id} todoText={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
