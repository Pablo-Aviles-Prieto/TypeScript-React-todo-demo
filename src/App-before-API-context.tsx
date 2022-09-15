import { useState } from 'react';

import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

// const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];
const App = () => {
  const [todosList, setTodosList] = useState<Todo[]>([]);

  const addTodoHandler = (enteredText: string) => {
    const newTodo = new Todo(enteredText);
    setTodosList((prevState) => [...prevState, newTodo]);
  };

  const removeTodoHandler = (todoId: string) => {
    setTodosList((prevState) => prevState.filter((todo) => todo.id !== todoId));
  };

  return (
    <div>
      {/* <NewTodo onAddTodo={addTodoHandler} /> */}
      {/* <Todos items={todosList} onRemoveTodo={removeTodoHandler} /> */}
    </div>
  );
};

export default App;
